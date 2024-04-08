const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let user = (await prompt("Enter one letter from a to z: ")).toLowerCase();
    switch (user) {
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'g':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'w':
        case 'z':
            console.log(`That's right, it's a Consonant letter. Good job, boy, ${user}`);
            break;
        case 'a':
        case 'e':
        case 'u':
        case 'o':
        case 'i':
            console.log(`That's right, It's a vowel letter. Good job, boy, ${user}`);
            break;

        default:
            console.log(`This is not a letter, ${user},. You must learn the letters`);
            break;
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());