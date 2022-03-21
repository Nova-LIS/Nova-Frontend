import Title from "../../components/title/Title";
import Suggestion from "../../components/suggestion/Suggestion";
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes["home"]}>
            <Title />
            <Suggestion />
        </div>
    );
};

export default Home;
