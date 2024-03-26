const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
const isEven =(Number) => Number % 2 === 0 ? 'This is Even number' : 'This is odd number';
async function execute() {
	const user = Number(await prompt("Put your number: "));
            if (isNaN(user) ) {
                console.log("The input you entered is incorrect. ");
            return ;
            }
            console.log(isEven(user))
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());