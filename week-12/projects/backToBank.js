function value(greeting) {
  if (greeting === "Hello" || greeting === "hello") {
    return 0;
  } else if (greeting[0] === "h" || greeting[0] === "H") {
    return 20;
  } else {
    return 100;
  }
}
function main(){
    const result = value('Hello');
    console.log(`${result}$`);
}