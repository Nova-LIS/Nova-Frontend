import classes from "./Contact.module.css";

import ritwikImg from "./imgs/geralt.png";
import rounakImg from "./imgs/geralt.png";
import saptarshiImg from "./imgs/geralt.png";

const Contact = () => {
    return (
        <div className={classes["contact__container"]}>
            <div className={classes["contact"]}>
                <div className={classes["contact-block"]}>
                    <div className={classes["img__container"]}>
                        <img src={ritwikImg} alt="ritwik" className={classes["img"]}/>
                    </div>
                    <div className={classes["info"]}>
                        <p>Ritwik Ranjan Mallik</p>
                        <p>mallikritwik2014@gmail.com</p>
                        <p>8617290014</p>
                    </div>
                </div>
                <div className={classes["contact-block"]}>
                    <div className={classes["img__container"]}>
                        <img src={rounakImg} alt="rounak" className={classes["img"]}/>
                    </div>
                    <div className={classes["info"]}>
                        <p>Rounak Saha</p>
                        <p>rounaksaha12@gmail.com</p>
                        <p>6297272095</p>
                    </div>
                </div>
                <div className={classes["contact-block"]}>
                    <div className={classes["img__container"]}>
                        <img src={saptarshiImg} alt="saptarshi" className={classes["img"]}/>
                    </div>
                    <div className={classes["info"]}>
                        <p>Saptarshi De Chowdhury</p>
                        <p>saptarshi_de_chaudhury@outlook.com</p>
                        <p>9051045291</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
