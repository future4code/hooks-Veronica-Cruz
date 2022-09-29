export class Product {
    public id: string;
    public name: string;
    public price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getIdProduct():string{
        return this.id;
    }
    getNameProduct():string{
        return this.name;
    }
    getPriceProduct():number{
        return this.price;
    }
    setNewIdProduct(newId:string){
        this.id = newId;
    }
    setNameProduct(newName:string){
        this.name = newName;
    }
    setPriceProduct(newPrice:number){
        this.price = newPrice;
    }
}