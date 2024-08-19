function deepThought(){
    const set = new Set(["42","forty-two","forty two"]);
    const answer = prompt('what is answer of Life, Universe and everything ?')
    set.has(answer) ? alert("yes") : alert("No")
};
deepThought();