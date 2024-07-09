const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [nametitle, github] = profileDataArgs;

console.log(nametitle, github);

const pageHTML = generatePage(nametitle, github);


 // the first argument is the file being written, the second one is the data assigned to the file and the 3rd is a callback 
 fs.writeFile('./index.html', pageHTML,err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });




