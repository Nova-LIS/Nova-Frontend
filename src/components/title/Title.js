import classes from "./Title.module.css";

const Title = () => {
    return (
        <section className={classes["title"]}>
            <h1 className={classes["heading"]}>Nova</h1>
            <h2 className={classes["desc"]}>Simplicity. Redefined.</h2>
            <div className={classes["title-btn__group"]}>
                <a className={`${classes["title-btn"]} ${classes["left"]}`}>Discover your Destiny</a>
                <a className={`${classes["title-btn"]} ${classes["right"]}`}>Surf the Library</a>
            </div>

        </section>
    );
};

export default Title;