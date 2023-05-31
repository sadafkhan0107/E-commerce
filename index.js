import { products } from "./db/products.js";
import { createProductsCart } from "./createProductCart.js";

const productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const findProductInCart = (cart, prodId) => {
    const isProductInCart = cart && cart.length > 0 && cart.some(({_id}) => _id === prodId);
    return isProductInCart;
}

createProductsCart(products, productContainer);

productContainer.addEventListener("click" , (event) =>
{   
    console.log(event.target.dataset.id)
    const isProductInCart = findProductInCart(cart, event.target.dataset.id);
    if(!isProductInCart){
        const productToAddToCart = products.filter(({_id}) => _id === event.target.dataset.id);
    cart = [...cart, ...productToAddToCart];
    localStorage.setItem("cart", JSON.stringify(cart)); 
    const cartButton = event.target;
    cartButton.innerText = `GO TO Cart`;
    }
    else{
        location.href = "./cart.html";
    }   
});
