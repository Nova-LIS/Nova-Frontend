import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import RegisterSuccess from "./pages/registersuccess/RegisterSuccess";
import Book from "./components/book/Book";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} exact />
                <Route path="/browse" component={Browse} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/book/:bookId" component={Book} />
                <Route path="/register" component={Register} exact />
                <Route path="/profile/:username" component={Profile} />
                <Route path="/registersuccess" component={RegisterSuccess} exact />
                <Route path="*" component={ComingSoon} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
