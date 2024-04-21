import { readFile, writeFile } from 'node:fs';
import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
const productData = [];
async function start() {
    const menu = await prompt('Enter "a" to add data, "f" to find data, or "x" to save and exit:');
    typeof menu === 'string'
    if (menu == 'a') { return await addData(); }
    if (menu == 'f') { return await findData(); }
    if (menu == 'x') { return await saveAndExit(); }
    else {
        console.log('Invalid input. Please enter "a", "f", or "x".');
        await start();
    }
}
async function addData() {
    const number = Number(await prompt(`Enter a number: `));
    const name = await prompt(`Enter a name: `);
    const price = Number(await prompt(`Enter a price: `));
    if (isNaN(Number(number)) || isNaN(Number(price)) || typeof name !== "string") {
        console.log('Invalid input. Please enter a number, a name, and a price.');
        await addData();
    }
    const product = { number, name, price };
    productData.push(product);
    console.log('successfully added');
    await start();
}
async function findData() {
    const productNumber = Number(await prompt(`Enter product number: `));
    if (isNaN(productNumber)) {
        console.log('Invalid input. Enter product number.');
        return await findData();
    }
    const findProduct = productData.find(product => product.number === productNumber);
    if (findProduct) {
        console.log(`Found Product `, findProduct);
    }
    else {
        console.log('Product not found');
    }
    await start();
}
function saveAndExit() {
    const dataToWrite = JSON.stringify(jsonData, null, 2);
    const jsonFile = 'data.json';
    writeFile(jsonFile, dataToWrite, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file');
        } else {
            console.log('File saved successfully!');
        }
    });
}

start().catch((err) => { console.error(err); }).finally(() => rl.close());