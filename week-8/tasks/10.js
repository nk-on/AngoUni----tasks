async function fetchGitHubUserName(){
    const userName = prompt("Enter your username")
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const res = await data.json();
    console.log(res);
};
fetchGitHubUserName();
async function fetchGitHubUserNamePromise(){
    const userName = 'dfmcmeoejkiorejfoeirjfiojeroifjeoijrif'
    return fetch(`https://api.github.com/users/${userName}`).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res)
    }).catch(()=>{
        console.log("Error")
    })
};
fetchGitHubUserNamePromise();