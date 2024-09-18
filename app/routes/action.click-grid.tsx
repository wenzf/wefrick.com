import { ActionFunction, redirect } from "@remix-run/node";
import { getUscoItem, uploadUsco } from "~/serverOnly/dynamoDB/db.server";


export const action: ActionFunction = async ({ request }) => {
    const requestText = await request.text()
    const form = new URLSearchParams(requestText)
    const name = form.get('name');
    if (name === 'play') {
        const x = form.get('x');
        const y = form.get('y');
        if (typeof x === 'string' && typeof y === 'string') {
            const xNumb = parseInt(x);
            const yNumb = parseInt(y)
            const currentGrid = await getUscoItem('grid');
            const copyGrid = currentGrid.grid;
            copyGrid[xNumb][yNumb] = copyGrid[xNumb][yNumb] === 0 ? 1 : 0;
            await uploadUsco({ pk: 'grid', grid: copyGrid })
        }
    }
    return redirect('/welcome')
}


export const loader = () => redirect('/', { status: 404 })


