import { useState } from "react";
import classes from "./Browse.module.css";

const Browse = () => {
    const [bookname, setBookname] = useState("");

    const booknameChangeHandler = (event) => {
        setBookname(event.target.value);
    };

    const getBooks = async (body) => {
        window.scroll(0, 0);
        return await fetch("http://localhost:5000/browse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error, "Hi"));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            bookname
        };

        console.log(data);

        getBooks(data);
    };

    return (
        <div className={classes["browse"]}>
            <form onSubmit={submitHandler}>
                <label htmlFor="search">Search Bar</label>
                <input type="text" value={bookname} onChange={booknameChangeHandler}></input>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Browse;
