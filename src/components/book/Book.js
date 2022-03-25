import classes from "./Book.module.css";

import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Book = () => {

    const params = useParams();

    const [bookData, setBookData] = useState({ isLoaded: false, book: null});

    const getBookDetailsHandler = async () => {
        await fetch("http://localhost:5000/book/" + params.bookId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {console.log(data); setBookData({isLoaded: true, book: data});})
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBookDetailsHandler()}, []);

    const content = bookData.isLoaded ? <div className={classes["book"]}>
        <h1>{bookData.book.author}</h1>
        <h1>{bookData.book.title}</h1> 
        <h1>{bookData.book.isbn}</h1> 
        <h1>{bookData.book.no_of_copies}</h1> 
        <h1>{bookData.book.racknumber}</h1> 
    </div> : <div>Not Loaded</div>;

    return (
        <div className={classes["book__container"]}>
            {content}
        </div>
    );
}

export default Book;