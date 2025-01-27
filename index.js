import { System } from "./functions/system.js";
import { addEventListeners } from "./functions/addEventListeners.js";
import { router } from "./functions/router.js";

router();
const productSystem = new System();
export { productSystem };
