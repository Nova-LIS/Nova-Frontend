import classes from "./Profile.module.css";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const Profile = () => {
    const userCtx = useContext(UserContext);

    console.log(userCtx);

    let profileContent;

    if (userCtx.inFocus === "Issued Books") {
        profileContent = <div className={`${classes["content"]} ${classes["issued"]}`}></div>;
    } else if (userCtx.inFocus === "Returned Books") {
        profileContent = <div className={`${classes["content"]} ${classes["returned"]}`}></div>;
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
