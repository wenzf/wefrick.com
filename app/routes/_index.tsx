import { MetaFunction } from "@remix-run/node";
import { commonMetaTags, metas } from "~/configs/metas";
import { SITE_URL } from "~/configs/sys";
import { useTheme } from "~/utils/provider/theme-provider";


export const meta: MetaFunction = () => {
  return [
    { title: metas.home.t },
    { name: "description", content: metas.home.d },
    { tagName: 'link', rel: 'canonical', href: `${SITE_URL}` },
    ...commonMetaTags
  ];
};


export default function Index() {
  const [theme] = useTheme()
  return (
    <main className="home_cont">
      <h1 className="padding05rem radius025rem readable">Wenzel Frick{"'"}s personal website</h1>
      <div className="padding05rem radius025rem readable sec">
        <p>Conway{"'"}s Game of Life plays in the background.</p>
        <details>
          <summary>
            Learn more
          </summary>
          {theme === 'dark' ? 'Light' : 'Dark'} tiles repesent living cells.
          <ul>
            <li>Any live cell with fewer than two live neighbors dies.</li>
            <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbors dies.</li>
            <li>Any dead cell with exactly three live neighbors becomes a live cell.</li>
          </ul>
          <p>Click on a cell to change its intial state.</p>
        </details>
      </div>
    </main>
  );
}
