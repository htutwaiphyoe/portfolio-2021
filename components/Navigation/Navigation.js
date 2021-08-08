import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import classes from "./Navigation.module.scss";

function Navigation(props) {
    const router = useRouter();
    const themeIconRef = useRef();
    const headerRef = useRef();
    const toggleIconRef = useRef();
    const navMenuRef = useRef();
    const items = [
        { path: "/", name: "Home", icon: "home-5" },
        { path: "/projects", name: "Projects", icon: "award" },
        { path: "/blogs", name: "Blogs", icon: "article" },
        { path: "/series", name: "Series", icon: "folder" },
    ];

    useEffect(() => {
        const localTheme = localStorage.getItem("hwp-theme");
        if (localTheme) {
            window.document.body.classList[localTheme === "dark" ? "add" : "remove"]("dark-theme");
            themeIconRef.current.classList[localTheme === "dark" ? "add" : "remove"]("ri-sun-line");
        }
        function scrollHandler() {
            if (this.scrollY >= 30) headerRef.current.classList.add("scroll-active");
            else headerRef.current.classList.remove("scroll-active");
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    function themeChangeHandler() {
        window.document.body.classList.toggle("dark-theme");
        themeIconRef.current.classList.toggle("ri-sun-line");
        const newTheme = window.document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("hwp-theme", newTheme);
    }
    function toggleChangeHandler() {
        navMenuRef.current.classList.toggle(classes.nav__menu_active);
    }
    function removeActiveNav() {
        navMenuRef.current.classList.remove(classes.nav__menu_active);
    }
    return (
        <header className={classes.header} ref={headerRef}>
            <nav className={`${classes.nav} container`}>
                <Link href="/">
                    <a className={classes.nav__logo}>Htut Wai Phyoe</a>
                </Link>

                <div className={classes.nav__menu} ref={navMenuRef}>
                    <ul className={classes.nav__list} onClick={removeActiveNav}>
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
                                        <i
                                            className={`ri-${item.icon}-line ${classes.nav__link__icon}`}
                                        ></i>
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <i
                        className={`ri-close-line ${classes.nav__close}`}
                        onClick={toggleChangeHandler}
                    ></i>
                </div>

                <div className={classes.nav__btns}>
                    <i
                        className={`ri-moon-line ${classes.nav__icon}`}
                        onClick={themeChangeHandler}
                        ref={themeIconRef}
                    ></i>

                    <i
                        className={`ri-menu-line ${classes.nav__icon} ${classes.nav__toggle}`}
                        ref={toggleIconRef}
                        onClick={toggleChangeHandler}
                    ></i>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
