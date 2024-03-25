const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    console.log(" Super calculator ")
    
            const Number1 = Number(await prompt("Put your first number: "));
            const Number2 = Number(await prompt("Put your second number: "));
                if (isNaN(Number1) && isNaN(Number2)) {
                    console.log("The input you entered is incorrect. ");
                return ;
                }
	const tag = await prompt("Choose one of the calculations '+,-,/,*': ");
    let count ;
    switch (tag) {
        case '+':
            count = Number1+Number2;
           // count = firstNumber + "+" + secondNumber + " = " + firstNumber + secondNumber;
            break;
    
        case '-':
            count = Number1-Number2;
            //count = firstNumber + "-" + secondNumber + " = " + firstNumber - secondNumber;
            break;
    
        case '/':
            count = Number1/Number2;
           // count = firstNumber + "/" + secondNumber + " = " + firstNumber / secondNumber;
            break;
    
        case '*':
            count = Number1*Number2;
            //count = firstNumber + "*" + secondNumber + " = " + firstNumber * secondNumber;
            break;
            default:
        console.log("It is an incorrect Tag ");
        break;
    }
    console.log(`${Number1} ${tag} ${Number2} = ${count}`);
    
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());