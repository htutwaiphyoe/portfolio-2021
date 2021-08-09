import classes from "./Footer.module.scss";

function Footer(props) {
    const links = ["Services", "Subscription", "Contact"];
    const socials = [
        { href: "https://www.facebook.com/hwp.dev/", icon: "facebook-circle" },
        { href: "https://www.instagram.com/htutwaiphyoe_/", icon: "instagram" },
        { href: "https://www.linkedin.com/in/htut-wai-phyoe-876a21190/", icon: "linkedin-box" },
        { href: "https://github.com/htutwaiphyoe", icon: "github" },
    ];
    function onClickHandler(id) {
        document.getElementById(id).scrollIntoView();
    }
    return (
        <footer className={`${classes.footer}`}>
            <div id="footer-bg" className={`${classes.footer__bg} `}>
                <div className={`${classes.footer__container} container`}>
                    <div className={`${classes.footer__info} footer-info`}>
                        <h1 className={`${classes.footer__title}`}>Htut Wai Phyoe</h1>
                        <span className={`${classes.footer__subtitle}`}>FullStack Developer</span>
                    </div>

                    <ul className={`${classes.footer__links}`}>
                        {links.map((link) => (
                            <li
                                onClick={() => onClickHandler(link.toLowerCase())}
                                className={classes.footer__link}
                                key={link}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>

                    <ul className={`${classes.footer__socials}`}>
                        {socials.map((social, i) => (
                            <a
                                href={social.href}
                                className={classes.footer__social}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={i}
                            >
                                <i className={`ri-${social.icon}-fill`}></i>
                            </a>
                        ))}
                    </ul>
                </div>

                <div className={`${classes.footer__copy}`}>
                    Copyright&copy; 2021. Htut Wai Phyoe <br />
                    Terms & conditions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
