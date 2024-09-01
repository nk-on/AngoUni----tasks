class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while(true){
    try{
      console.log(primitiveMultiply(a,b));
      break;
    }catch(error){
      console.log(error)
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64