import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes["footer"]}>
            <h1 className={classes["footer__title"]}>Nova</h1>
            <div className={classes["footer__content"]}>
                <div className={classes["info-block"]}>
                    <h2>EXPLORE</h2>
                    <ul className={classes["footer-list"]}>
                        <li>Home</li>
                        <li>Browse</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className={classes["info-block"]}>
                    <h2>CONNECT</h2>
                    <ul className={classes["footer-list"]}>
                        <li>Home</li>
                        <li>Browse</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;