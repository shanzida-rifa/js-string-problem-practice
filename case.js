const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userName.toLocaleUpperCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid');
}