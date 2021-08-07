import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import SectionHOC from "../../hoc/Section/Section";
import Information from "./Information/Information";
import classes from "./Contact.module.scss";

function Contact(props) {
    const informations = [
        { icon: "phone", title: "Phone", subtitle: "09798652590" },
        { icon: "mail", title: "Email", subtitle: "htutwaiphyoe@gmail.com" },
        { icon: "map-pin", title: "Location", subtitle: "Mandalay, Myanmar" },
    ];
    return (
        <SectionHOC id="contact" title="Contact me" subtitle="Get in touch">
            <div className={`container ${classes.contact__container}`}>
                <ScrollRevealHOC target="contact-informations" origin="left">
                    <div className={`${classes.contact__informations}`} id="contact-informations">
                        {informations.map((information, i) => (
                            <Information information={information} key={i} />
                        ))}
                    </div>
                </ScrollRevealHOC>

                <ScrollRevealHOC target="contact-form" origin="right">
                    <form className={`${classes.contact__form}`} id="contact-form">
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
                            <input
                                type="email"
                                id="email"
                                className={`${classes.contact__input}`}
                            />
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
                                <i
                                    className={`ri-send-plane-2-line ${classes.contact__btn__icon}`}
                                ></i>
                            </button>
                        </div>
                    </form>
                </ScrollRevealHOC>
            </div>
        </SectionHOC>
    );
}

export default Contact;
