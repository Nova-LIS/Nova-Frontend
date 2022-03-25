import BookCard from "../bookcard/BookCard";
import classes from "./BookList.module.css";

const BookList = (props) => {
    return (
        <div className={classes["booklist"]}>
            <h2 className={classes["booklist__title"]}>{props.title}</h2>
            <div className={classes["booklist__rule"]}></div>
            <ul className={classes["booklist__list"]}>
                {props.books.map((book) => {
                    return <li><BookCard id={book.bookNumber} key={book.bookNumber} bookName={book.bookName} author={book.author} cover={book.cover}/></li>
                })}
            </ul>
        </div>
    );
};

export default BookList;