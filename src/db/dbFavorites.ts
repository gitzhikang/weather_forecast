export class Favorite{
    public zipCode: string;
    public name : string;

    public constructor(zip:string,n:string){
        this.zipCode = zip;
        this.name = n;
    }
}

export class FavoritesDB{
    private favorites : Favorite[];

    public constructor(){
        this.favorites = [];
    }

    public add(favorite:Favorite):Favorite[] {
        this.favorites.push(favorite);
        return this.favorites;
    }

    public getAll():Favorite[]{
        return this.favorites;
    }

    public remove(zipCode:string){
        let index:number = this.favorites.findIndex(favorite =>{
            return favorite.zipCode === zipCode;
        });
        // if(index == -1) return undefined;
        console.log('favorites',index);
        this.favorites.splice(index,1);
        return this.favorites;
        
    }



    
}

