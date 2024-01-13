import { Product } from './Order';

export class PricingCaluculator {
    calculatePricing(products: Product[]) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}
