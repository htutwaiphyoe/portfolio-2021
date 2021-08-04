import Link from "next/Link";
import { useRouter } from "next/router";
import classes from "./Navigation.module.scss";

function Navigation(props) {
    const router = useRouter();

    const items = [
        { path: "/", name: "Home" },
        { path: "/projects", name: "Projects" },
        { path: "/blogs", name: "Blogs" },
        { path: "/series", name: "Series" },
    ];

    return (
        <header className={classes.header}>
            <nav className={`${classes.nav} container`}>
                <Link href="/">
                    <a className={classes.nav__logo}>Htut Wai Phyoe</a>
                </Link>

                <div className={classes.nav__menu}>
                    <ul className={classes.nav__list}>
                        {items.map((item) => (
                            <li className={classes.nav__item} key={item.path}>
                                <Link href={item.path}>
                                    <a
                                        className={`${classes.nav__link} ${
                                            router.pathname === item.path
                                                ? classes.nav__link_active
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes.nav__btns}>
                    <i className={`ri-moon-line ${classes.nav__icon}`}></i>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
