import Image from "next/image";
import classes from "./Series.module.scss";

function Series(props) {
    return (
        <section className={` ${classes.series}`}>
            <div className={`${classes.series__data} u-mb-5`}>
                <Image
                    src="/images/site/series/series2.svg"
                    alt="Blog series"
                    className={`${classes.series__image}`}
                    width={250}
                    height={240}
                    priority={true}
                />
                <p>
                    Series သဖွယ် ရေးသားထားသည့် blog များကို စုပေါင်း ကောက်နုတ်ပေးထားခြင်းဖြစ်ပါသည်။
                    နောက်ပိုင်းတွင် ဒေါင်းလုတ်ချပြီး ဖတ်ရှုနိုင်အောင် PDF အဖြစ် ထုတ်ပေးသွားပါမည်။
                </p>
            </div>

            <p className={`${classes.series__text}`}>
                Series will be released soon. <br />
                Stay tuned 🔔
            </p>
        </section>
    );
}
export default Series;
