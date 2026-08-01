export const products = [
    {
        id: "P101",
        name: "Apple AirPods Pro",
        price: 24999,
        stock: 12,
        category: "Electronics",
    },
    {
        id: "P102",
        name: "Nike Running Shoes",
        price: 5999,
        stock: 25,
        category: "Footwear",
    },
    {
        id: "P103",
        name: "Samsung Galaxy S25",
        price: 79999,
        stock: 5,
        category: "Mobiles",
    },
];

export const orders = [
    {
        orderId: "ORD1001",
        customer: "Sara",
        product: "Apple AirPods Pro",
        status: "Shipped",
        expectedDelivery: "Tomorrow",
        returnEligible: true,
        refundStatus: "Not Initiated",
    },
    {
        orderId: "ORD1002",
        customer: "John",
        product: "Nike Running Shoes",
        status: "Delivered",
        expectedDelivery: "Delivered",
        returnEligible: true,
        refundStatus: "Completed",
    },
    {
        orderId: "ORD1003",
        customer: "Alex",
        product: "Samsung Galaxy S25",
        status: "Processing",
        expectedDelivery: "2 Days",
        returnEligible: false,
        refundStatus: "N/A",
    },
];

export const tickets: any[] = [];