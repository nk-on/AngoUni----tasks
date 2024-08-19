function federalSavingBank(){
    const greeting = prompt(Input('Greeting'));
    if(greeting === 'Hello' || greeting === 'hello'){
        alert('0$')
    }else if(greeting[0] === 'h' || greeting[0] === 'H'){
        alert('20$')
    }else{
        alert('100$')
    };
}