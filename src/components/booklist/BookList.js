import BookCard from "../bookcard/BookCard";
import classes from "./BookList.module.css";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookList = (props) => {
    const navigation = (
        <div className={classes["navigation"]}>
            <div onClick={props.onIndexDecrease} className={classes["arrow"]}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <p>{`${props.lower} - ${props.upper}`}</p>
            <div onClick={props.onIndexIncrease} className={classes["arrow"]}>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );

    return (
        <div className={classes["booklist"]}>
            <div className={classes["header"]}>
                <h2 className={classes["booklist__title"]}>{props.title}</h2>
                {navigation}
            </div>
            <div className={classes["booklist__rule"]}></div>
            <ul className={classes["booklist__list"]}>
                {props.books.map((book) => {
                    return (
                        <li key={book.bookNumber}>
                            <BookCard
                                id={book.bookId}
                                key={book.bookId}
                                number={book.bookNumber}
                                bookName={book.bookName}
                                author={book.author}
                                cover={book.cover}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className={classes["header"]}>{navigation}</div>
        </div>
    );
};

export default BookList;
