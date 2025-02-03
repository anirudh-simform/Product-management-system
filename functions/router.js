import { addEventListeners } from "./add-event-listeners.js";
import { addEditProductEventListeners } from "./edit-product-form-event-listeners.js";
import { fillEditForm } from "./fill-edit-form.js";
import { removeAllElements } from "./remove-all-elements.js";
let clickedButton;
async function router() {
  let path;
  document.addEventListener("click", async (e) => {
    const { target } = e;
    clickedButton = target;
    if (
      !(
        target.matches("nav a") ||
        target.matches(".product-container>.text-element-container>a")
      )
    ) {
      return;
    }
    e.preventDefault();
    route();
    path = await locationHandler();
  });

  const routes = {
    "/": {
      url: "pages/add-product.html",
      title: "Home",
    },

    "/edit": {
      url: "pages/edit.html",
      title: "Edit",
    },
  };

  const route = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    locationHandler();
  };

  const locationHandler = async () => {
    let location = window.location.pathname.split("/");
    location = "/" + location[location.length - 1];

    // If location is empty redirect to the home page
    if (location.length == 0) {
      location = "/";
    }

    const route = routes[location];

    const html = await fetch(route.url).then((response) => response.text());

    document.querySelector(".content").innerHTML = html;

    document.title = route.title;
    if (route.title == "Home") {
      // Add the event listeners when navigating to the home page
      addEventListeners();
    } else if (route.title == "Edit") {
      // Add the event listeners when navigating to the edit page
      const productId = clickedButton.id.charAt(clickedButton.id.length - 1);
      addEditProductEventListeners(productId);
      // Fill the edit form
      fillEditForm(productId);
    }
    return route;
  };

  window.onpopstate = locationHandler;
  window.route = route;
  path = await locationHandler();
}

export { router };
