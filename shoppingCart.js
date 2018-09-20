const ShoppingCart = {
    firstName: "Zachary", 
    lastName: "Sexton",
    cartItems: ["Milk", "Bread", "Diapers", "Shampoo", "32pk of Dasani"],
    cartPrices: [2.79, 1.89, 32.99, 5.15, 4.35],

printShoppingCart()
{
    let sum = 0;
    console.log(`\nName: ${this.firstName}  ${this.lastName} \n Items Purchased: \n`);

    for(let i = 0; i < this.cartItems.length; i++)
    {
            console.log(` ${this.cartItems[i]}: $${this.cartPrices[i]} \n`);
            sum += this.cartPrices[i];
    }
    console.log("Total cost: $" + sum + "\n");
}
}
ShoppingCart.printShoppingCart();


