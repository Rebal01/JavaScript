const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
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
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
        // const { vorname, nachname, alter } = arr[i];
        // console.log(`${vorname} ${nachname} ist ${alter} Jahre alt.`);
    
}
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());