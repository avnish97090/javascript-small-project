// ruff work just a question on split 


const mixedString = "a + b = c & a & d";
const letters = mixedString.split(/[^a-zA-Z]/).filter(letter => letter !== '');

console.log(letters);
