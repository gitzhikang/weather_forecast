import express from "express";
import favoriteRouter from './routes/favorites'
import bodyParser from "body-parser";
const app = express();
const port = 3000;
// this will serve all files in the public directory as static
// files, such as HTML, CSS, images, etc.
app.use(express.static("public"));

app.use(bodyParser.json());

//mount the router on the app
app.use("/api/favorite",favoriteRouter);

// this starts the server listening on the specified port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});