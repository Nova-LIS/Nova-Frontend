import useInput from "../../hooks/use-input";
import classes from "./LoginForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const Login = () => {
    const {
        value: userName,
        isValid: userNameIsValid,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameInputBlurHandler,
        reset: resetUserName,
    } = useInput(isNotEmpty, "Username");

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty, "Password");

    let formIsValid = false;
    if (userNameIsValid && passwordIsValid) formIsValid = true;

    const normalClasses = classes["input__field"];
    const errorClasses = `${normalClasses} ${classes["input__error"]}`;

    const userNameInputClasses = userNameInputHasError ? errorClasses : normalClasses;
    const passwordInputClasses = passwordInputHasError ? errorClasses : normalClasses;

    const submitHandler = (event) => {
        event.preventDefault();

        resetUserName();
        resetPassword();
    };

    return (
        <form className={`${classes["form"]}`} autoComplete="off" onSubmit={submitHandler}>
            <h1 className={classes["form__title"]}>Login</h1>
            <div className={`${classes["form__inputs"]}`}>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="userName">
                        Username
                    </label>
                    <input
                        className={userNameInputClasses}
                        id="userName"
                        type="text"
                        value={userName}
                        name="username"
                        onChange={userNameChangeHandler}
                        onBlur={userNameInputBlurHandler}
                    />
                    {userNameInputHasError && <p className={classes["input__message"]}>Username must not be empty.</p>}
                </div>
                <div className={`${classes["input"]}`}>
                    <label className={`${classes["input__label"]}`} htmlFor="password">
                        Password
                    </label>
                    <input
                        className={passwordInputClasses}
                        id="password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordInputBlurHandler}
                    />
                    {passwordInputHasError && <p className={classes["input__message"]}>Password cannot be empty.</p>}
                </div>
            </div>
            <div className={`${classes["form__btn-group"]}`}>
                <button
                    className={`${classes["form__btn"]}`}
                    // disabled={!formIsValid}
                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default Login;
