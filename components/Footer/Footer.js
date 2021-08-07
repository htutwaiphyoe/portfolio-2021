import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import classes from "./Footer.module.scss";

function Footer(props) {
    function onClickHandler(id) {
        document.getElementById(id).scrollIntoView();
    }
    return (
        <footer className={`${classes.footer}`}>
            <ScrollRevealHOC target="footer-bg" origin="top">
                <div id="footer-bg" className={`${classes.footer__bg}`}>
                    <div className={`${classes.footer__container} container`}>
                        <div className={`${classes.footer__info} footer-info`}>
                            <h1 className={`${classes.footer__title}`}>Htut Wai Phyoe</h1>
                            <span className={`${classes.footer__subtitle}`}>
                                FullStack Developer
                            </span>
                        </div>

                        <ul className={`${classes.footer__links}`}>
                            <li
                                onClick={() => onClickHandler("services")}
                                className={classes.footer__link}
                            >
                                Services
                            </li>
                            <li
                                onClick={() => onClickHandler("subscription")}
                                className={classes.footer__link}
                            >
                                Subscription
                            </li>
                            <li
                                onClick={() => onClickHandler("contact")}
                                className={classes.footer__link}
                            >
                                Contact
                            </li>
                        </ul>

                        <ul className={`${classes.footer__socials}`}>
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

                    <div className={`${classes.footer__copy}`}>
                        Copyright&copy; 2021. Htut Wai Phyoe <br />
                        Terms & conditions. All rights reserved.
                    </div>
                </div>
            </ScrollRevealHOC>
        </footer>
    );
}

export default Footer;
