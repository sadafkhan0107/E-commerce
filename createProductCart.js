const findProductInCart = (cart, prodId) => {
    const isProductInCart = cart && cart.length > 0 && cart.some(({_id}) => _id === prodId);
    return isProductInCart;
}

export const createProductsCart = (products, parentElement) =>{
    for(let product of products){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add(
            "card", 
            "card-vertical", 
            "d-flex", 
            "direction-column", 
            "relative",
            "shadow",
            );
            
            /* Image Container */
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("card-image-container");
    
            const image = document.createElement("img");
            image.classList.add("card-image");
            image.setAttribute("src", product.img);
            image.setAttribute("alt", product.name);
    
            imageContainer.appendChild(image);
    
            /* card details container */
            const cardDetailsContainer = document.createElement("div");
            cardDetailsContainer.classList.add("card-details");
    
            const brandContainer = document.createElement("div");
            brandContainer.classList.add("card-title");
            brandContainer.innerText = product.brand;
            cardDetailsContainer.appendChild(brandContainer);
    
            /* card description container */
            const descriptionContainer = document.createElement("div");
            descriptionContainer.classList.add("card-description");
    
            /** Product Name */
            const name= document.createElement("p");
            name.classList.add("card-des");
            name.innerText = product.name;
            descriptionContainer.appendChild(name);
    
            /**Product price */
            const price = document.createElement("p");
            price.classList.add("card-price");
            price.innerText = `Rs.${product.newPrice}      `;
    
            /**Product old price */
            const oldPrice = document.createElement("span");
            oldPrice.classList.add("price-strike-through");
            oldPrice.innerText = `Rs.${product.oldPrice}`;
            price.appendChild(oldPrice)
    
            /**Discount */
            const discount = document.createElement("span");
            discount.classList.add("discount");
            discount.innerText = `      (${product.discount}% OFF)`;
            price.appendChild(discount);
    
            descriptionContainer.appendChild(price);
    
            /**Rating */
            const ratings = document.createElement("p");
            ratings.classList.add("d-flex","align-center");
    
            const rating = document.createElement("span");
            rating.innerText = product.rating;
            ratings.appendChild(rating);
    
            const star= document.createElement("span");
            star.classList.add("material-icons-outlined");
            star.innerText = "star";
            ratings.appendChild(star);
    
            descriptionContainer.appendChild(ratings);
    
            cardDetailsContainer.appendChild(descriptionContainer);
    
            /** CTA button container */
            const ctaButton = document.createElement("div");
            ctaButton.classList.add("cta-btn");
    
            const cartButton = document.createElement("button");
            cartButton.classList.add(
                "button", 
                "btn-primary", 
                "btn-icon",
                "cart-btn",
                "d-flex",
                "align-center",
                "justify-center",
                "gap",
                "btn-margin"
                );
                cartButton.setAttribute("data-id", product._id)
                const cart= document.createElement("span");
                cart.classList.add("material-icons-outlined");
                cart.setAttribute("data-id", product._id)
                cart.innerText = "shopping_cart";
                cartButton.appendChild(cart);
    
                const buttonText= document.createElement("span");
                const isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart")), product._id)
                buttonText.innerText= isProductInCart ? "Go To Cart" : "Add to Cart";
                buttonText.setAttribute("data-id", product._id)
                cartButton.appendChild(buttonText);
    
                ctaButton.appendChild(cartButton);
                cardDetailsContainer.appendChild(ctaButton);
    
            cardContainer.appendChild(imageContainer);
            cardContainer.appendChild(cardDetailsContainer);
    
            parentElement.appendChild(cardContainer);
    }
}