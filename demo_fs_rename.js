var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
  if (err) throw err;
    console.log('File Renamed!');
    });
