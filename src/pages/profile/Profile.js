import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes["profile-container"]}>
            <div className={classes["profile"]}>
                <div className={classes["navigation"]}>
                    <ul>
                        <li className={classes["choice"]}>Issued Books</li>
                        <li className={classes["choice"]}>Returned Books</li>
                        <li className={classes["choice"]}>Reserved Books</li>
                        <li className={classes["choice"]}>Personal Info</li>
                    </ul>
                </div>
                <div className={classes["content"]}>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;