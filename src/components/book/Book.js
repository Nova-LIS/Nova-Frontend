import classes from "./Book.module.css";
import { getFirstImageURL } from "first-image-search-load";

const Book = () => {
    const logFetch = async (url) =>  {
        try {
            const response = await getFirstImageURL("Witcher 3");
            console.log(response);
        } catch (err) {
            console.log("fetch failed", err);
        }
    }

    logFetch();

    return (
        <div className={classes["book"]}>
            <div className={classes["book__cover"]}></div>
            <div className={classes["book__title"]}>
                <h2 className={classes["name"]}>The Time Machine</h2>
                <h3 className={classes["author"]}>HG Wells</h3>
            </div>
        </div>
    );
};

export default Book;
