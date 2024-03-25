const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
	const pass = 1234
	const userPass = await prompt("Enter your password: ");
    if(userPass == pass ){
        console.log(`The password is correct ${userPass}`);
    }
	else{
        console.log(`The password is incorrect ${userPass}`);
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());