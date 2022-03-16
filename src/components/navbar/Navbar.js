import { useState, useContext } from "react";
import classes from "./Navbar.module.css";

import logo from "./react.png";

const Navbar = () => {
    // const scrollCtx = useContext(ScrollContext);
    // const darkCtx = useContext(DarkContext);
    // const userCtx = useContext(UserContext);

    // const loginRegisterBtns = (
    //     <>
    //         <a
    //             href="/login"
    //             className={
    //                 `${classes["nav-btn"]}  ${classes["nav-btn__login"]}` +
    //                 (darkCtx.theme.mode === "dark" ? " " + classes["nav-btn__dark"] : "")
    //             }
    //         >
    //             Login
    //         </a>
    //         <a
    //             href="/register"
    //             className={
    //                 `${classes["nav-btn"]} ${classes["nav-btn__register"]}` +
    //                 (darkCtx.theme.mode === "dark" ? " " + classes["nav-btn__register__dark"] : "")
    //             }
    //         >
    //             Register
    //         </a>
    //     </>
    // );

    // const profileLogoutBtns = (
    //     <>
    //         <a href="/profile" className={classes["profile-img__container"]}>
    //             <img src="profile.png" alt="avatar" className={classes["profile-img"]} />
    //         </a>
    //         <a
    //             href="/home"
    //             className={
    //                 `${classes["nav-btn"]} ${classes["nav-btn__register"]}` +
    //                 (darkCtx.theme.mode === "dark" ? " " + classes["nav-btn__register__dark"] : "")
    //             }
    //             onClick={userCtx.onLogout}
    //         >
    //             Logout
    //         </a>
    //     </>
    // );

    const [isSecondaryNavOpen, setIsSecondaryNavOpen] = useState(false);

    const toggleSecondaryNavHandler = () => {
        setIsSecondaryNavOpen(prev => !prev);
    }

    const menuToggleIcon = !isSecondaryNavOpen ? (
        <svg viewBox="0 0 100 80" width="40" height="40" className={classes["hamburger"]}>
            <rect width="100" height="10" className={classes["hamburger__bar"]} />
            <rect y="25" width="100" height="10" className={classes["hamburger__bar"]} />
            <rect y="50" width="100" height="10" className={classes["hamburger__bar"]} />
        </svg>
    ) : (
        <svg viewBox="0 0 100 80" width="40" height="40" className={classes["close"]}>
            <line x1="0" y1="0" x2="100" y2="80" className={classes["close__fragment"]} />
            <line x1="0" y1="80" x2="100" y2="0" className={classes["close__fragment"]} />
        </svg>
    );

    const secondaryHeaderClasses = classes["secondary-header"] + (isSecondaryNavOpen ? " " + classes["active"] : "");

    return (
        <header className={classes["navbar"]}>
            <header className={classes["primary-header"]}>
                <div className={classes["logo-container"]}>
                    <img src={logo} alt="Nova" className={classes["logo-img"]} />
                </div>
                <button className={classes["nav-toggle"]} onClick={toggleSecondaryNavHandler}>{menuToggleIcon}</button>
                <nav className={classes["primary-navigation"]}>
                    <ul className={classes["primary-navigation__list"]}>
                        <li>
                            <a hreaf="/home" className={classes["primary-navigation__link"]}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className={classes["primary-navigation__link"]}>
                                Browse
                            </a>
                        </li>
                        <li>
                            <div className={classes["primary-navigation__link"]}>About Us</div>
                        </li>
                        <li>
                            <div className={classes["primary-navigation__link"]}>Contact</div>
                        </li>
                        <li>
                            <div className={classes["primary-navigation__link"]}>FAQs</div>
                        </li>
                    </ul>
                </nav>
                <div className={classes["nav-btn__group"]}>
                    <a href="#" className={`${classes["nav-btn"]} ${classes["login"]}`}>
                        Login
                    </a>
                    <a href="#" className={`${classes["nav-btn"]} ${classes["register"]}`}>
                        Register
                    </a>
                </div>
            </header>
            <header className={secondaryHeaderClasses}>
                <ul className={classes["secondary-navigation__list"]}>
                    <li>
                        <a href="/login" className={classes["secondary-navigation__link"]}>
                            Home
                        </a>
                        <a href="/register" className={classes["secondary-navigation__link"]}>
                            Browse
                        </a>
                        <a href="/home" className={classes["secondary-navigation__link"]}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/about" className={classes["secondary-navigation__link"]}>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <div className={classes["secondary-navigation__link"]}>FAQs</div>
                    </li>
                </ul>
            </header>
        </header>
    );
};

export default Navbar;
