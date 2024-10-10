// Add the File 
const { mkdir } = require('fs');
mkdir('./Node-JS/Folder',{ recursive: true }, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Folder created successfully");
    }
});

// Deleted the files
// const {rm}=require('fs')
// rm('./Node-JS/Folder', {recursive: true, force: true}, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(" Deleted the folder");
        
//     }
// })

// import { join } from 'node:path';



