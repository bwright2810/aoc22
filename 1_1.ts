import fs from 'fs';

try {
    const data = fs.readFileSync('./1_1.txt', 'utf8');
    const elfLines = data.split("\r\n\r\n");

    const elfCals = elfLines.map(l => l.split("\n").map(l2 => parseInt(l2)));

    const elfTotals= elfCals.map(c => c.reduce((tot, num) => num + tot, 0));

    const max = Math.max(...elfTotals);

    console.log(max);
} catch (err) {
    console.error(err);
}