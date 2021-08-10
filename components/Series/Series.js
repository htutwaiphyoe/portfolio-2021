import classes from "./Series.module.scss";

function Series(props) {
    return (
        <section className={` ${classes.series}`}>
            <div className={`${classes.series__data} u-mb-3`}>
                <img
                    src="/images/site/series/series2.svg"
                    alt="Blog series"
                    className={`${classes.series__image}`}
                />
                <p>
                    Series သဖွယ် ရေးသားထားသည့် blog များကို စုပေါင်း ကောက်နုတ်ပေးထားခြင်းဖြစ်ပါသည်။
                    နောက်ပိုင်းတွင် ဒေါင်းလုတ်ချပြီး ဖတ်ရှုနိုင်အောင် PDF အဖြစ် ထုတ်ပေးသွားပါမည်။
                </p>
            </div>

            <p className={`${classes.series__text}`}>Series are not yet available. 😅</p>
        </section>
    );
}
export default Series;
