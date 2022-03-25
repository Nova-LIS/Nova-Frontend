import { useState } from "react";
import classes from "./Browse.module.css";
import BookList from "../../components/booklist/BookList";
import BrowseForm from "../../components/browseform/BrowseForm";

const Browse = () => {
    const [bookData, setBookData] = useState({ isLoaded: false, foundBook: false, books: null, index: 0 });

    const bookQueryEndHandler = (data) => {
        const thisBooks = [];
        if (data.foundBook) {
            for (let book of data.books) {
                thisBooks.push({
                    bookNumber: book.booknumber,
                    bookName: book.title,
                    author: book.author,
                    cover: book.image_url,
                });
            }
        }
        
        setBookData({ isLoaded: true, books: thisBooks, foundBook: data.foundBook, index: 0 });
    };

    return (
        <div className={classes["browse__container"]}>
            <div className={classes["browse"]}>
                <BrowseForm onEndBookQuery={bookQueryEndHandler} />
                {bookData.isLoaded &&
                    (bookData.foundBook ? (
                        <BookList title={`Found ${bookData.books.length} books`} books={bookData.books.slice(0, 50)} />
                    ) : (
                        <h1>No books found</h1>
                    ))}
            </div>
        </div>
    );
};

export default Browse;
