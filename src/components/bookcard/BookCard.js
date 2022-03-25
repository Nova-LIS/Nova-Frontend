import classes from "./BookCard.module.css";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Book = (props) => {

    const history = useHistory();

    const detailsNavHandler = () => {
        history.push(`/book/${props.id}`);
    }

    const issueHandler = () => {
        
    }

    return (
        <div className={classes["book"]}>
            <div className={classes["cover__container"]}>
                <img src={props.cover} alt={props.bookName} className={classes["cover"]}/>
                <div className={classes["shadow"]}>
                    <div className={classes["shadow-btn__group"]}>
                        <button className={classes["shadow-btn"]} onClick={issueHandler}>Issue</button>
                        <button className={classes["shadow-btn"]} onClick={detailsNavHandler}>Details</button>
                    </div>
                </div>
            </div>
            <div className={classes["book__title"]}>
                <h2 className={classes["name"]}>{props.bookName}</h2>
                <h3 className={classes["author"]}>{props.author}</h3>
            </div>
        </div>
    );
};

export default Book;
