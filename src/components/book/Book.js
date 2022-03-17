import defaultProps from "react-slick/lib/default-props";
import classes from "./Book.module.css";

const Book = () => {
    return (
        <div className={classes["book"]}>
            <div className={classes["book__cover"]}></div>
            <div className={classes["book__title"]}>
                <h2 className={classes["name"]}>The Time Machine</h2>
                <h3 className={classes["author"]}>HG Wells</h3>
            </div>
        </div>
    );
};

export default Book;