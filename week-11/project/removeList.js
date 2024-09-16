function listRemoval(){
    const numberOfEmployees = Number(prompt("How much employess do you have ?"));
    const employeeArr = [];
    for(let i = 0; i < numberOfEmployees; i++){
        const employee = prompt("Enter employee name");
        employeeArr.push(employee);
    };
    const employeeToRemove = prompt("Enter employee to remove name");
    if(!employeeArr.includes(employeeToRemove)){
        alert("There is no such employee");
        return;
    };
    return employeeArr.reduce((resArr,curr)=>{
        if(employeeToRemove !== curr){
            resArr.push(curr);
        };
        return resArr;
    },[]);
};
listRemoval();
