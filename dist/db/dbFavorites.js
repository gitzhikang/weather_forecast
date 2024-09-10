"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesDB = exports.Favorite = void 0;
class Favorite {
    constructor(zip, n) {
        this.zipCode = zip;
        this.name = n;
    }
}
exports.Favorite = Favorite;
class FavoritesDB {
    constructor() {
        this.favorites = [];
    }
    add(favorite) {
        this.favorites.push(favorite);
        return this.favorites;
    }
    getAll() {
        return this.favorites;
    }
    remove(zipCode) {
        let index = this.favorites.findIndex(favorite => {
            return favorite.zipCode === zipCode;
        });
        // if(index == -1) return undefined;
        console.log('favorites', index);
        this.favorites.splice(index, 1);
        return this.favorites;
    }
}
exports.FavoritesDB = FavoritesDB;
