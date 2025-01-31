import { System } from "./functions/system.js";
import { addEventListeners } from "./functions/add-event-listeners.js";
import { router } from "./functions/router.js";
import { Product } from "./functions/product.js";
// Initialize products array in local history if not already set
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

const productSystem = new System();
// Fetch the previously added products from local history
const products = JSON.parse(localStorage.getItem("products"));

// Initialize the product management system with all the products that already exist in local history
products.forEach((product) => {
  const newProduct = new Product(
    product["productName"],
    product["productImage"],
    product["productPrice"],
    product["productDescription"]
  );

  productSystem.addProduct(newProduct);
});

// Call to router() routes the the page to home page on initialization
router();

export { productSystem };
