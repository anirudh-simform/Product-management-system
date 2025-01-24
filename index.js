import { System } from "./functions/system.js";
import { addEventListeners } from "./functions/addEventListeners.js";
import { addSortEventListener } from "./functions/sort-event-listener.js";
const productSystem = new System();
addEventListeners();
export { productSystem };
