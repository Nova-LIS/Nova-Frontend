import classes from "./BookCard.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../store/user-context";
const Book = (props) => {

    const userCtx = useContext(UserContext);

    const history = useHistory();

    const detailsNavHandler = () => {
        history.push(`/book/${props.number}`);
    }

    const issueHandler = async () => {
        const body = {
            bookid: props.id,
            username: userCtx.user.userName
        }
        if (userCtx.isLoggedIn) {
            await fetch("http://localhost:5000/issue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        } else {
            history.push("/login");
        }
    }

    return (
        <div className={classes["book"]}>
            <div className={classes["cover__container"]}>
                <img src={props.cover} alt={props.bookName} className={classes["cover"]}/>
                <div className={classes["shadow"]}>
                    <div className={classes["shadow-btn__group"]}>
                        <button className={classes["shadow-btn"]} onClick={issueHandler}>Issue</button>
                        <button className={classes["shadow-btn"]} onClick={detailsNavHandler}>Details</button>
                    </div>
                </div>
            </div>
            <div className={classes["book__title"]}>
                <h2 className={classes["name"]}>{props.bookName}</h2>
                <h3 className={classes["author"]}>{props.author}</h3>
            </div>
        </div>
    );
};

export default Book;
