import classes from "./Profile.module.css";
import { useContext, useEffect } from "react";
import UserContext from "../../store/user-context";
import { useParams } from "react-router-dom";
import BookList from "../../components/booklist/BookList";

const Profile = () => {
    const userCtx = useContext(UserContext);

    const params = useParams();

    const getBooks = async () => {
        window.scroll(0, 0);
        await fetch("http://localhost:5000/profile/" + params.username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => userCtx.onEndBookQuery(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => getBooks(), []);

    let profileContent;

    if (userCtx.inFocus === "Issued Books") {
        profileContent = userCtx.books.isLoaded ? <BookList title="Issued Books" books={userCtx.books.issued} /> : <h1>Loading..</h1>;
    } else if (userCtx.inFocus === "Returned Books") {
        profileContent = userCtx.books.isLoaded ? <BookList title="Returned Books" books={userCtx.books.returned} /> : <h1>Loading..</h1>;
    } else if (userCtx.inFocus === "Reserved Books") {
        profileContent = <div className={`${classes["content"]} ${classes["reserved"]}`}></div>;
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
                        <li className={classes["choice"]} onClick={userCtx.onIssuedFocus}>
                            Issued Books
                        </li>
                        <li className={classes["choice"]} onClick={userCtx.onReturnedFocus}>
                            Returned Books
                        </li>
                        <li className={classes["choice"]} onClick={userCtx.onReservedFocus}>
                            Reserved Books
                        </li>
                        <li className={classes["choice"]} onClick={userCtx.onPersonalFocus}>
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
