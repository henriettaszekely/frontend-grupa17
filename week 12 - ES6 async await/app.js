// console.log("Hello World");

async function showAvatar() {

    // read our JSON
    let response = await fetch('user.json');
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    let gihubUserData = await new Promise((resolve, reject) => setTimeout(
        () => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000));
    debugger
    //img.remove();

    return githubUser;
}

showAvatar();

