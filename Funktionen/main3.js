const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
	        const Number1 = Number(await prompt("Put your first number: "));
            const Number2 = Number(await prompt("Put your second number: "));
            const Number3 = Number(await prompt("Put your third number: "));
            const Number4 = Number(await prompt("Put your fourth number: "));
            if (isNaN(Number1) && isNaN(Number2) && isNaN(Number3) && isNaN(Number4)) {
                console.log("The input you entered is incorrect. ");
            return ;
            } 
            biggestNumbers(Number1,Number2,Number3,Number4);
}
function biggestNumbers(num1,num2,num3,num4){
            const group1 = num1 >= num2 ? num1 : num2 ;
            const group2 = num3 >= num4 ? num3 : num4 ;
            const group3 = group1 >= group2 ? group1 : group2 ;
            console.log(`This is the largest number ${group3}`);

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());