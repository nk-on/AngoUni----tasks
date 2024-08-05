function printQuote(){
    const quote = prompt("Enter quote");
    const author = prompt("Enter author");
    if(quote === '' && author === ''){
        alert('Enter valid prompt');
        return;
    }
    const res = `${author} Says \`${quote}\``
    return res;
}