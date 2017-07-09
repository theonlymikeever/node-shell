var fs = require('fs');

module.exports = {
  cat: function(args) {
    args.forEach(function(file) {
      fs.readFile(file, function(err, data) {
        if (err) throw err;
        process.stdout.write(data);
      });
    });
    newPrompt();
  },
  date: function() {
    var dateTime = new Date();
    //console.log(dateTime);
    process.stdout.write(dateTime.toString());
    newPrompt();
  },
  echo: function(args) {
    process.stdout.write(args.join(' '));
    newPrompt();
  },
  head: function(args) {
    var file = args[0];
    var numLines = args[1] || 5;
    fs.readFile(file, function(err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      for (var i = 0; i < numLines; i++) {
        process.stdout.write(lines[i] + '\n');
      }
    });
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      });
    });
    newPrompt();
  },
  pwd: function() {
    process.stdout.write(process.env.PWD);
    newPrompt();
  },
  tail: function(args) {
    var file = args[0];
    var numLines = args[1] || 5;
    fs.readFile(file, function(err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      for (var i = lines.length - numLines; i < lines.length; i++) {
        process.stdout.write(lines[i] + '\n');
      }
    });
  },
  wc: function(args) {
    var file = args[0];
    fs.readFile(file, function(err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      process.stdout.write(lines.length.toString());
    });
  }
};

function newPrompt() {
    process.stdout.write('\nprompt > ');
}
