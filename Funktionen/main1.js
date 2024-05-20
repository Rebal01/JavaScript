const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
	const Number1 = Number(await prompt("Put your number: "));
            if (isNaN(Number1) ) {
                console.log("The input you entered is incorrect. ");
            return ;
            }
            user(Number1)
}
function user(Number1){
            if(Number1%2==0)
                console.log(`This is Even number ${Number1}`);
            else
                console.log(`This is odd number ${Number1}`);
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());