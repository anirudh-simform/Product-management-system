import { productSystem } from "../index.js";
import { displayProducts } from "./display-products.js";
function createProductListing(
  productId,
  productName,
  productPrice,
  productImage,
  productDescription
) {
  // Product container div
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  // Product name container
  const productNameContainer = document.createElement("div");
  productNameContainer.className = "product-name-container";
  const productNameLabel = document.createElement("div");
  productNameLabel.className = "product-name-label";
  productNameLabel.textContent = "Product Name";
  const productNameNode = document.createElement("div");
  productNameNode.className = "product-name";
  productNameNode.textContent = productName;
  productNameContainer.append(productNameLabel, productNameNode);

  // Product image container
  const productImageContainer = document.createElement("div");
  productImageContainer.className = "product-image-container";
  const productImageLabel = document.createElement("div");
  productImageLabel.className = "product-image-label";
  productImageLabel.textContent = "Product Image";
  const productImageNode = document.createElement("img");
  productImageNode.className = "product-image";
  productImageNode.src = productImage;
  productImageContainer.append(productImageLabel, productImageNode);

  // Product price container
  const productPriceContainer = document.createElement("div");
  productPriceContainer.className = "product-price-container";
  const productPriceLabel = document.createElement("div");
  productPriceLabel.className = "product-price-label";
  productPriceLabel.textContent = "Product Price";
  const productPriceNode = document.createElement("div");
  productPriceNode.className = "product-price";
  productPriceNode.textContent = productPrice;
  productPriceContainer.append(productPriceLabel, productPriceNode);

  // Product price container
  const productDescriptionContainer = document.createElement("div");
  productDescriptionContainer.className = "product-description-container";
  const productDescriptionLabel = document.createElement("div");
  productDescriptionLabel.className = "product-description-label";
  productDescriptionLabel.textContent = "Product Description";
  const productDescriptionNode = document.createElement("div");
  productDescriptionNode.className = "product-description";
  productDescriptionNode.textContent = productDescription;
  productDescriptionContainer.append(
    productDescriptionLabel,
    productDescriptionNode
  );

  // Link to edit the product on the edit page
  const editLink = document.createElement("a");
  editLink.href = "/edit";
  editLink.className = "edit-link";
  editLink.text = "Edit";
  editLink.id = `id${productId}`;

  // button to remove the product
  const removeProductButton = document.createElement("button");
  removeProductButton.className = "remove-product-button";
  removeProductButton.textContent = "Remove Product";
  removeProductButton.id = `id${productId}`;
  removeProductButton.addEventListener("click", () => {
    productSystem.removeProduct(productId);

    localStorage.setItem("products", productSystem.getJSONArray());
    const productListContainer = document.querySelector(
      ".product-list-container"
    );
    productListContainer.innerHTML = "";
    displayProducts();
  });

  productContainer.append(
    productNameContainer,
    productImageContainer,
    productPriceContainer,
    productDescriptionContainer,
    editLink,
    removeProductButton
  );
  return productContainer;
}

export { createProductListing };
