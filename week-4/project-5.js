function playBackSpeed(){
    let str = prompt('Enter sentence')
    const regex = / /gi
    str = str.replace(regex,'.')
    return str;
};