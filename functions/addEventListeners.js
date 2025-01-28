import {
  dialogEventListeners,
  addButtonEventListener,
} from "./dialog-event-listeners.js";
import { addSortEventListener } from "./sort-event-listener.js";
import { addSearchEventListener } from "./add-search-event-listener.js";
import { displayProducts } from "./display-products.js";
function addEventListeners() {
  dialogEventListeners();
  addButtonEventListener();
  addSortEventListener();
  addSearchEventListener();
  displayProducts();
}

export { addEventListeners };
