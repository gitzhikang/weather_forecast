"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbFavorites_1 = require("../db/dbFavorites");
const router = (0, express_1.Router)();
const db = new dbFavorites_1.FavoritesDB();
router.get('/', (req, res) => {
    console.log("get favorites");
    res.json(db.getAll());
});
router.post('/', (req, res) => {
    console.log("post favorites");
    const data = req.body;
    let favorite = new dbFavorites_1.Favorite(data.zipCode, data.name);
    let newFavorites = db.add(favorite);
    res.json(newFavorites);
});
router.delete('/:zipCode', (req, res) => {
    console.log("delete favorites");
    let { zipCode } = req.params;
    let newFavorites = db.remove(zipCode);
    console.log(JSON.stringify(newFavorites));
    res.json(newFavorites);
});
exports.default = router;
