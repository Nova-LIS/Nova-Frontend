import React, { useState } from "react";
import { useEffect } from "react";
const fs = require("fs");
const csv = require("csv-parser");

const BookContext = React.createContext({
    books: null,
});

export const BookContextProvider = (props) => {

    const [books, setBooks] = useState([]);
    const results = [];

    useEffect(() => {
        fs.createReadStream("google_books_1299.csv")
            .pipe(csv({}))
            .on("data", (data) => {
                results.push(data);
            })
            .on("end", () => {
                const categories = [];
                setBooks(results);
            });
    }, []);

    return (
        <BookContext.Provider
            value={{
                books
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContext;
