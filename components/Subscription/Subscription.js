import { useState, useEffect } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { createNewSubscription, resetNewSubscription } from "@/redux/actions/subscriptionActions";
import classes from "./Subscription.module.scss";

function Subscription(props) {
    const [email, setEmail] = useState("");
    const { message, loading, error } = useSelector((state) => state.newSubscription);
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!validator.isEmail(email)) return toast.error("Please enter valid email address");

        dispatch(createNewSubscription({ email }));
        setEmail("");
    };

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch(resetNewSubscription());
        }
        if (error) {
            toast.error(error);
            dispatch(resetNewSubscription());
        }
    }, [message, dispatch, error]);
    return (
        <section className={`section ${classes.subscription}`} id="subscription">
            <div className={`container ${classes.subscription__container}`}>
                <div className={`${classes.subscription__data}`} id="subscription-data">
                    <div className={`${classes.subscription__info}`}>
                        <h2 className={`${classes.subscription__title}`}>Stay Tuned</h2>
                        <p className={`${classes.subscription__description}`}>
                            Not to miss my new sharing content, subcribe now.
                        </p>
                        <p className={`${classes.subscription__description}`}>
                            Subscription email will be sent once a week, every Saturaday.
                        </p>
                    </div>

                    <form className={`${classes.subscription__form}`} onSubmit={onSubmitHandler}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className={`${classes.subscription__input}`}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required={true}
                        />
                        <button className={`${classes.subscription__btn}`} disabled={loading}>
                            <i className="ri-send-plane-fill"></i>
                        </button>
                    </form>
                </div>

                <figure className={`${classes.subscription__image} `} id="subscription-image">
                    <img src="images/subscription.svg" alt="Subscription" />
                </figure>
            </div>
        </section>
    );
}

export default Subscription;
