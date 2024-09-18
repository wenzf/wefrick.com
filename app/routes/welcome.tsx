import { MetaFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";
import { commonMetaTags, metas } from "~/configs/metas";
import { ROUTE_FRAGRMENTS, SITE_URL } from "~/configs/sys";
import GithubIconSVG from "~/res/icons/GithubIconSVG";

const { WELCOME, STUFF, WORK } = ROUTE_FRAGRMENTS

export const meta: MetaFunction = () => {
    return [
        { title: metas.welcome.t },
        { name: "description", content: metas.welcome.d },
        { tagName: 'link', rel: 'canonical', href: `${SITE_URL}/${WELCOME}` },
        ...commonMetaTags
    ];
};

export default function Welcome() {
    return (
        <main className="home_cont">
            <h1 className="padding05rem radius025rem readable">
                WELCOME
            </h1>
            <section className="padding05rem radius025rem readable sec">
                <p>I code applications that live on the Internet.</p>
                <p>Have a look at <NavLink className="a_2" to={`/${WORK}`}>what I{"'"}m doing</NavLink>, check out some of <NavLink className="a_2" to={`/${STUFF}`}>my stuff</NavLink> or code on <Link style={{ gap: '0.5rem', alignItems: 'center' }} className="a_2" to="https://github.com/wenzf">Github{' '}<GithubIconSVG width={14} height={14} aria-label="Github icon" /></Link>.</p>
                <p>For collaboration drop me a line at <Link className="a_2" to="mailto:hello@wefrick.com">hello@wefrick.com</Link>.</p>
            </section>
        </main>
    )
}