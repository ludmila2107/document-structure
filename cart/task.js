let products = Array.from(document.querySelectorAll(".product"));//переменная из массива элементов с класслм продакт

for (let i = 0; i < products.length; i++) {
    productsControl = products[i].querySelectorAll(".product__quantity-control");
    productsControl[0].onclick = () => {
        if (products[i].querySelector(".product__quantity-value").innerText > 0) {
            products[i].querySelector(".product__quantity-value").innerText--;
        }
    };
    productsControl[1].onclick = () => {
        if (products[i].querySelector(".product__quantity-value").innerText) {
            products[i].querySelector(".product__quantity-value").innerText++;
        }
    };
}

for (let i = 0; i < products.length; i++) {
    let buttonAdd = products[i].querySelector(".product__add"); //выбираем элементы с классом .product__add
    buttonAdd.addEventListener("click", () => {
        let thisId = buttonAdd.closest(".product").dataset.id;
        let thisImg = buttonAdd.closest(".product").querySelector("img").src;
        let thisproductsQuantityValue = buttonAdd
            .closest(".product")
            .querySelector(".product__quantity-value");
        let cart = document.querySelector(".cart__products");
        let productsInCart = Array.from(cart.querySelectorAll(".cart__product"));
        let cartProduct;
        let cartProductImg;
        let quantityInCart;
        const findEl = productsInCart.find((el) => el.dataset.id == thisId);

        if (thisproductsQuantityValue.innerText > 0) {
            if (findEl) {
                findEl.querySelector(".cart__product-count").innerText = +findEl.querySelector(".cart__product-count").innerText +
                    +thisproductsQuantityValue.innerText;
            } else {
                cartProduct = document.createElement("div");
                cartProduct.className = "cart__product";
                cartProduct.setAttribute("data-id", thisId);

                cartProductImg = document.createElement("img");
                cartProductImg.className = "cart__product-image";
                cartProductImg.setAttribute("src", thisImg);
                cartProduct.append(cartProductImg);

                quantityInCart = document.createElement("div");
                quantityInCart.className = "cart__product-count";
                quantityInCart.innerText = thisproductsQuantityValue.innerText;
                cartProduct.append(quantityInCart);
                cart.append(cartProduct);
            }
        }
    });
}