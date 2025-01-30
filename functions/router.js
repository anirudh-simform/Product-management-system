import { addEditEventListeners } from "./add-edit-event-listeners.js";
import { addEventListeners } from "./add-event-listeners.js";
import { addEditProductEventListeners } from "./edit-product-form-event-listeners.js";
import { fillEditForm } from "./fill-edit-form.js";
async function router() {
  let path;
  document.addEventListener("click", async (e) => {
    const { target } = e;
    if (!(target.matches("nav a") || target.matches(".product-container>a"))) {
      return;
    }
    e.preventDefault();
    route();
    path = await locationHandler();

    if (path.title == "Home") {
      // Add the event listeners when navigating to the home page
      addEventListeners();
    } else if (path.title == "Edit") {
      // Add the event listeners when navigating to the edit page
      const productId = target.id.charAt(target.id.length - 1);
      addEditProductEventListeners(productId);
      // Fill the edit form
      fillEditForm(productId);
    }
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
    const location = window.location.pathname;

    // If location is empty redirect to the home page
    if (location.length == 0) {
      location = "/";
    }

    const route = routes[location];

    const html = await fetch(route.url).then((response) => response.text());

    document.querySelector(".content").innerHTML = html;

    document.title = route.title;
    return route;
  };

  window.onpopstate = locationHandler;
  window.route = route;
  path = await locationHandler();

  if (path.title == "Home") {
    addEventListeners();
  }
}

export { router };
