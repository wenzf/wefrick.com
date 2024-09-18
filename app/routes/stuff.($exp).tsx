import { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react"
import { Link, NavLink } from "react-router-dom"
import { commonMetaTags, metas } from "~/configs/metas";
import { ROUTE_FRAGRMENTS, SITE_URL } from "~/configs/sys";
import ArrowLeftIconSVG from "~/res/icons/ArrowLeftIconSVG"

const { STUFF } = ROUTE_FRAGRMENTS

const TEXT_FRAGMENTS = {
    TF_URL: 'URL',
    TF_TYPE: 'Type',
    TF_DOMAIN_HISTORY: 'Domain history',
    TF_TIME: 'Time',
    TF_STATUS: 'Status',
    TF_OBSERVING: 'Observing',
    TF_NEW_DOMAIN: 'New domain'
}


export const meta: MetaFunction = ({ params }) => {
    const { exp } = params;

    if (!exp) {
        return [
            { title: metas.stuff.t },
            { name: "description", content: metas.stuff.d },
            { tagName: 'link', rel: 'canonical', href: `${SITE_URL}/${STUFF}` },
            ...commonMetaTags
        ]
    } else {
        try {
            const items = metas.stuff_items[exp as keyof typeof metas.stuff_items]
            return [
                { title: items.t },
                { name: "description", content: items.d },
                { tagName: 'link', rel: 'canonical', href: `${SITE_URL}/${STUFF}/${exp}` },
                ...commonMetaTags
            ]
        } catch {
            return [
                ...commonMetaTags
            ]
        }
    }
}


const TRItem = ({ thTitle, linkUrl, linkTxt }: { thTitle: string, linkUrl: string, linkTxt: string }) => (
    <tr>
        <th>{thTitle}</th>
        <td><NavLink className="a_1" to={linkUrl}>{linkTxt}</NavLink></td>
    </tr>
)


export default function Stuff() {
    const { exp } = useParams()
    const { TF_TYPE, TF_TIME, TF_DOMAIN_HISTORY, TF_NEW_DOMAIN, TF_OBSERVING, TF_STATUS, TF_URL } = TEXT_FRAGMENTS
    return (
        <main className="home_cont">
            <h1 className="padding05rem radius025rem readable">
                STUFF
            </h1>

            {!exp ? (
                <section className="padding05rem radius025rem readable sec">
                    <p>A selection of showcases, prototypes and web experiments in chronological order. Conducted to learn about search engine indexing and the impact of code on search performance. They range from quick and dirty prototypes to near-production ready projects.</p>
                    <table className="o_table">
                        <caption>
                            Web Projectts
                        </caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(metas.stuff_items).map((it, ind: number) => (
                                <TRItem key={ind} thTitle={it[1].t} linkUrl={`/${STUFF}/${it[0]}`} linkTxt={it[1].d} />
                            ))}
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'inzh' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Data portal Zurich</h2>
                    <p>Open data web experiment using public data of Open Government Data of Zurich (Switzerland).</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://inzh.ch">inzh.ch</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Data portal</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>September 2024</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>{TF_OBSERVING}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'opendata-sg' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Data portal OpenData SG</h2>
                    <p>Open data web experiment using public data of St.Gallen (Switzerland). Some content types are partially reformatted to a more suitable structure and stored in a separate database.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://odsg.ch">odsg.ch</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Data portal</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>June 2024</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>{TF_OBSERVING}</td>
                            </tr>
                            <tr>
                                <th>Code</th>
                                <td><Link className="a_2" to="https://github.com/wenzf/opendatasg">Github</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'clinic' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Landing page demo with accessibility and safety best-practices applied</h2>
                    <p>Best practices in terms of accessibility and security play an important role in the homepages of clinics and public institutions. This landing page is a simple demo that applies these standards.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://beispiel.li">beispiel.li</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Landingpage</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>April 2024</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Terminated</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'ecsmap' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Charging stations for electric cars in Switzerland and surrounding areas</h2>
                    <p>An interactive map showing charging stations of different providers for electric cars. The aim is to provide a user-friendly alternative to existing platforms, especially for users on the move.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://ecsmap.com">ecsmap.com</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Map / Data Visualization</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>April 2024 - present</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Ongoing: developing and observing.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'diplomacy-game' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Platform to play Diplomacy online</h2>
                    <p>The legendary Diplomacy board game has a small but dedicated community. Most platforms to play the game online are outdated and not user-friendly for playing the game on mobiles. The DPLMC platform provides an alternative and adds some additional features which might be useful to the community.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://dplmc.com">dplmc.com</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Gaming</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>March 2024 - present</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Ongoing: developing and observing.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'people-nature-stones' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>People Nature Stones</h2>
                    <p>The motivation is to develop an easy-to-use CMS and a code base that can be easily cloned to reduce coding time and make such systems more affordable for non-commercial users.</p>
                    <p>WordPress has been the standard framework for such use cases for ages. Providing an alternative without security flaws, better page speed and UX along with lower cloud hosting costs is the long term goal.</p>
                    <p>The challenge is to keep it as small as possible. That{"'"}s important because all the backend code is consumed on every request, so the amount of memory required should be kept to a minimum and execution should remain fast. Therefore, the use of third-party libraries is kept to a minimum.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://peoplenaturestones.com">peoplenaturestones.com</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Travel blog</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>December 2023 - present</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Ongoing: developing and observing.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'msaidx' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>MSA.IDX</h2>
                    <p>The initial idea behind this experiment was to play around with sentiment analysis (estimating the emotional sentiment of text content). Previous tests showed that a{'('} Google is smart at crawling web pages and that b{')'} the tech stack (<em>Remix/React</em> living in a <em>Node</em> server function on <em>AWS</em>) has good performance.</p>
                    <p>Reddit was chosen as the source for the texts. Two different indexes were created to bring something new (and hopefully useful) to the web. On top of that, a rest API so that users can programmatically access the index data.</p>
                    <p>A feature is that each query creates a new data point that is stored in the database. In this way, new content is constantly generated and current sentiment values can be compared with values from the past.</p>
                    <p>There are a few web tools that provide sentiment analysis of Reddit. Mainly used for marketing purposes (brand monitoring), relatively expensive. Offering the service for free and adding some branding should increase the probability that people start using it and it gains popularity over time.</p>
                    <p>Another feature is the distinction between queries made by humans and those made by bots of search engines or LLMs. - I{"'"}m curious to see if machines and humans are interested in the same topics.</p>
                    <p>While this project is far from perfect, the codebase and concept could serve as a foundation for a commercial project in the future.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://msaidx.com">msaidx.com</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>Search site, statistical sentiment data</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>{TF_NEW_DOMAIN}</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>November 2023 - present</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Broken due to changes in the API.</td>
                            </tr>
                            <tr>
                                <th>Learnings</th>
                                <td>
                                    <ul className="ul_fl">
                                        <li>As expected, Google explores and indexes pages and creates new index combinations.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'disruption-department' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>Disruption Department</h2>
                    <p>More of a prototype than an experiment, trying to optimize a <Link className="a_2" to="https://aioped.com"> previously developed</Link> system.</p>
                    <p>The goal is to produce and publish more and better content in a shorter time. The key factor to reach this, is the automatzied tanslation of text content, meta data of articles and images. The system uses DeepL{"'"}s API for translations.</p>
                    <p>The strategy to improve the content, is to summarize peer-reviewd research papers pubished on PLOS. This should ensure a high quality of source of the content.</p>
                    <p> Depending on the user and internet connection, the process of creating a article, translated to 29 langues, takes 7 to 15 minutes.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://thedisruptiondepartment.org">thedisruptiondepartment.org</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>News site, multingual</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>Expired domain; mixed history</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>August - November 2023</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Terminated: observing, no further development, no new content.</td>
                            </tr>
                            <tr>
                                <th>Learnings</th>
                                <td>
                                    <ul className="ul_fl">
                                        <li>Search performance is below expectations. Maybe because pure summaries without adding new information aren{"'"}t considered valuable information by search engines. Another possibility is the partially spammy history of the domain or low search volume for scientific niche topics.</li>
                                        <li>Markdown (.md) format can be messed up when translated to certain languages by DeepL. Therefore, HTML input seems to be a better choice for lists and tables.</li>
                                        <li>Further improvements are needed. The time needed to create content is still too long to use the system for a long-term experiment. The whole process (selecting a topic, creating text content and metadata with LLM, selecting and uploading images with metadata and translations) shouldn{"'"}t take longer than 5 minutes.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

            {exp === 'rxsearch' ? (
                <section className="padding05rem radius025rem readable sec">
                    <NavLink to={`/${STUFF}`} className="a_2"><ArrowLeftIconSVG aria-label="Back to overview page" width={24} height={24} /></NavLink>
                    <h2>RxSearch</h2>
                    <p>What happens when a domain that was previously used for an online pharmacy and has a spammy history is used as a search site for RxNorm drugs?</p>
                    <p>Apart from some lessons learned, not much.</p>
                    <table className="o_table">
                        <caption>Summary</caption>
                        <tbody>
                            <tr>
                                <th>{TF_URL}</th>
                                <td><Link className="a_2" to="https://sftpharmacy.com">sftpharmacy.com</Link></td>
                            </tr>
                            <tr>
                                <th>{TF_TYPE}</th>
                                <td>RxNorm medical drugs search site</td>
                            </tr>
                            <tr>
                                <th>{TF_DOMAIN_HISTORY}</th>
                                <td>Expired domain; large number of spammy backlinks</td>
                            </tr>
                            <tr>
                                <th>{TF_TIME}</th>
                                <td>July - present</td>
                            </tr>
                            <tr>
                                <th>{TF_STATUS}</th>
                                <td>Ongoing: observing, no further development.</td>
                            </tr>
                            <tr>
                                <th>Learnings</th>
                                <td>
                                    <ul className="ul_fl">
                                        <li>Very reasonable page speed considering that some queries require multiple API calls in successive steps.</li>
                                        <li>A sitemap with 20 sample pages, cross-references and structured data markup (sitelinks search box) was used to help search engines discover new content. This worked nicely.</li>
                                        <li>Google and Bing handle indexing very differently. While Google actively crawls the site and seems to use the keyword search box, Bing doesn{"'"}t index pages at all. Whether this is because Google is more advanced in crawling sites or because the domain history is too spammy to be considered trustworthy by Bing is unclear. It is worth noting that sites that provide medical information are viewed more critically than others.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            ) : null}

        </main>
    )
}