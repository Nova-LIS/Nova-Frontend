import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext({
    isLoggedIn: null,
    user: null,
    inFocus: null,
    onLogin: () => {},
    onLogout: () => {},
    onIssuedFocus: () => {},
    onReturnedFocus: () => {},
    onReservedFocus: () => {},
    onPersonalFocus: () => {}
});

export const UserContextProvider = (props) => {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [inFocus, setInFocus] = useState("Personal Information");

    const onLogin = (data) => {
        setIsLoggedIn(true);
        setUser(data);
        history.push("/profile");
    }

    const onLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        history.push("/home");
    }

    const onIssuedFocus = () => {
        setInFocus("Issued Books");
    }

    const onReturnedFocus = () => {
        setInFocus("Returned Books");
    }

    const onReservedFocus = () => {
        setInFocus("Reserved Books");
    }

    const onPersonalFocus = () => {
        setInFocus("Personal Information");
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                user,
                inFocus,
                onLogin,
                onLogout,
                onIssuedFocus,
                onReservedFocus,
                onReturnedFocus,
                onPersonalFocus
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
