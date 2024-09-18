import { useLocation, useSubmit } from "@remix-run/react";
import { useEffect, useReducer, useState } from "react";
import { init19x19 } from "~/configs/intiBoards";
import { golNewGeneration } from "~/utils/gol";
import { getRandomBoolean } from "~/utils/misc";
import { Theme, useTheme } from "~/utils/provider/theme-provider";


const createRandomPath = (x: number, y: number): string[] => {
    let bo_right_x = x * 9 + 9
    let bo_right_y = y * 9 + 9
    let bo_left_x = x * 9 + 9
    let bo_left_y = y * 9 + 9
    let to_right_x = x * 9 + 9
    let to_right_y = y * 9 + 9
    let to_left_x = x * 9 + 9
    let to_left_y = y * 9 + 9

    let bo_right = `M ${bo_right_x} ${bo_right_y}`
    let bo_left = `M ${bo_left_x} ${bo_left_y}`
    let to_right = `M ${to_right_x} ${to_right_y}`
    let to_left = `M ${to_left_x} ${to_left_y}`

    for (let i = 0; i < 19; i += 1) {
        let dev_1 = 0
        let dev_2 = 0
        let dev_3 = 0
        let dev_4 = 0

        if (getRandomBoolean()) {
            bo_right_x += 9
        } else {
            bo_right_y += 9
            dev_1 = 0.2
        }

        if (getRandomBoolean()) {
            bo_left_x -= 9
        } else {
            bo_left_y += 9
            dev_2 = 0.25
        }

        if (getRandomBoolean()) {
            to_right_x += 9
            dev_3 = - 0.2
        } else {
            to_right_y -= 9
        }

        if (getRandomBoolean()) {
            to_left_x -= 9
            dev_4 = - 0.5
        } else {
            to_left_y -= 9
        }

        bo_right += ` C ${bo_right_x} ${bo_right_y}, ${bo_right_x + dev_3} ${bo_right_y + dev_4}, ${bo_right_x} ${bo_right_y}`
        bo_left += ` C ${bo_left_x} ${bo_left_y}, ${bo_left_x} ${bo_left_y + dev_1}, ${bo_left_x + dev_2} ${bo_left_y}`
        to_left += ` C ${to_left_x} ${to_left_y},${to_left_x} ${to_left_y + dev_4},${to_left_x + dev_1} ${to_left_y}`
        to_right += ` C ${to_right_x} ${to_right_y}, ${to_right_x + dev_2} ${to_right_y + dev_3}, ${to_right_x} ${to_right_y}`
    }

    return [bo_right, bo_left, to_left, to_right]
}


export default function GolGrid({ initPopulation }: { initPopulation: number[][] }) {
    const submit = useSubmit()
    const populationWithFallback = initPopulation ? initPopulation : init19x19
    const virtualPointSize = 10;
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const [popState, setPopState] = useState(populationWithFallback);
    const { pathname } = useLocation()
    const [intPath, setIntPath] = useState<null | string[]>(null)
    const pointsWide = populationWithFallback[0].length;
    const pointsHigh = populationWithFallback.length;
    const [, setTheme] = useTheme();

    const clickOnTile = (x: number, y: number) => {
        if (pathname !== '/') return
        const path = createRandomPath(x, y)
        setIntPath(path)
        submit({ x, y, name: 'play' }, { method: 'post', action: '/action/click-grid' })
    }

    useEffect(() => {
        if (pathname === '/') {
            const interval = setInterval(() => {
                const oneGen = golNewGeneration(popState);
                setPopState(oneGen);
                forceUpdate()
            }, 3200)
            return () => clearInterval(interval)
        } else {
            setIntPath(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div className="allscreen">
            <div className="limit">
                <svg className={`all_good${pathname === '/' ? ' touch_me' : ''}`} viewBox={`0 0 ${pointsWide * virtualPointSize - 20} ${pointsHigh * virtualPointSize - 20}`}>
                    {popState.map((it, itInd) => it.map((itt, ittInd) => <rect rx={5} ry={2} className={itt === 0 ? '' : 'a'} onClick={() => clickOnTile(itInd, ittInd)} x={itInd * virtualPointSize} y={ittInd * (virtualPointSize - 1)} key={`${itInd}-${ittInd}`} />))}
                    <g tabIndex={0} type="button" className="xbw" onClick={() => setTheme((prev) => prev === Theme.DARK ? Theme.LIGHT : Theme.DARK)}>
                        <rect rx={5} ry={2} className="y" y={0} x={0} />
                        <circle r={3} cx={4.75} cy={4.5} />
                    </g>
                    {intPath ? intPath.map((it, ind: number) => (
                        <path className="p_i" d={it} key={ind} />
                    )) : null}
                </svg>
            </div>
        </div>
    )
}

