import classes from "./RegisterSuccess.module.css";

const RegisterSuccess = () => {
    return (
        <div className={classes["register-success"]}>
            <h1 className={classes["text"]}>Successfully registered to the Library.</h1>
            <h2 className={classes["text"]}>You can now login.</h2>
        </div>
    );
}

export default RegisterSuccess;