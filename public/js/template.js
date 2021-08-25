export default function Template({
  login,
  id,
  avatar_url,
  html_url,
  type,
  name,
  blog,
  location,
  hireable,
  bio,
  twitter_username,
  public_repos,
  followers,
  followings,
  created_at,
}) {
  return /*html*/ `
    <h1>${login}</h1>
    <h1>${bio}</h1>
  `;
}

/*
<div id="info">
            <div class="column">
                <img class="img-url" src="${data.avatar_url ?? ""}" alt="${
      data.name ?? ""
    }" />
            </div>
            <div class="column">
                <h2 id="gh-titles">
                    <span><a class="name" href="${
                      data.html_url ?? ""
                    }" target="_blank">${
      data.name ?? ""
    }<i class="fas fa-external-link-alt"></i></a></span>
                    <span class="username">${data.login ?? ""} ${
      data.hireable ? '<small class="hireable">hireable</small>' : ""
    }</span>
                </h2>
                <p class="biography">${data.bio ?? ""}</p>
                <div id="links">
                    ${
                      data.blog
                        ? `<a class="link" href="${
                            ghLink ?? ""
                          }" target="_blank"><i class="fas fa-link"></i> ${
                            ghLink ?? ""
                          }<i class="fas fa-external-link-alt"></i></a>`
                        : ""
                    }
                    ${
                      data.twitter_username
                        ? `<a href="https://www.twitter.com/${data.twitter_username}" target="_blank"><i class="fab fa-twitter"></i> ${data.twitter_username}<i class="fas fa-external-link-alt"></i></a>`
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

*/
