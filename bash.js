// console.log(process);
// console.log(Object.keys(process));
var fs = require('fs');
var command = require('./command.js');

process.stdout.write('prompt > ');
// command.newPrompt();
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim().split(' ');
  // console.log(cmd);
  command[cmd[0]](cmd.slice(1));
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
  // setTimeout(command.newPrompt, 1);
});
