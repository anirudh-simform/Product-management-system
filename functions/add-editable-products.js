import { productSystem } from "../index.js";
import { editableProductListing } from "./editable-product-listing.js";
import { addEditableProductListing } from "./add-editable-product-listing.js";
function addEditableProducts(productId) {
  const id = productId.charAt(productId.length - 1);
  const [product] = productSystem.filterByProductId(id);

  addEditableProductListing(
    editableProductListing(
      product.getProductId(),
      product.getProductName(),
      product.getPrice(),
      product.getImage(),
      product.getDescription()
    )
  );
}

export { addEditableProducts };
