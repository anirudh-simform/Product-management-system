import { productSystem } from "../index.js";
function addEditProductEventListeners(productId) {
  const editForm = document.querySelector(".edit-product-form");
  const currentProductImage = document.querySelector(".current-product-image");

  editForm["product-image-change-button"].addEventListener("change", () => {
    const reader = new FileReader();
    const file = editForm["product-image-change-button"].files[0];

    const maxFileSize = 5000000;

    if (file.size > maxFileSize) {
      editForm["product-image-change-button"].setCustomValidity(
        "The uploaded file exceeds the maximum allowed capacity of 5MB. Please choose a smaller file"
      );
      return;
    } else {
      editForm["product-image-change-button"].setCustomValidity("");
    }

    reader.addEventListener("load", () => {
      currentProductImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    productSystem.editProduct(
      productId,
      editForm["product-name"].value,
      editForm["product-price"].value,
      currentProductImage.src,
      editForm["product-description"].value
    );

    // Updating local history
    localStorage.setItem("products", productSystem.getJSONArray());

    alert("entry changed");
  });
}

export { addEditProductEventListeners };
