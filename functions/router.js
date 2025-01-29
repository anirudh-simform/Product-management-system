import { addEditEventListeners } from "./add-edit-event-listeners.js";
import { addEventListeners } from "./addEventListeners.js";
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
      addEventListeners();
    } else if (path.title == "Edit") {
      addEditEventListeners(target.id);
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
