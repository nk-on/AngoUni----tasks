async function fetchGitHubUserName(){
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const res = await data.json();
};
fetchGitHubUserName(userName);
async function fetchGitHubUserNamePromise(userName){
    return fetch(`https://api.github.com/users/${userName}`).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res)
    }).catch(()=>{
        console.log("Error")
    })
};
fetchGitHubUserNamePromise(userName);