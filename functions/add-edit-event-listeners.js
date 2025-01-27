import { addEditableProducts } from "./add-editable-products.js";
import { saveButtonEventListeners } from "./save-button-event-listeners.js";
function addEditEventListeners() {
  addEditableProducts();
  saveButtonEventListeners();
}
export { addEditEventListeners };
