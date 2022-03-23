const fs = require("fs");
const csv = require("csv-parser");
const results = [];

fs.createReadStream("google_books_1299.csv")
    .pipe(csv({}))
    .on("data", (data) => {
        results.push(data);
    })
    .on("end", () => {
        const categories = [];
        console.log(results.length);
        console.log(results[2].ISBN);

        // for (let genre of categories) {
        //     console.log(genre);
        // }
    });

// for (let result in results) {
//     console.log(result);
//     exit();
// }
