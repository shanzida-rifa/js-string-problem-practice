const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}
// ------------------------------------------
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);
const slingNumber = Math.ceil(number);
console.log(slingNumber);
const floorNumber = Math.floor(number);
console.log(floorNumber);

// ----------------------------
// Random
for (var i = 0; i < 20; i++) {
    const random = Math.random() * 6;
    console.log(Math.round(random));
}

