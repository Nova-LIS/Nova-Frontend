import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext({
    isLoggedIn: null,
    user: null,
    inFocus: null,
    books: null,
    onLogin: () => {},
    onLogout: () => {},
    onIssuedFocus: () => {},
    onReturnedFocus: () => {},
    onReservedFocus: () => {},
    onPersonalFocus: () => {},
    onEndBookQuery: () => {},
});

export const UserContextProvider = (props) => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [inFocus, setInFocus] = useState("Personal Information");
    const [books, setBooks] = useState({ isLoaded: false, issued: [], returned: [] });

    const onLogin = (data) => {
        setIsLoggedIn(true);
        setUser(data);
        history.push("/profile/" + data.userName);

        // await fetch("")
    };

    const onLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        history.push("/home");
    };

    const onIssuedFocus = () => {
        setInFocus("Issued Books");
    };

    const onReturnedFocus = () => {
        setInFocus("Returned Books");
    };

    const onReservedFocus = () => {
        setInFocus("Reserved Books");
    };

    const onPersonalFocus = () => {
        setInFocus("Personal Information");
    };

    const onEndBookQuery = (data) => {
        const issuedBooks = [];
        const returnedBooks = [];
        for (let sa of data) {
            if (!sa.returned) {
                issuedBooks.push({
                    bookName: sa.title,
                    author: sa.author,
                    cover: sa.image_url,
                });
            } else {
                returnedBooks.push({
                    bookName: sa.title,
                    author: sa.author,
                    cover: sa.image_url,
                });
            }
        }
        setBooks({ isLoaded: true, issued: issuedBooks, returned: returnedBooks });
    };

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                user,
                inFocus,
                books,
                onLogin,
                onLogout,
                onIssuedFocus,
                onReservedFocus,
                onReturnedFocus,
                onPersonalFocus,
                onEndBookQuery,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
