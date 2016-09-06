// typings install dt~node --global --save
var exec = require('child_process').exec;
var fs = require("fs");
const path ="..";
const vscode = '.vscode';

const task_watch = `{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-w", "-p", "."],
    "showOutput": "silent",
    "isWatching": true,
    "problemMatcher": "$tsc-watch"
}`;
const common_config = `{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": false
    }
}`;

console.log("Run this only after installing <typescript> and <typings>");

process.chdir(path);
exec("typings install dt~node --global --save",function(){});

fs.writeFile('tsconfig.json', common_config, function (err) {
    if (err) return console.log(err);
    if(!fs.existsSync(vscode)){
        fs.mkdirSync(vscode);
    }
    process.chdir(vscode);
    fs.writeFileSync('tasks.json',task_watch);
    console.log('created config files');
    console.log("now just copy this script(index.js) in a cold, dry and COOOL place for future usage.\n\n\t Happy Coding :)");
});
fs.writeFileSync('openMe.cmd','cls & code .');

