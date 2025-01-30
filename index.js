import { System } from "./functions/system.js";
import { addEventListeners } from "./functions/add-event-listeners.js";
import { router } from "./functions/router.js";
import { Product } from "./functions/product.js";

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

const productSystem = new System();
const products = JSON.parse(localStorage.getItem("products"));
products.forEach((product) => {
  const newProduct = new Product(
    product["productName"],
    product["productImage"],
    product["productPrice"],
    product["productDescription"]
  );

  productSystem.addProduct(newProduct);
});

router();

export { productSystem };
