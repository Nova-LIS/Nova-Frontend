import classes from "./Profile.module.css";
import { useContext, useEffect } from "react";
import UserContext from "../../store/user-context";
import { useParams } from "react-router-dom";
import BookList from "../../components/booklist/BookList";

import { NavLink } from "react-router-dom";
const Profile = () => {
    const userCtx = useContext(UserContext);
    const params = useParams();

    // useEffect(() => {
    //     if (params.section === "issued") {
    //         userCtx.inFocus("Issued Books");
    //     } else if (params.section === "returned") {
    //         userCtx.inFocus("Returned Books");
    //     } else if (params.section === "reserved") {
    //         userCtx.inFocus("Reserved Books");
    //     } else {
    //         userCtx.inFocus("Personal Information");
    //     }
    // }, []);

    // const getBooks = async () => {
    //     window.scroll(0, 0);
    //     await fetch("http://localhost:5000/profile/" + params.username, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => userCtx.onEndBookQuery(data))
    //         .catch((error) => console.log(error));
    // };

    useEffect(() => userCtx.onBookQuery("Issued Books"), []);

    let profileContent;

    if (userCtx.inFocus === "Issued Books") {
        profileContent = (
            <div className={`${classes["content"]} ${classes["personal"]}`}>
                {userCtx.books.isLoaded ? (
                    userCtx.books.issued.length > 0 ? (
                        <BookList
                            title={
                                userCtx.books.issued.length +
                                " Issued " +
                                (userCtx.books.issued.length === 1 ? "Book" : "Books")
                            }
                            books={userCtx.books.issued}
                            lower="1"
                            upper={userCtx.books.issued.length}
                        />
                    ) : (
                        <h1>No issued books.</h1>
                    )
                ) : (
                    <h1>Loading..</h1>
                )}
            </div>
        );
    } else if (userCtx.inFocus === "Returned Books") {
        profileContent = (
            <div className={`${classes["content"]} ${classes["returned"]}`}>
                {userCtx.books.isLoaded ? (
                    userCtx.books.returned.length > 0 ? (
                        <BookList
                            title={
                                userCtx.books.returned.length +
                                " Returned " +
                                (userCtx.books.returned.length === 1 ? "Book" : "Books")
                            }
                            books={userCtx.books.returned}
                            lower="1"
                            upper={userCtx.books.returned.length}
                        />
                    ) : (
                        <h1>No returned books.</h1>
                    )
                ) : (
                    <h1>Loading..</h1>
                )}
            </div>
        );
    } else if (userCtx.inFocus === "Reserved Books") {
        profileContent = <div className={`${classes["content"]} ${classes["reserved"]}`}></div>;
    } else if (userCtx.inFocus === "Manage Library") {
        <NavLink to="/register">Register a Member</NavLink>
    } else {
        profileContent = (
            <div className={`${classes["content"]} ${classes["personal"]}`}>
                <p>{userCtx.user.name}</p>
                <p>{userCtx.user.roll}</p>
                <p>{userCtx.user.designation}</p>
                <p>{userCtx.user.phone}</p>
                <p>{userCtx.user.email}</p>
                <p>{userCtx.user.userName}</p>
            </div>
        );
    }

    return (
        <div className={classes["profile-container"]}>
            <div className={classes["profile"]}>
                <div className={classes["navigation"]}>
                    <ul>
                        <li
                            className={`${classes["choice"]} ${
                                userCtx.inFocus === "Issued Books" ? classes["active"] : ""
                            }`}
                            onClick={userCtx.onIssuedFocus}
                        >
                            Issued Books
                        </li>
                        <li
                            className={`${classes["choice"]} ${
                                userCtx.inFocus === "Returned Books" ? classes["active"] : ""
                            }`}
                            onClick={userCtx.onReturnedFocus}
                        >
                            Returned Books
                        </li>
                        <li
                            className={`${classes["choice"]} ${
                                userCtx.inFocus === "Reserved Books" ? classes["active"] : ""
                            }`}
                            onClick={userCtx.onReservedFocus}
                        >
                            Reserved Books
                        </li>
                        {userCtx.user.isAdmin && (
                            <li
                                className={`${classes["choice"]} ${
                                    userCtx.inFocus === "Manage Library" ? classes["active"] : ""
                                }`}
                                onClick={userCtx.onManageFocus}
                            >
                                Manage Libray
                            </li>
                        )}
                        <li
                            className={`${classes["choice"]} ${
                                userCtx.inFocus === "Personal Information" ? classes["active"] : ""
                            }`}
                            onClick={userCtx.onPersonalFocus}
                        >
                            Personal Info
                        </li>
                    </ul>
                </div>
                {profileContent}
            </div>
        </div>
    );
};

export default Profile;
