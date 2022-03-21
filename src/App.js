import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ComingSoon from "./components/comingsoon/ComingSoon";
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
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="*" component={ComingSoon} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
