import { productSystem } from "../index.js";
import { displayProducts } from "./display-products.js";
function addRemoveProductEventListener() {
  const removeButtons = document.querySelectorAll(
    "button.remove-product-button"
  );

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      const productId = removeButton.id.charAt(removeButton.id.length - 1);

      productSystem.removeProduct(productId);

      localStorage.setItem("products", productSystem.getJSONArray());
      const productListContainer = document.querySelector(
        ".product-list-container"
      );
      productListContainer.innerHTML = "";
      displayProducts();
    });
  });
}

export { addRemoveProductEventListener };
