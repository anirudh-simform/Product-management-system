import {
  dialogEventListeners,
  addButtonEventListener,
} from "./dialog-event-listeners.js";
import { addSortEventListener } from "./sort-event-listener.js";
import { addSearchEventListener } from "./add-search-event-listener.js";
import { displayProducts } from "./display-products.js";
import { closeButtonEventListeners } from "./dialog-event-listeners.js";
function addEventListeners() {
  dialogEventListeners();
  addButtonEventListener();
  addSortEventListener();
  addSearchEventListener();
  closeButtonEventListeners();
  displayProducts();
}

export { addEventListeners };
