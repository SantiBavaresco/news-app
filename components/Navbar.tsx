import Link from "next/link"
import {links} from "./links";


export function Navbar(){
    return(
        <nav>
            <ul>
            {links.map( ( {label, route} ) => (
                <li key={route}>
                    <Link href={route}> 
                        {label}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}