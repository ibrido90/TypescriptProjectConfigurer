// typings install dt~node --global --save
var exec = require('child_process').exec;
var fs = require("fs");
var path = "..";
var vscode = '.vscode';
var task_watch = "{\n    // See https://go.microsoft.com/fwlink/?LinkId=733558\n    // for the documentation about the tasks.json format\n    \"version\": \"0.1.0\",\n    \"command\": \"tsc\",\n    \"isShellCommand\": true,\n    \"args\": [\"-w\", \"-p\", \".\"],\n    \"showOutput\": \"silent\",\n    \"isWatching\": true,\n    \"problemMatcher\": \"$tsc-watch\"\n}";
var common_config = "{\n    \"compilerOptions\": {\n        \"target\": \"es6\",\n        \"module\": \"commonjs\",\n        \"sourceMap\": false\n    }\n}";
console.log("Run this only after installing <typescript> and <typings>");
process.chdir(path);
exec("typings install dt~node --global --save", function () { });
fs.writeFile('tsconfig.json', common_config, function (err) {
    if (err)
        return console.log(err);
    if (!fs.existsSync(vscode)) {
        fs.mkdirSync(vscode);
    }
    process.chdir(vscode);
    fs.writeFileSync('tasks.json', task_watch);
    console.log('created config files');
    console.log("now just copy this script(index.js) in a cold, dry and COOOL place for future usage.\n\n\t Happy Coding :)");
});
fs.writeFileSync('openMe.cmd', 'cls & code .');
