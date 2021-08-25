import Template from "./template.js";

const Form = document.getElementById("search-form");
const Input = document.getElementById("search-input");
const Box = document.getElementById("box");

const BASE_URL = "https://api.github.com/users";

const handleSubmit = async ({ event }) => {
  event.preventDefault();
  // if (username.trim() === "") return;

  const receivedData = await fetch(`${BASE_URL}/${Input.value}`).then((res) =>
    res.json()
  );

  console.log(receivedData);

  Box.innerHTML = Template({ ...receivedData });

  /*
  infoBox.innerHTML =
    '<img src="https://s2.svgbox.net/loaders.svg?ic=spinner&color=a1a1a1" width="32" height="32">';
  let infoBoxData;

  
  if (data.message) {
    infoBoxData = "<h1>Usuario inexistente</h1>";
  } else {
    let ghLink;
    if (data.blog) {
      ghLink = data.blog.startsWith("http" || "https")
        ? data.blog
        : "http://" + data.blog;
    }

  }

  infoBox.innerHTML = infoBoxData;
  search.value = "";
	*/
};

Form.addEventListener("submit", (event) => {
  handleSubmit({ event });
});
