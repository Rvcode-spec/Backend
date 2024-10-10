const filesystem= require('fs');
// // Write 
// filesystem.writeFile('text.text', "Js file Add the Node.js", function(error){
//     if (error) {
//         console.log(error);
        
//     }else{
//         console.log("Add the data");
        
//     }
// })


// filesystem.readFile('text.text', 'utf8', function(error, data){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("Add the data", data);
        
//     }
    
// })

// Add the file
// filesystem.appendFile('text.text', 'Hello Dice ', function(error, data){
//         if(error){
//             console.log("Append the file");
            
//         }else{
//             console.log("Data Add",data );
            
//         }
    
// } )

// Deleted the file 

filesystem.unlink('text.text', function(error){

    if(error){
        console.log("Error the files");
        
    }else{
        console.log("File Deleted ");
        
    }
})

// Add the files 

filesystem.writeFile("text.text", "Add the file in dice", function(error){

    if(error){
        console.log(error);
        
    }else{
        console.log("Add file");
    }
})



