import App from "./App";

/*
const search = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
*/

(async function index() {
  const app = document.getElementById("app");
  app.innerHTML = await App();
})();
