const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const arr = [
        ["Hans","Müller","22"],
        ["Georg","Huber","37"],
        ["Fritz","Mayr","19"],
    ]
    const userNum1 = Number(await prompt("Select Line: "));
    const userNum2 =  (await prompt("Select Column: "));
    if (isNaN(userNum1) ) {
                console.log("The input you entered is incorrect. ");
            return ;
            }
            const columnArr ={
                vorname: 0,
                nachname: 1,
                alter: 2,
            }
            
            console.log(arr[userNum1][columnArr[userNum2]]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());