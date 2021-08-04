import Link from "next/Link";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import classes from "./Navigation.module.scss";

function Navigation(props) {
    const router = useRouter();
    const themeIconRef = useRef();
    const items = [
        { path: "/", name: "Home" },
        { path: "/projects", name: "Projects" },
        { path: "/blogs", name: "Blogs" },
        { path: "/series", name: "Series" },
    ];

    useEffect(() => {
        const localTheme = localStorage.getItem("hwp-theme");
        if (localTheme) {
            document.body.classList[localTheme === "dark" ? "add" : "remove"]("dark-theme");
            themeIconRef.current.classList[localTheme === "dark" ? "add" : "remove"]("ri-sun-line");
        }
    }, []);
    function themeChangeHandler() {
        document.body.classList.toggle("dark-theme");
        themeIconRef.current.classList.toggle("ri-sun-line");
        const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("hwp-theme", newTheme);
    }

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
                    <i
                        className={`ri-moon-line ${classes.nav__icon}`}
                        onClick={themeChangeHandler}
                        ref={themeIconRef}
                    ></i>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
