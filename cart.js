import { createProductsCart } from "./createProductCart.js";

const cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

createProductsCart(cart, cartContainer);
