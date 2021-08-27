export default function Template({
  login,
  id,
  avatar_url,
  html_url,
  type,
  name,
  blog,
  hireable,
  bio,
  twitter_username,
  public_repos,
  followers,
  following,
  created_at,
  notFoundError,
}) {
  if (notFoundError) return `<h1>${notFoundError}</h1>`;

  const validateHttpInLink =
    blog &&
    `${`<a href="${
      !blog.startsWith("http") ? `http://${blog}` : blog
    }" target="_blank" rel="noreferrer"><i class="fas fa-link"></i></a>`}`;

  return /*html*/ `
    <div class="profile__container">
      <div class="profile__avatar">
        <img src="${avatar_url}" alt="${login}'s avatar" />
      </div>

      <div class="profile__flags">
        ${hireable ? "<small>💼 Hireable</small>" : ""}
        ${type === "Organization" ? "<small>🏢 Organization</small>" : ""}
      </div>

      <div class="profile__links">
          ${`<span>${validateHttpInLink}</span>` || ""}
          ${
            twitter_username
              ? `<span><a href="https://twitter.com/${twitter_username}" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></span>`
              : ""
          }
        </div>

      <div class="profile__info">
        <div class="profile__name">
          <h2>${name || ""}</h2>
          <h4><a href="${html_url}" target="_blank" rel="noreferrer">${login}</a></h4>
          ${bio ? `<p>"${bio}"</p>` : ""}
        </div>
        
        <div class="profile__info-cards__container">
          <div class="profile__info-card">
            <h4 class="info_number">
              ${public_repos}
            </h4>
            <p>Repos</p>
          </div>
          <div class="profile__info-card">
            <h4 class="info_number">
              ${followers}
            </h4>
            <p>Followers</p>
          </div>
          <div class="profile__info-card">
            <h4 class="info_number">
              ${following}
            </h4>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer">
			<p>ID: ${id}</p>
    </div>
  `;
}
