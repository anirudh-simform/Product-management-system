function editableProductListing(
  productId,
  productName,
  productPrice,
  productImage,
  productDescription
) {
  const editableProductContainer = document.createElement("div");
  editableProductContainer.className = "editable-product-container";

  // Product Name
  const productNameContainer = document.createElement("div");
  productNameContainer.classList.add(
    "editable-product-name-container",
    "editable-property-container"
  );
  const productNameLabel = document.createElement("div");
  productNameLabel.classList.add(
    "editable-product-name-label",
    "editable-label"
  );
  productNameLabel.textContent = "Product Name";
  const productNameNode = document.createElement("input");
  productNameNode.classList.add(
    "editable-product-name",
    "editable-property",
    `id${productId}`
  );
  productNameNode.value = productName;
  productNameContainer.append(productNameLabel, productNameNode);

  // Product Image
  const productImageContainer = document.createElement("div");
  productImageContainer.classList.add(
    "editable-product-image-container",
    "editable-property-container"
  );
  const productImageLabel = document.createElement("div");
  productImageLabel.classList.add(
    "editable-product-image-label",
    "editable-label"
  );
  productImageLabel.textContent = "Product Image";
  const productImageNode = document.createElement("input");
  productImageNode.classList.add(
    "editable-product-image",
    "editable-property",
    `id${productId}`
  );
  productImageNode.value = productImage;
  productImageContainer.append(productImageLabel, productImageNode);

  // Product Price
  const productPriceContainer = document.createElement("div");
  productPriceContainer.classList.add(
    "editable-product-price-container",
    "editable-property-container"
  );
  const productPriceLabel = document.createElement("div");
  productPriceLabel.classList.add(
    "editable-product-price-label",
    "editable-label"
  );
  productPriceLabel.textContent = "Product Price";
  const productPriceNode = document.createElement("input");
  productPriceNode.classList.add(
    "editable-product-price",
    "editable-property",
    `id${productId}`
  );
  productPriceNode.value = productPrice;
  productPriceContainer.append(productPriceLabel, productPriceNode);

  // Product Description
  const productDescriptionContainer = document.createElement("div");
  productDescriptionContainer.classList.add(
    "editable-product-description-container",
    "editable-property-container"
  );
  const productDescriptionLabel = document.createElement("div");
  productDescriptionLabel.classList.add(
    "editable-product-description-label",
    "editable-label"
  );
  productDescriptionLabel.textContent = "Product Description";
  const productDescriptionNode = document.createElement("input");
  productDescriptionNode.classList.add(
    "editable-product-description",
    "editable-property",
    `id${productId}`
  );
  productDescriptionNode.value = productDescription;
  productDescriptionContainer.append(
    productDescriptionLabel,
    productDescriptionNode
  );

  // Edit Button

  const saveButton = document.createElement("button");
  saveButton.className = "save-button";
  saveButton.id = productId;
  saveButton.textContent = "Save Button";

  editableProductContainer.append(
    productNameContainer,
    productImageContainer,
    productPriceContainer,
    productDescriptionContainer,
    saveButton
  );
  return editableProductContainer;
}

export { editableProductListing };
