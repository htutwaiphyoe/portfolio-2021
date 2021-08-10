import Button from "../UI/Button/Button";
import classes from "./NotFound.module.scss";

function NotFound(props) {
    return (
        <section className={`${classes.notfound} container`}>
            <div>
                <img
                    src="/images/site/404/notfound.svg"
                    alt="404"
                    className={`container ${classes.notfound__image}`}
                />
                <p className={`container ${classes.notfound__text}`}>Oops, nothing was here!</p>
                <Button type="link" text="Back to Home" href="/" />
            </div>
        </section>
    );
}
export default NotFound;
