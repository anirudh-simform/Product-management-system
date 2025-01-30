import { productSystem } from "../index.js";
function fillEditForm(productId) {
  const editForm = document.querySelector(".edit-product-form");
  const currentProductImage = document.querySelector(".current-product-image");

  const [product] = productSystem.filterByProductId(productId);

  editForm["product-name"].value = product.getProductName();
  currentProductImage.src = product.getImage();
  editForm["product-price"].value = product.getPrice();
  editForm["product-description"].value = product.getDescription();
}

export { fillEditForm };
