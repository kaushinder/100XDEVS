// let counter = 0;

// const updateCounter = () => {
//   counter++;
//   console.log(counter);
// };

// setInterval(updateCounter, 1000);



// let counter = 0;

// const updateCounter = () => {
//   counter++;
//   console.log(counter);
//   setTimeout(updateCounter, 1000);
// };

// updateCounter();



// const fs = require('fs');

// function readFileAsync() {
//   fs.readFile("example.txt", "utf8", (err, data) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         console.error('Error: File not found!');    
//         } else {    
//         console.error('Error reading file:', err);
//         }
//         return;
//     }   
//     console.log('File contents:', data);
//   });
// }

// readFileAsync();



const fs = require('fs').promises;

async function writeToFileAsync(filename, content) {
  try {
    await fs.writeFile(filename, content, 'utf8');
    console.log('File has been written successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Usage
writeToFileAsync('example.txt', 'kaushinder singh raghav!');
