const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
	const user =  await prompt("Enter one letter from A to Z: ");
    switch(user){
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'g':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'w':
        case 'z':
        console.log("That's right, it's a letter. Good job, boy",user);
        break;
        default:
        console.log("This is not a letter",user," idiot. You must learn the letters");
        break;
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());