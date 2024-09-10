"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favorites_1 = __importDefault(require("./routes/favorites"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 4000;
// this will serve all files in the public directory as static
// files, such as HTML, CSS, images, etc.
app.use(express_1.default.static("public"));
app.use(body_parser_1.default.json());
//mount the router on the app
app.use("/api/favorite", favorites_1.default);
// this starts the server listening on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
