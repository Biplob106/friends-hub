
export const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">KeenKeeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a><span></span>home</a></li>
                    <li>
                        <a><span></span>time line</a>
                    </li>
                    <li><span></span><a>Stats</a></li>
                </ul>
            </div>
        </div>
    )
}
