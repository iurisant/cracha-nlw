const LinksSocialMedia = {
    github: 'iurisant',
    youtube: 'channel/UCozWag3l6rpwB73_V-pVZOA',
    facebook: 'iuri.goes.77',
    instagram: 'iurizinhow',
    twitter: 'Iuri_Goes1'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
        
        console.log(li.children[0].href);
    }
}
changeSocialMediaLinks();

function getGitHubInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userImage.src = data.avatar_url,
            userName.textContent = data.name,
            userLogin.textContent = data.login,
            userLink.href = data.html_url,
            userBio.textContent = data.bio
        })
}
getGitHubInfos()