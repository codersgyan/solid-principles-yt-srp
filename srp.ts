// Single responsibility principle
import { Invoice } from './Invoice';
import { Product, Order } from './Order';
import { PaymentProcessor } from './PaymentProcessor';
import { PricingCaluculator } from './PricingCalculator';

const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCaluclator = new PricingCaluculator();
const total = pricingCaluclator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);
