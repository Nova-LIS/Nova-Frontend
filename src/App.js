import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
        </>
    );
};

export default App;
