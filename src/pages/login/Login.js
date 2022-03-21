import LoginForm from "../../components/loginform/LoginForm";
import classes from "./Login.module.css";

const Login = () => {
    return (
        <div className={classes["login"]}>
            <LoginForm />
        </div>
    );
};

export default Login;
