const task = process.argv[2];
const resultList = [];

resultList.push(task);
console.log(`Tarefa criada com sucesso: ${resultList}`);

fs = require('fs');
fs.writeFile('./tasks.txt', `${resultList}\n`,{enconding:'utf-8',flag: 'a'}, function (err) {
    if (err) throw err;
    console.log(`${resultList} gravado no arquivo tasks.txt`);
});

fs = require('fs');
fs.readFile('./tasks.txt', 'utf-8', function (err, data) {
    if(err) throw err;
    console.log(data);
});