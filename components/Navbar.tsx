import Link from "next/link"
import {NavBarLinks} from "./NavBarLinks";
import style from "./Navbar.module.css"


export function Navbar(){
    return(
        <header className={style.header}> 
            <nav>
                <ul className={style.navbar}>
                {NavBarLinks.map( ( {label, route} ) => (
                    <li key={route}>
                        <Link href={route}> 
                            {label}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}