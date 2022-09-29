// type para tipar no typescript com camelCase
export class Purchase {
    public id: string;
    public userId: string;
    public productId: string;
    public quantity: number;
    public totalPrice: number;

    constructor(id: string, userId: string, productId: string, quantity: number, totalPrice: number){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getUserId():string{
        return this.userId;
    }
    getProductId():string{
        return this.productId;
    }
    getQuantity():number{
        return this.quantity;
    }
    getTotalPrice():number{
        return this.totalPrice;
    }
}

// type para tipar no banco de dados com snake_case
export class PurchaseDB {
    public id: string;
    public user_id: string;
    public product_id: string;
    public quantity: number;
    public total_price: number;

    constructor(id: string, user_id: string, product_id: string, quantity: number, total_price: number){
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.total_price = total_price;
    }
}