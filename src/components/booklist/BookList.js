import Book from "../book/Book";
import classes from "./BookList.module.css";

const BookList = (props) => {
    return (
        <div className={classes["booklist"]}>
            <h2 className={classes["booklist__title"]}>{props.title}</h2>
            <div className={classes["booklist__rule"]}></div>
            <ul className={classes["booklist__list"]}>
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
            </ul>
        </div>
    );
};

export default BookList;