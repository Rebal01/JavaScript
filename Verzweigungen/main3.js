const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
	const user = await prompt("Enter a number from 1 to 7 to find out the days of the week: ");
	if(user == 1){
        console.log(`Today is Monday ${user}`);
    }
    else if(user == 2){
        console.log(`Today is Tuesday ${user}`);
    }
    else if(user == 3){
        console.log(`Today is Wednesday ${user}`);
    }
    else if(user == 4){
        console.log(`Today is Thursday ${user}`);
    }
    else if(user == 5){
        console.log(`Today is Friday ${user}`);
    }
    else if(user == 6){
        console.log(`Today is Saturday ${user}`);
    }
    else if(user == 7){
        console.log(`Today is Sunday ${user}`);
    }
    else{
        console.log(`This is not a day of the week, you idiot ${user}`);
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());