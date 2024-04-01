const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
  let condition2 = false;
  let condition3 = false;
  const guess = 55;
  let player1Cont=0 , player2Cont=0;
  do {
    condition2 = false;
    const player1 = Number(await prompt("Enter a number between 1 and 100: "));
    if (!Number.isInteger(player1) || player1 < 1 || player1 > 100) {
        console.log("Invalid input. Please enter a number between 1 and 100.");
        continue;
    }
    
    else{
        if (player1 > guess) {
            console.log(`Your guess is too high.`);
            player1Cont++;
          } else if (player1 < guess) {
            console.log(`Your guess is too low.`);
            player1Cont++;
          } else {
            console.log(`Player1 win! The number is ${guess}.`);
            console.log(`Number of attempts ${player1Cont}`);
            condition2 = true;
            condition3 = true;
          }
        }
        const go = await prompt(` Go `);
        
    while (!condition2) {
        console.clear();
        console.log(`Player1 entered: ${player1}`);
        const player2 = Number (await prompt("Enter a number between 1 and 100: "));
    if (!Number.isInteger(player2) || player2 < 1 || player2 > 100) {
        console.log("Invalid input. Please enter a number between 1 and 100.");
        continue;
      
    } else {
        if (player2 > guess) {
            console.log(`Your guess is too high.`);
            player2Cont++;
            condition2 = true;
          } else if (player2 < guess) {
            console.log(`Your guess is too low.`);
            player2Cont++;
            condition2 = true;
          } else {
            console.log(`player2 win! The number is ${guess}.`);
            console.log(`Number of attempts ${player2Cont} `);
            condition2 = true;
            condition3 = true;
          }
    }
    const go = await prompt(` Go `);
    console.clear();
    console.log(`Player2 entered: ${player2}`);
    }

  } while (!condition3);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());