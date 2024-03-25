const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
	const Temperature = await prompt("How is your weather today?: ");
    if(Temperature > 25 ){
        console.log("The weather is Hot",Temperature);
    }
	else if(Temperature < 10){
        console.log("The weather is cold",Temperature);
    }else{
        console.log("The weather is warm",Temperature);
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());