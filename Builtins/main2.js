const x = 1, y = 6;
function App(num1, num2, boolean) {
    if (boolean === true) {
        return Math.floor(Math.random() * (num2)) + num1;
    } else return Math.random() * (num2) + num1;
}
console.log(App(x, y, false));