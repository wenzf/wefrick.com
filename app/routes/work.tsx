
import { MetaFunction } from "@remix-run/node";
import { commonMetaTags, metas } from "~/configs/metas";
import { ROUTE_FRAGRMENTS, SITE_URL } from "~/configs/sys";

const { WORK } = ROUTE_FRAGRMENTS

export const meta: MetaFunction = () => {
    return [
        { title: metas.work.t },
        { name: "description", content: metas.work.d },
        { tagName: 'link', rel: 'canonical', href: `${SITE_URL}/${WORK}` },
        ...commonMetaTags
    ];
};

export default function Work() {
    return (
        <main className="home_cont">
            <h1 className="padding05rem radius025rem readable">WORK</h1>

            <section className="padding05rem radius025rem readable sec">
                <p><strong> I build websites and applications that live on the web and consult with strategies and concepts for web presence.</strong></p>
                <h2>FOCUS</h2>
                <ul>
                    <li><strong>Web accessibility:</strong> Ensure that website content is also accessible to visitors with visual impairments or motor impairments. Often underestimated.
                    </li>
                    <li><strong>Pagespeed:</strong> A slow loading website is not helpful for the presentation of a product or a message. The first impression counts.
                    </li>
                    <li><strong>Data visualization:</strong> Visualize spatial or numerical data with interactive maps, statistics, or graphs.
                    </li>
                    <li><strong>On-page SEO:</strong> Structure web content so that it is indexed by search engines and search results are displayed as desired.
                    </li>

                </ul>

                <h2>TECH</h2>
                <ul>
                    <li><strong>Remix:</strong> Fullstack framework built on top of React and React Router that runs on Node or cloud endpoints.
                    </li>
                    <li><strong>React:</strong> The popular library for web applications.
                    </li>
                    <li><strong>Preact:</strong> A lightweight version of React. For use cases where page speed is critical.
                    </li>
                    <li><strong>From scratch:</strong> Websites built from scratch with HTML, pure CSS, and a little JavaScript are still the best way to go for most use cases such as personal homepages, company or product landing pages. Less is more.
                    </li>
                    <li><strong>AWS:</strong> Cloud hosting, DynamoDB (NoSQL) and microservices from Amazon Web Services .</li>

                </ul>
            </section>

        </main>

    );
}
