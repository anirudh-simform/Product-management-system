import { Product } from "./product.js";
import { productSystem } from "../index.js";
import { displayProducts } from "./display-products.js";

function addDialogEventListeners() {
  const form = document.querySelector("dialog>form");
  const add = document.querySelector("form>.add");
  const dialog = document.querySelector("dialog");
  const productListingContainer = document.querySelector(
    ".product-list-container"
  );

  // 5MB constant
  const maxFileSize = 5000000;

  let imageDataURL;

  // Getting image and converting it to dataURL
  form["product-image"].addEventListener("change", () => {
    const reader = new FileReader();
    const file = form["product-image"].files[0];

    // If the user closes the choose file dialog without choosing a file return
    if (!file) {
      return;
    }

    // Validating image size
    if (file.size > maxFileSize) {
      form["product-image"].setCustomValidity(
        "The uploaded file exceeds the maximum allowed capacity of 5MB. Please choose a smaller file"
      );
    } else {
      form["product-image"].setCustomValidity("");
    }

    reader.addEventListener("load", () => {
      imageDataURL = reader.result;
    });
    reader.readAsDataURL(file);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const product = new Product(
      form["product-name"].value,
      imageDataURL,
      form["product-price"].value,
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

function addCloseButtonEventListeners() {
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

export {
  addDialogEventListeners,
  addButtonEventListener,
  addCloseButtonEventListeners,
};
