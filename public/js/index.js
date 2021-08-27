import Template from "./template.js";

const Form = document.getElementById("search-form");
const Input = document.getElementById("search-input");
const ProfileBox = document.getElementById("profile-box");

const BASE_URL = "https://api.github.com/users";

const handleSubmit = async ({ event }) => {
  event.preventDefault();
  // Checks if the input is empty
  if (Input.value.trim() === "") return;
  ProfileBox.innerHTML =
    '<img src="https://s2.svgbox.net/loaders.svg?ic=spinner&color=a1a1a1" width="32" height="32">';

  // Receives the data
  const receivedData = await fetch(`${BASE_URL}/${Input.value}`) // prettier-ignore
    .then((response) => {
      if (response.status === 404) return { notFoundError: "Profile not found" }; //prettier-ignore
      return response.json();
    });

  ProfileBox.innerHTML = Template({ ...receivedData });
};

Form.addEventListener("submit", (event) => {
  handleSubmit({ event });
});
