function createTable(res){
    const people = res.people;
    console.log(`| Name | craft |`);
    console.log("| --------- | ------------ |");
    for(let i = 0; i < people.length;i++){
        const element = people[i];
        const name = element.name;
        const craft = element.craft;
        console.log(`| ${name} | ${craft} |`);
    };
    
}
async function whoIsInSpace(){
    const data = await fetch('http://api.open-notify.org/astros.json');
    const res = await data.json();
    createTable(res);
}
whoIsInSpace();