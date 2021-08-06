import classes from "./Contact.module.scss";

function Contact(props) {
    return (
        <section id="section" className={`section ${classes.contact}`}>
            <h2 className={`section__title`}>Contact me</h2>
            <span className={`section__subtitle`}>Get in touch</span>
            <div className={`container ${classes.contact__container}`}>
                <div className={`${classes.contact__informations}`}>
                    <div className={`${classes.contact__information}`}>
                        <i className={`ri-phone-line ${classes.contact__icon}`}></i>
                        <div className={`${classes.contact__data}`}>
                            <h3 className={`${classes.contact__title}`}>Phone</h3>
                            <span className={`${classes.contact__subtitle}`}>09798652590</span>
                        </div>
                    </div>
                    <div className={`${classes.contact__information}`}>
                        <i className={`ri-mail-line ${classes.contact__icon}`}></i>
                        <div className={`${classes.contact__data}`}>
                            <h3 className={`${classes.contact__title}`}>Email</h3>
                            <span className={`${classes.contact__subtitle}`}>
                                htutwaiphyoe@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className={`${classes.contact__information}`}>
                        <i className={`ri-map-pin-line ${classes.contact__icon}`}></i>
                        <div className={`${classes.contact__data}`}>
                            <h3 className={`${classes.contact__title}`}>Location</h3>
                            <span className={`${classes.contact__subtitle}`}>
                                Mandalay, Myanmar
                            </span>
                        </div>
                    </div>
                </div>
                <form className={`${classes.contact__form}`}>
                    <div className={`${classes.contact__content}`}>
                        <label htmlFor="name" className={`${classes.contact__label}`}>
                            Name
                        </label>
                        <input type="text" id="name" className={`${classes.contact__input}`} />
                    </div>
                    <div className={`${classes.contact__content}`}>
                        <label htmlFor="email" className={`${classes.contact__label}`}>
                            Email
                        </label>
                        <input type="email" id="email" className={`${classes.contact__input}`} />
                    </div>

                    <div className={`${classes.contact__content}`}>
                        <label htmlFor="message" className={`${classes.contact__label}`}>
                            Message
                        </label>
                        <textarea
                            cols={0}
                            rows={7}
                            id="message"
                            className={`${classes.contact__input}`}
                        />
                    </div>

                    <div>
                        <button href="#contact" className={`${classes.contact__btn}`}>
                            Send now
                            <i className={`ri-send-plane-2-line ${classes.contact__btn__icon}`}></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
