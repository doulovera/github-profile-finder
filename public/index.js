const search = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const infoBox = document.getElementById('box');

const information = async() => {
    
    infoBox.innerHTML = '<img src="https://s2.svgbox.net/loaders.svg?ic=spinner&color=a1a1a1" width="32" height="32">';
    let infoBoxData;
    
    const data = await fetch(`https://api.github.com/users/${search.value}`, {
        headers: {
            authorization: "token 6c7c273e6fa5df1f981396a949df03ae0de41126"
        }
    })
    .then(res => res.json())
    
    if(data.message) {

        infoBoxData = '<h1>Usuario inexistente</h1>';

    } else {

        let ghLink;        
        if(data.blog) { 
            ghLink = data.blog.startsWith('http' || 'https') ? data.blog : 'http://'+data.blog;
        }

        infoBoxData = `
        <div id="info">
            <div class="column">
                <img class="img-url" src="${data.avatar_url ?? ''}" alt="${data.name ?? ''}" />
            </div>
            <div class="column">
                <h2 id="gh-titles">
                    <span><a class="name" href="${data.html_url ?? ''}" target="_blank">${data.name ?? ''}<i class="fas fa-external-link-alt"></i></a></span>
                    <span class="username">${data.login ?? ''} ${data.hireable ? '<small class="hireable">hireable</small>' : ''}</span>
                </h2>
                <p class="biography">${data.bio ?? ''}</p>
                <div id="links">
                    ${data.blog ? `<a class="link" href="${ghLink ?? ''}" target="_blank"><i class="fas fa-link"></i> ${ghLink ?? ''}<i class="fas fa-external-link-alt"></i></a>` : ''}
                    ${data.twitter_username ? `<a href="https://www.twitter.com/${data.twitter_username}" target="_blank"><i class="fab fa-twitter"></i> ${data.twitter_username}</a>` : ''}
                </div>
                <hr/>
                <div id="follow">
                    <p><i class="fas fa-user-friends"></i> <span class="special-span">${data.followers}</span> Followers</p>                    
                    <p><i class="fas fa-user-check"></i> <span class="special-span">${data.following}</span> Following</p>
                </div>
                <div id="public">
                    <p><i class="fas fa-book"></i> <span class="special-span">${data.public_repos}</span> Repositories</p>
                    <p><i class="fas fa-edit"></i> ${new Date(data.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
        <div id="info-footer">
            ID: ${data.id}
        </div>
        `    
    }


    infoBox.innerHTML = infoBoxData;
    search.value = '';
}

search.addEventListener('keyup', event => {
    if(event.key === 'Enter') {
        information()
    }
})
