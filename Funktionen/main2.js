const isEven = (Number) => Number % 2 === 0 ? 'true' : 'false';
const user = 2;
if (isNaN(user)) {
    console.log("The input you entered is incorrect. ");
    return;
}
console.log(isEven(user))