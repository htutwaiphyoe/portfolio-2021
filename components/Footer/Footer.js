import classes from "./Footer.module.scss";

function Footer(props) {
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.footer__container} container`}>
                <div className={`${classes.footer__info}`}>
                    <h1 className={`${classes.footer__title}`}>Htut Wai Phyoe</h1>
                    <span className={`${classes.footer__subtitle}`}>FullStack Developer</span>
                </div>

                <ul></ul>

                <ul></ul>
            </div>

            <div>
                <p>
                    Copyright&copy; 2021. Developed by Htut Wai Phyoe <br />
                    Terms & conditions. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
