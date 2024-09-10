import { Router } from "express";
import {Favorite,FavoritesDB} from "../db/dbFavorites"
const router = Router();
const db = new FavoritesDB();

router.get('/',(req,res)=>{
    console.log("get favorites");
    res.json(db.getAll());
});

router.post('/',(req,res)=>{
    console.log("post favorites");
    const data = req.body;
    let favorite : Favorite = new Favorite(data.zipCode,data.name);
    let newFavorites = db.add(favorite);
    res.json(newFavorites);
});

router.delete('/:zipCode',(req,res)=>{
    console.log("delete favorites");
    let {zipCode} = req.params;
    let newFavorites = db.remove(zipCode);
    console.log(JSON.stringify(newFavorites));
    res.json(newFavorites);
});

export default router;
