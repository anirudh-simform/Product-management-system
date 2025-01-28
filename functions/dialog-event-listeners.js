import { Product } from "./product.js";
import { productSystem } from "../index.js";
import { addProductListing } from "./addProductListing.js";
import { createProductListing } from "./create-product-listing.js";
import { displayProducts } from "./display-products.js";
function dialogEventListeners() {
  const form = document.querySelector("dialog>form");
  const add = document.querySelector("form>.add");
  const dialog = document.querySelector("dialog");
  const productListingContainer = document.querySelector(
    ".product-list-container"
  );

  add.addEventListener("click", (e) => {
    e.preventDefault();

    const product = new Product(
      form["product-name"].value,
      form["product-image"].value,
      form["product-price"].value,
      form["product-description"].value
    );

    const productListingNode = createProductListing(
      product.getProductId(),
      form["product-name"].value,
      form["product-price"].value,
      form["product-image"].value,
      form["product-description"].value
    );

    productSystem.addProduct(product);

    // Clear the product list container before displaying product
    productListingContainer.innerHTML = "";

    displayProducts();

    // Updating local storage
    localStorage.setItem("products", productSystem.getJSONArray());

    dialog.close();
  });
}

function addButtonEventListener() {
  const addProduct = document.querySelector(".add-product");
  const dialog = document.querySelector("dialog");
  addProduct.addEventListener("click", () => {
    dialog.showModal();
  });
}

export { dialogEventListeners, addButtonEventListener };
