import classes from "./BookCard.module.css";
import Popup from "../popup/Popup";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../store/user-context";
import ReactDOM from "react-dom";
import { faFireExtinguisher } from "@fortawesome/free-solid-svg-icons";

const Book = (props) => {
    const userCtx = useContext(UserContext);

    const history = useHistory();

    const detailsNavHandler = () => {
        window.open(`http://localhost:3000/book/${props.number}`, "_blank");
    };

    const confirmIssueHandler = () => {
        setPopUpStatus((prevStatus) => {
            return { ...prevStatus, isOpen: true };
        });
    };

    const returnResponseHandler = (data) => {
        if (data.isOverdue) {
            setPopUpStatus({
                isOpen: true,
                title: "Return Response",
                message: "Successfully returned book. Pay a penalty of " + data.penalty,
                hasSingleBtn: true,
                right: "Pay",
                onClickRight: () => profileRedirectHandler("Returned Books"),
            });
        } else {
            setPopUpStatus({
                isOpen: true,
                title: "Return Response",
                message: "Successfully returned book. No penalty incurred.",
                hasSingleBtn: true,
                right: "Ok",
                onClickRight: () => profileRedirectHandler("Returned Books"),
            });
        }
    };

    const returnHandler = async () => {
        await fetch("http://localhost:5000/return/" + props.tId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json()).then(data => returnResponseHandler(data)).catch(error => console.log(error))
    };

    const confirmReturnHandler = () => {
        setPopUpStatus((prevStatus) => {
            return {
                isOpen: true,
                title: "Confirm Book Return",
                message: "Are you sure you want to return this book?",
                hasSingleBtn: false,
                left: "Yes",
                right: "No",
                onClickLeft: returnHandler,
                onClickRight: closeHandler,
            };
        });
    };

    const issueResponseHandler = (data) => {
        if (data.issuelimit) {
            setPopUpStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isOpen: true,
                    title: "Issue Response",
                    message: "You have exceeded the maximum amount of books you can issue from Nova LIS.",
                    hasSingleBtn: true,
                    right: "Ok",
                };
            });
        }
        if (data.alreadyissued) {
            setPopUpStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isOpen: true,
                    title: "Issue Response",
                    message: "You have already issued a copy of this book.",
                    hasSingleBtn: true,
                    right: "Ok",
                };
            });
        }
        if (data.isIssued) {
            setPopUpStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isOpen: true,
                    title: "Issue Response",
                    message: "Successfully issued book from Nova LIS.",
                    hasSingleBtn: true,
                    right: "Ok",
                    onClickRight: (() => profileRedirectHandler("Issued Books"))
                };
            });
        }
    };

    const issueHandler = async () => {
        closeHandler();
        const body = {
            bookid: props.id,
            username: userCtx.user.userName,
        };
        await fetch("http://localhost:5000/issue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                issueResponseHandler(data);
            })
            .catch((error) => console.log(error));
    };

    const closeHandler = () => {
        setPopUpStatus((prevStatus) => {
            return { ...prevStatus, isOpen: false };
        });
    };

    const loginRedirectHandler = () => {
        closeHandler();
        history.push("/login");
    };

    const profileRedirectHandler = (section) => {
        closeHandler();
        userCtx.onBookQuery(section);
    };

    const [popUpStatus, setPopUpStatus] = useState({
        isOpen: false,
        title: userCtx.isLoggedIn ? "Confirm Book Issue" : "Login to Issue Book",
        message: userCtx.isLoggedIn
            ? "Are you sure you want to issue this book?"
            : "You are not logged in to Nova LIS. Do you want to login?",
        hasSingleBtn: false,
        left: "Yes",
        right: "No",
        onClickLeft: userCtx.isLoggedIn ? issueHandler : loginRedirectHandler,
        onClickRight: closeHandler,
    });

    let metaData = <></>;
    if (props.type === "Issued") {
        metaData = (
            <>
                <h3 className={classes["author"]}>Issued On: &nbsp;{props.issuedOn}</h3>
                <h3 className={classes["author"]}>Deadline: &nbsp;{props.expectedReturn}</h3>
            </>
        );
    }
    if (props.type === "Returned") {
        metaData = (
            <>
                <h3 className={classes["author"]}>Issued On: &nbsp;{props.issuedOn}</h3>
                <h3 className={classes["author"]}>Returned On: &nbsp;{props.returnedOn}</h3>
            </>
        );
    }

    let transaction = <></>;
    if (props.type === "Issued") {
        transaction = (
            <button className={classes["shadow-btn"]} onClick={confirmReturnHandler}>
                Return
            </button>
        );
    } else {
        transaction = (
            <button className={classes["shadow-btn"]} onClick={confirmIssueHandler}>
                {props.type === "Display" ? "Issue" : "Issue Again"}
            </button>
        );
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Popup
                    isOpen={popUpStatus.isOpen}
                    title={popUpStatus.title}
                    message={popUpStatus.message}
                    hasSingleBtn={popUpStatus.hasSingleBtn}
                    left={popUpStatus.left}
                    right={popUpStatus.right}
                    onClickLeft={popUpStatus.onClickLeft}
                    onClickRight={popUpStatus.onClickRight}
                />,
                document.getElementById("overlay-root")
            )}

            <div className={classes["book"]}>
                <div className={classes["cover__container"]}>
                    <img src={props.cover} alt={props.bookName} className={classes["cover"]} />
                    <div className={classes["shadow"]}>
                        <div className={classes["shadow-btn__group"]}>
                            {transaction}
                            <button className={classes["shadow-btn"]} onClick={detailsNavHandler}>
                                Details
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes["book__title"]}>
                    <h2 className={classes["name"]}>{props.bookName}</h2>
                    <h3 className={classes["author"]}>{props.author}</h3>
                    {metaData}
                </div>
            </div>
        </>
    );
};

export default Book;
