import { NavLink } from "@remix-run/react";
import { ROUTE_FRAGRMENTS } from "~/configs/sys";

export default function Header() {
   const { WELCOME, WORK, STUFF } = ROUTE_FRAGRMENTS
    return (
        <header className="padding05rem">
            <nav className="flex gap1rem">
                <NavLink className="a_1" to="/">home</NavLink>
                <NavLink className="a_1" to={`/${WELCOME}`}>hello</NavLink>
                <NavLink className="a_1" to={`/${WORK}`}>work</NavLink>
                <NavLink className="a_1" to={`/${STUFF}`}>stuff</NavLink>
            </nav>
        </header>
    )
}