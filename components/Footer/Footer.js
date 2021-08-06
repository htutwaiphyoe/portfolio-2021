import { useEffect } from "react";

import classes from "./Footer.module.scss";

function Footer(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#footer-info, #footer-links, #footer-socials`, {
            origin: "top",
            interval: 100,
        });
        sr.reveal(`#footer-copy`, {
            origin: "bottom",
            interval: 100,
        });
    }, []);
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.footer__container} container`}>
                <div className={`${classes.footer__info}`} id="footer-info">
                    <h1 className={`${classes.footer__title}`}>Htut Wai Phyoe</h1>
                    <span className={`${classes.footer__subtitle}`}>FullStack Developer</span>
                </div>

                <ul className={`${classes.footer__links}`} id="footer-links">
                    <li>
                        <a href="#services" className={classes.footer__link}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#subscription" className={classes.footer__link}>
                            Subscription
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={classes.footer__link}>
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className={`${classes.footer__socials}`} id="footer-socials">
                    <a
                        href="https://www.facebook.com/hwp.dev/"
                        className={classes.footer__social}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/htutwaiphyoe_/"
                        className={classes.footer__social}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/htut-wai-phyoe-876a21190/"
                        className={classes.footer__social}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-linkedin-box-fill"></i>
                    </a>
                    <a
                        href="https://github.com/htutwaiphyoe"
                        className={classes.footer__social}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-github-fill"></i>
                    </a>
                </ul>
            </div>

            <p className={`${classes.footer__copy}`} id="footer-copy">
                Copyright&copy; 2021. Htut Wai Phyoe <br />
                Terms & conditions. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
