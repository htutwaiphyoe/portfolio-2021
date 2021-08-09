import classes from "./Blog.module.scss";
import Image from "next/image";
import Link from "next/link";
function Blog(props) {
    return (
        <div className={`container ${classes.blog}`}>
            <Image
                src="/images/blogs/js.png"
                width={500}
                height={300}
                className={`${classes.blog__image}`}
            />

            <div className={`${classes.blog__data}`}>
                <div className={`${classes.blog__topics}`}>
                    <Link href="/">
                        <a className={`${classes.blog__topic}`}> JAVASCRIPT</a>
                    </Link>
                    <Link href="/">
                        <a className={`${classes.blog__topic}`}>REACTJS</a>
                    </Link>
                </div>
                <h2 className={`${classes.blog__title}`}>
                    JavaScript သိုင်းကျမ်း အပိုင်း (၄) - Hoisting
                </h2>
                <p className={`${classes.blog__description}`}>
                    JavaScript ရဲ့ ထူးခြားတဲ့ feature တစ်ခုဖြစ်တဲ့ hoisting အကြောင်း
                </p>

                <div className={`${classes.blog__info}`}>
                    <time className={`${classes.blog__date}`}>2021-07-10</time>
                    <span className={`${classes.blog__duration}`}>6 MIN READ</span>
                </div>
            </div>
        </div>
    );
}

export default Blog;
