import classes from "./RegisterForm.module.css";
import useInput from "../../hooks/use-input";

import { useState, useRef } from "react";

const isNotEmpty = (value) => value.trim() !== "";

const isEmail = (value) => value.includes("@");

const RegisterForm = () => {
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);

    const {
        value: roll,
        isValid: rollIsValid,
        hasError: rollInputHasError,
        valueChangeHandler: rollChangeHandler,
        inputBlurHandler: rollInputBlurHandler,
        reset: resetRoll,
    } = useInput(isNotEmpty);

    const [designation, setDesignation] = useState("");

    const designationIsValid = designation !== "";

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    const {
        value: phone,
        isValid: phoneIsValid,
        hasError: phoneInputHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneInputBlurHandler,
        reset: resetPhone,
    } = useInput(isNotEmpty);

    const {
        value: userName,
        isValid: userNameIsValid,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameInputBlurHandler,
        reset: resetUserName,
    } = useInput(isNotEmpty);

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: primaryPasswordChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty);

    const isConfirmPasswordValid = (value) => {
        return value === password;
    };

    const {
        value: confirmPassword,
        isValid: confirmPasswordIsValid,
        hasError: confirmPasswordInputHasError,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordInputBlurHandler,
        reset: resetConfirmPassword,
    } = useInput(isConfirmPasswordValid);

    const passwordChangeHandler = (event) => {
        primaryPasswordChangeHandler(event);
        resetConfirmPassword();
    };

    const designationChangeHandler = (event) => {
        setDesignation(event.target.value);
    };

    let formIsValid = false;
    // if (nameIsValid && rollIsValid && emailIsValid && phoneIsValid && userNameIsValid && passwordIsValid) formIsValid = true;
    formIsValid = true;

    const normalClasses = classes["input__field"];
    const errorClasses = classes["input__error"];

    const nameInputClasses = nameInputHasError ? errorClasses : normalClasses;
    const rollInputClasses = rollInputHasError ? errorClasses : normalClasses;
    const emailInputClasses = emailInputHasError ? errorClasses : normalClasses;
    const phoneInputClasses = phoneInputHasError ? errorClasses : normalClasses;
    const userNameInputClasses = userNameInputHasError ? errorClasses : normalClasses;
    const passwordInputClasses = passwordInputHasError ? errorClasses : normalClasses;
    const confirmPasswordInputClasses = confirmPasswordInputHasError ? errorClasses : normalClasses;

    const insertUser = (body) => {
        return fetch('http://localhost:5000/register', {
            'method': 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
            name,
            roll,
            designation,
            email,
            phone,
            userName,
            password
        };

        insertUser(user);

        resetName();
        resetRoll();
        resetEmail();
        resetPhone();
        resetUserName();
        resetPassword();
        resetConfirmPassword();

        console.log(user);
    };

    return (
        <form className={`${classes["form"]}`} autoComplete="off" onSubmit={submitHandler}>
            <h1 className={classes["form__title"]}>Register</h1>
            <div className={`${classes["form__inputs"]}`}>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="name">
                        Name
                    </label>
                    <input
                        className={nameInputClasses}
                        id="name"
                        type="text"
                        value={name}
                        name="name"
                        onChange={nameChangeHandler}
                        onBlur={nameInputBlurHandler}
                    />
                    {nameInputHasError && <p className={classes["input__message"]}>Name must not be empty.</p>}
                </div>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="roll">
                        Roll Number
                    </label>
                    <input
                        className={rollInputClasses}
                        id="roll"
                        type="text"
                        value={roll}
                        name="roll"
                        onChange={rollChangeHandler}
                        onBlur={rollInputBlurHandler}
                    />
                    {rollInputHasError && (
                        <p className={classes["input__message"]}>Please enter a valid roll number.</p>
                    )}
                </div>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="roll">
                        Choose Designation
                    </label>
                    <select className={classes["select__field"]} value={designation} onChange={designationChangeHandler}>
                        <option value="" disabled>Select your designation</option>
                        <option value="UG Student" className={classes["option"]}>UG Student</option>
                        <option value="PG Student" className={classes["option"]}>PG Student</option>
                        <option value="Research Scholar" className={classes["option"]}>Research Scholar</option>
                        <option value="Faculty" className={classes["option"]}>Faculty</option>
                    </select>
                </div>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={emailInputClasses}
                        id="email"
                        type="text"
                        value={email}
                        name="email"
                        onChange={emailChangeHandler}
                        onBlur={emailInputBlurHandler}
                    />
                    {emailInputHasError && <p className={classes["input__message"]}>Please enter a valid email.</p>}
                </div>
                <div className={classes["input"]}>
                    <label className={`${classes["input__label"]}`} htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className={phoneInputClasses}
                        id="phone"
                        type="text"
                        value={phone}
                        name="phone"
                        onChange={phoneChangeHandler}
                        onBlur={phoneInputBlurHandler}
                    />
                    {phoneInputHasError && (
                        <p className={classes["input__message"]}>Please enter a valid phone number.</p>
                    )}
                </div>
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
                <div className={`${classes["input"]}`}>
                    <label className={`${classes["input__label"]}`} htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        className={confirmPasswordInputClasses}
                        id="cofirm-password"
                        type="password"
                        value={confirmPassword}
                        name="confirm-password"
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordInputBlurHandler}
                    />
                    {confirmPasswordInputHasError && (
                        <p className={classes["input__message"]}>Passwords do not match.</p>
                    )}
                </div>
            </div>
            <div className={`${classes["form__btn-group"]}`}>
                <button
                    className={`${classes["form__btn"]}`}
                    // disabled={!formIsValid}
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
