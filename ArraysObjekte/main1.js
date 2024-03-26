const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const arr = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	const user = Number(await prompt("Enter a number from 1 to 7 to find out the days of the week: "));
            if (isNaN(user) ) {
                console.log("The input you entered is incorrect. ");
            return ;
            }
            else if (user <=0 || user>7) {
                console.log(`This is not a day of the week, you idiot ${user}`);
                return ;
            }
            console.log(arr[user]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());