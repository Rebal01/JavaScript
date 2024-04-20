const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
const maze = [
    ["#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", "#", "#", "#", "#", "#", "#"]
];
const player = { x: 2, y: 2 };
const target = { x: 5, y: 5 };
const hole = { x: 3, y: 3 };
const boxes = [
    { x: 1, y: 3 },
    { x: 4, y: 4 },
    { x: 3, y: 5 },
];
function drawMaze() {
    let mazeCopy = maze.map(row => row.slice());
    mazeCopy[player.y][player.x] = 'X';
    mazeCopy[target.y][target.x] = 'E';
    mazeCopy[hole.y][hole.x] = 'O';
    for (let i = 0; i < boxes.length; i++) {
        mazeCopy[boxes[i].y][boxes[i].x] = 'B';
    }
    for (let i = 0; i < mazeCopy.length; i++) {
        console.log(mazeCopy[i].join("|"));
    }
}
function Move(x, y) {
    if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
        return false;
    }
    return maze[y][x] !== '#' && maze[y][x] !== 'B';
};
function isBoxAt(x, y) {
    return boxes.some(box => box.x === x && box.y === y);
}
function playerInp(direction) {
    let newX = player.x;
    let newY = player.y;
    switch (direction) {
        case 'w':
            newY--;
            break;
        case 's':
            newY++;
            break;
        case 'a':
            newX--;
            break;
        case 'd':
            newX++;
            break;
        case 'x':
            console.log(`GAME END`);
            process.exit(0);
        default:
            console.log(`Invalid input.Please Enter a direction (w, s, a, or d): `);
            return;
    }
    if (Move(newX, newY)) {
        if (isBoxAt(newX, newY)) {
            let nextX = newX + (newX - player.x);
            let nextY = newY + (newY - player.y);
            if (Move(nextX, nextY) && !isBoxAt(nextX, nextY)) {
                const boxIndex = boxes.findIndex(box => box.x === newX && box.y === newY);
                boxes[boxIndex].x = nextX;
                boxes[boxIndex].y = nextY;
            } else {
                console.log('Invalid move. There is a box blocking the way.');
                return;
            }
        }
        player.x = newX;
        player.y = newY;
    }

    if (player.x === target.x && player.y === target.y) {
        console.log(`Congratulations, you reached the target!`);
        process.exit(0);
    }
    if (player.x === hole.x && player.y === hole.y) {
        console.log(`You entered the hole`);
        process.exit(0);
    }

    else {
        console.log(`Invalid move. Please try again. `)
    }
    drawMaze();

}
async function start() {
    drawMaze();
    while (true) {
        const direction = await prompt(`Enter a direction (w, s, a, or d), Enter x to exit:  `);
        playerInp(direction);
    }
}
start().catch((err) => { console.error(err); }).finally(() => rl.close());