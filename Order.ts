export class Product {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId: string) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
}
