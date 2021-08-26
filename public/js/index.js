import Template from "./template.js";

const Form = document.getElementById("search-form");
const Input = document.getElementById("search-input");
const ProfileBox = document.getElementById("profile-box");

const BASE_URL = "https://api.github.com/users";

const tempInfo = {
  login: "doulovera",
  id: 42481580,
  node_id: "MDQ6VXNlcjQyNDgxNTgw",
  // avatar_url: "https://avatars.githubusercontent.com/u/42481580?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/doulovera",
  html_url: "https://github.com/doulovera",
  followers_url: "https://api.github.com/users/doulovera/followers",
  following_url:
    "https://api.github.com/users/doulovera/following{/other_user}",
  gists_url: "https://api.github.com/users/doulovera/gists{/gist_id}",
  starred_url: "https://api.github.com/users/doulovera/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/doulovera/subscriptions",
  organizations_url: "https://api.github.com/users/doulovera/orgs",
  repos_url: "https://api.github.com/users/doulovera/repos",
  events_url: "https://api.github.com/users/doulovera/events{/privacy}",
  received_events_url: "https://api.github.com/users/doulovera/received_events",
  type: "User",
  site_admin: false,
  name: "Douglas Lovera",
  company: null,
  blog: "https://doulovera.vercel.app/",
  location: null,
  email: null,
  hireable: true,
  bio: "Love create and learn new things. Studying to become the best. Discord: DouLo#0763",
  twitter_username: "doulovera",
  public_repos: 12,
  public_gists: 0,
  followers: 4,
  following: 14,
  created_at: "2018-08-17T22:28:11Z",
  updated_at: "2021-08-11T16:28:07Z",
};

const handleSubmit = async ({ event }) => {
  event.preventDefault();
  // Checks if the input is empty
  if (Input.value.trim() === "") return;
  // Receive the data

  // const receivedData = await fetch(`${BASE_URL}/${Input.value}`) // prettier-ignore
  //   .then((response) => {
  //     if (response.status === 404) return { notFoundError: "Profile not found" }; //prettier-ignore
  //     return response.json();
  //   });

  ProfileBox.innerHTML = Template({ ...tempInfo });

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
