const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const nametitle = profileDataArgs[0];
const github = profileDataArgs[1];


// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//       }
//       console.log('================');


//       profileDataArr.forEach(profileItem => console.log(profileItem));
  
//   };
  
//   printProfileData(profileDataArgs);

const generatePage = (userName, githubName) => {

return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${nametitle}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
`;
};
// the first argument is the file being written, the second one is the data assigned to the file and the 3rd is a callback 
fs.writeFile('index.html', generatePage(nametitle, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });