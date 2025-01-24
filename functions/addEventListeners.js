import {
  dialogEventListeners,
  addButtonEventListener,
} from "./dialog-event-listeners.js";
import { addSortEventListener } from "./sort-event-listener.js";
import { addSearchEventListener } from "./add-search-event-listener.js";
function addEventListeners() {
  dialogEventListeners();
  addButtonEventListener();
  addSortEventListener();
  addSearchEventListener();
}

export { addEventListeners };
