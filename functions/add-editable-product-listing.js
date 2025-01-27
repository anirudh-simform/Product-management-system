function addEditableProductListing(editableProductListing) {
  const productList = document.querySelector(
    ".editable-product-list-container"
  );
  productList.appendChild(editableProductListing);
}

export { addEditableProductListing };
