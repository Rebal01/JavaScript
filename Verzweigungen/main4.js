const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const user = await prompt("Enter a number from 1 to 7 to find out the days of the week: ");
    switch (user) {
        case '1':
            console.log(`Today is Monday ${user}`);
            break;
        case '2':
            console.log(`Today is Tuesday ${user}`);
            break;
        case '3':
            console.log(`Today is Wednesday ${user}`);
            break;
        case '4':
            console.log(`Today is Thursday ${user}`);
            break;
        case '5':
            console.log(`Today is Friday ${user}`);
            break;
        case '6':
            console.log(`Today is Saturday ${user}`);
            break;
        case '7':
            console.log(`Today is Sunday ${user}`);
            break;
        default:
            console.log(`This is not a day of the week, you idiot ${user}`);
            break;
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());