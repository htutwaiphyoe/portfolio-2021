import { useState, useEffect } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { createNewMessage, resetNewMessage } from "@/redux/actions/messageActions";
import SectionHOC from "@/hoc/Section/Section";
import Information from "./Information/Information";
import Button from "../UI/Button/Button";
import classes from "./Contact.module.scss";

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.newMessage);
    const informations = [
        { icon: "phone", title: "Phone", subtitle: "09798652590" },
        { icon: "mail", title: "Email", subtitle: "htutwaiphyoe@gmail.com" },
        { icon: "map-pin", title: "Location", subtitle: "Mandalay, Myanmar" },
    ];
    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch(resetNewMessage());
        }
        if (error) {
            toast.error(error);
            dispatch(resetNewMessage());
        }
    }, [message, dispatch, error]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createNewMessage({
                name,
                email,
                message: messageInput,
            })
        );

        setName("");
        setEmail("");
        setMessageInput("");
    };
    return (
        <SectionHOC
            id="contact"
            title="Contact me"
            subtitle="Get in touch"
            classname={classes.contact}
        >
            <div className={`container ${classes.contact__container}`}>
                <div className={`${classes.contact__informations}`} id="contact-informations">
                    {informations.map((information, i) => (
                        <Information information={information} key={i} />
                    ))}
                </div>

                <form
                    className={`${classes.contact__form}`}
                    id="contact-form"
                    onSubmit={onSubmitHandler}
                >
                    <div className={`${classes.contact__content}`}>
                        <label htmlFor="name" className={`${classes.contact__label}`}>
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`${classes.contact__input}`}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required={true}
                            minLength={5}
                            maxLength={20}
                        />
                    </div>
                    <div className={`${classes.contact__content}`}>
                        <label htmlFor="email" className={`${classes.contact__label}`}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`${classes.contact__input}`}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required={true}
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
                            onChange={(e) => setMessageInput(e.target.value)}
                            value={messageInput}
                            required={true}
                            minLength="10"
                            maxLength="100"
                        />
                    </div>

                    <div>
                        <Button text="Send now" icon="ri-send-plane-2-line" disabled={loading} />
                    </div>
                </form>
            </div>
        </SectionHOC>
    );
}

export default Contact;
