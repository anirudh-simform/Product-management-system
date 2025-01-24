import { Product } from "./product.js";
import { productSystem } from "../index.js";
import { addProductListing } from "./addProductListing.js";
import { createProductListing } from "./create-product-listing.js";
function dialogEventListeners() {
  const form = document.querySelector("dialog>form");
  const add = document.querySelector("form>.add");
  const dialog = document.querySelector("dialog");

  add.addEventListener("click", (e) => {
    e.preventDefault();
    const productListingNode = createProductListing(
      form["product-name"].value,
      form["product-price"].value,
      form["product-image"].value,
      form["product-description"].value
    );

    const product = new Product(
      form["product-name"].value,
      form["product-image"].value,
      form["product-price"].value,
      form["product-description"].value
    );

    productSystem.addProduct(product);
    addProductListing(productListingNode);
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
