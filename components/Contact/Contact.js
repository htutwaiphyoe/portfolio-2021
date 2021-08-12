import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { createNewMessage, resetNewMessage } from "@/redux/actions/messageActions";
import SectionHOC from "@/hoc/Section/Section";
import Information from "./Information/Information";
import Button from "../UI/Button/Button";
import FormElement from "../UI/FormElement/FormElement";
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

    const contactForm = [
        {
            inputType: "input",
            id: "name",
            label: "Name",
            value: name,
            onChangeHandler: setName,
            config: { required: true, minLength: 5, maxLength: 20, type: "text" },
        },
        {
            inputType: "input",
            id: "email",
            label: "Email",
            value: email,
            onChangeHandler: setEmail,
            config: { required: true, type: "email" },
        },
        {
            inputType: "textarea",
            id: "message",
            label: "Message",
            value: messageInput,
            onChangeHandler: setMessageInput,
            config: {
                required: true,
                cols: 0,
                rows: 7,
                minLength: "10",
                maxLength: "100",
            },
        },
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
                    {contactForm.map((item, i) => (
                        <FormElement
                            inputType={item.inputType}
                            id={item.id}
                            label={item.label}
                            value={item.value}
                            onChangeHandler={item.onChangeHandler}
                            config={item.config}
                            key={i}
                        />
                    ))}
                    <div>
                        <Button text="Send now" icon="ri-send-plane-2-line" disabled={loading} />
                    </div>
                </form>
            </div>
        </SectionHOC>
    );
}

export default Contact;
