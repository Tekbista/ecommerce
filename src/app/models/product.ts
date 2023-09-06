export class Product {
    productId: number;
    productName: string;
    price: number;
    discountPrice: number;
    description: string;
    image: string;
    topProduct: boolean;
    quantity: number;

    constructor(id:number, productName: string,price: number, discountPrice: number, description: string, image: string, topProduct: boolean, quantity: number){
        this.productId = id;
        this.productName = productName;
        this.price = price;
        this.discountPrice = discountPrice;
        this.description =description;
        this.image = image;
        this.topProduct = topProduct;
        this.quantity = quantity;
    }

}
