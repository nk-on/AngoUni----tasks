async function fetchUserData(){
    try{
        const data = await fetch('https://api.github.com/users/temuritsutskiridze');
        const response = await data.json();
        console.log(response)
    }catch{
        console.log("Error")
    };
}
fetchUserData();