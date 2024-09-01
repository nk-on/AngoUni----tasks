'use strict'
function hasName(obj){
    return obj.name ? obj.name : null;
};
console.log(hasName({name:"John Doe"}));