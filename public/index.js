const search = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-button");
const infoBox = document.getElementById("box");

const information = async () => {
  if (search.value.trim() === "") return;

  infoBox.innerHTML =
    '<img src="https://s2.svgbox.net/loaders.svg?ic=spinner&color=a1a1a1" width="32" height="32">';
  let infoBoxData;

  const data = await fetch(`https://api.github.com/users/${search.value}`).then(
    (res) => res.json()
  );

  if (data.message) {
    infoBoxData = "<h1>Usuario inexistente</h1>";
  } else {
    let ghLink;
    if (data.blog) {
      ghLink = data.blog.startsWith("http" || "https")
        ? data.blog
        : "http://" + data.blog;
    }

    infoBoxData = /*html*/ `
        <div class="main__box__info">
            <div class="main__box__image-container">
                <img class="main__box__image" src="${
                  data.avatar_url ?? ""
                }" alt="${data.name ?? ""}" />
            </div>

            <div class="main__box__data-container">
                <h3 id="main__box__data-name">
                  ${data.name ?? ""}
                </h3>
                <div class="main__box__data-username-container">
                  <a 
                    class="main__box__data-username" 
                    href="${data.html_url ?? ""}"
                    target="_blank">${data.login ?? ""}
                  </a>
                  <span class="main__box__data-hireable">${
                    data.hireable
                      ? '<small class="hireable">hireable</small>'
                      : ""
                  }</span>
                </div>




                <p class="biography">${data.bio ?? ""}</p>
                <div id="links">
                    ${
                      data.blog
                        ? `<a class="link" href="${
                            ghLink ?? ""
                          }" target="_blank"><i class="fas fa-link"></i> ${
                            ghLink ?? ""
                          }</a>`
                        : ""
                    }
                    ${
                      data.twitter_username
                        ? `<a href="https://www.twitter.com/${data.twitter_username}" target="_blank"><i class="fab fa-twitter"></i> ${data.twitter_username}</a>`
                        : ""
                    }
                </div>
                <hr/>
                <div id="follow">
                    ${
                      data.type === "Organization"
                        ? '<span id="type_organization">Organization</span>'
                        : `
                        <p><i class="fas fa-user-friends"></i> <span class="special-span">${data.followers}</span> Followers</p>                    
                        <p><i class="fas fa-user-check"></i> <span class="special-span">${data.following}</span> Following</p>
                        `
                    }
                </div>
                <div id="public">
                    <p><i class="fas fa-book"></i> <span class="special-span">${
                      data.public_repos
                    }</span> Repositories</p>
                    <p><i class="fas fa-edit"></i> ${new Date(
                      data.created_at
                    ).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
        <div id="info-footer">
            ID: ${data.id}
        </div>
        `;
  }

  infoBox.innerHTML = infoBoxData;
  search.value = "";
};

search.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    information();
  }
});
