//Creating Person object first task
const Person = {
  name: 'John',
  surname: 'Doe',
  age: 65,
  //adding sayHello second task
  sayHello() {
    console.log(this.name);
  },
  //adding job Proprty fourth task
  job: 'Developer',
  //Returning job length fifth task
  returnJobLength() {
    return this.job.length;
  },
};
//deleting age proprty third rask
delete Person.age
//Returining amount of total methods in Person object 6-th task
const PersonValues = Object.values(Person);
const totalProperties = PersonValues.reduce((total, element) => {
  if (typeof element === 'function') {
    return total+1;
  };
  return total;
}, 0);
//Creating Gender property if Person object has not any 7th task
function hasGenderProperty(){
  if(!Person.gender){
    Person.gender = 'male'
  };
};
//Printing all kays and values of Object 8th and 9th tasks
hasGenderProperty();
for(const key of Object.keys(Person)){
  console.log(key)
}
for(const value of Object.values(Person)){
  console.log(value)
}
console.log(totalProperties);
