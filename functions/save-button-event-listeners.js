import { productSystem } from "../index.js";
function saveButtonEventListeners() {
  const saveButtons = document.querySelectorAll(".save-button");
  saveButtons.forEach((saveButton) => {
    saveButton.addEventListener("click", () => {
      const productName = document.querySelector(
        ".editable-product-name" + ".id" + saveButton.id
      ).value;
      const productImage = document.querySelector(
        ".editable-product-image" + ".id" + saveButton.id
      ).src;
      const productPrice = document.querySelector(
        ".editable-product-price" + ".id" + saveButton.id
      ).value;
      const productDescription = document.querySelector(
        ".editable-product-description" + ".id" + saveButton.id
      ).value;

      productSystem.editProduct(
        saveButton.id,
        productName,
        productPrice,
        productImage,
        productDescription
      );

      // Updating local history
      localStorage.setItem("products", productSystem.getJSONArray());

      alert("entry changed");
    });
  });
}

export { saveButtonEventListeners };
