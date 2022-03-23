import BookList from "../booklist/BookList";
import classes from "./Suggestion.module.css";
import { useContext } from "react";
// import BookContext from "../../store/book-context";

const Suggestions = () => {

    // const bookCtx = useContext(BookContext);


    return (
        <section className={classes["suggestion"]}>
            <BookList title="Popular Books"/>
            <BookList title="Recently Added"/>
        </section>
    );
};

export default Suggestions;