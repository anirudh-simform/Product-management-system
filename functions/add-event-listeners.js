import {
  addDialogEventListeners,
  addButtonEventListener,
  addCloseButtonEventListeners,
} from "./dialog-event-listeners.js";
import { addSortEventListener } from "./add-sort-event-listener.js";
import { addSearchEventListener } from "./add-search-event-listener.js";
import { displayProducts } from "./display-products.js";

function addEventListeners() {
  addDialogEventListeners();
  addButtonEventListener();
  addSortEventListener();
  addSearchEventListener();
  addCloseButtonEventListeners();
  displayProducts();
}

export { addEventListeners };
