function passwordStrengthValidator() {
    const password = prompt("Enter password please")
    const regexLetter = /[a-z]/i;
    const regexNumber = /\d/;
    const regexSymbols = /[!@#$%^&*(),.?":{}|<>]/;
    const [includesLetters,includesNumbers,includesSymbols] = [regexNumber.test(password), regexLetter.test(password), regexSymbols.test(password)]
    if ((includesNumbers && includesLetters && includesSymbols) && password.length >= 8) {
        return 'very strong password';
    }
    if ((includesNumbers && includesLetters) && password.length >= 8) {
        return 'strong password'
    }
    ;if (includesLetters && password.length < 8) {
        return 'weak password'
    }
    ;if (includesNumbers && password.length < 8) {
        return 'very weak password'
    }
}
passwordStrengthValidator();