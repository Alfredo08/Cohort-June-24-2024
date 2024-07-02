const fs = require('fs');

console.log("Program begins here!");

fs.readFile('./message.txt', {encoding: 'UTF-8'}, (error, content) => {
    if(error){
        console.log("Please check your file URL, it doesn't seem to exist!");
    }
    let newMessage = "Copying the content to a new file! \n" + content;
    fs.writeFile('./generatedFile.txt', newMessage, {encoding: 'UTF-8'}, (errorWrite) => {
        if(errorWrite){
            console.log("Something went wrong while writing into the 'generatedFile.txt'.");
        }
        console.log("Successfully updated/wrote into the new file.");
    });
});

console.log("Program ends here?");