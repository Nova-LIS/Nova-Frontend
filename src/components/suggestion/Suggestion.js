import BookList from "../booklist/BookList";
import classes from "./Suggestion.module.css";

const Suggestions = () => {
    return (
        <section className={classes["suggestion"]}>
            <BookList title="Popular Books"/>
            <BookList title="Recently Added"/>
        </section>
    );
};

export default Suggestions;