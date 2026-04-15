import { VscHome } from "react-icons/vsc";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";



export const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">KeenKeeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a><span><VscHome />
                    </span>home</a></li>
                    <li>
                        <a><span><RiTimeLine />
                        </span>time line</a>
                    </li>
                    <li><a><span><ImStatsDots />
                    </span>Stats</a></li>
                </ul>
            </div>
        </div>
    )
}
