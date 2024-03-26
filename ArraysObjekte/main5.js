const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const userNum1 = Number(await prompt("Select Line: "));
    const userNum2 =  (await prompt("Select Column: "));
    if (isNaN(userNum1) ) {
                console.log("The input you entered is incorrect. ");
            return ;
            }
            const arr= [
                {
                    vorname:"Hans" ,
                    nachname:"Müller" ,
                    alter:"22" ,
                },
                {
                    vorname:"Georg" ,
                    nachname:"Huber" ,
                    alter:"37" ,
                },
                {
                    vorname:"Fritz" ,
                    nachname:"Mayr" ,
                    alter:"19" ,
                },
            ];
            
            console.log(arr[userNum1][userNum2]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());