import { addEditableProducts } from "./add-editable-products.js";
import { saveButtonEventListeners } from "./save-button-event-listeners.js";
import { addEditImageEventListeners } from "./edit-image-event-listeners.js";
function addEditEventListeners(productId) {
  addEditableProducts(productId);
  saveButtonEventListeners();
  addEditImageEventListeners();
}
export { addEditEventListeners };
