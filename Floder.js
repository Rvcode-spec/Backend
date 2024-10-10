import { mkdir } from 'node:fs';

mkdir('C:\Users\LENOVO\OneDrive\Desktop\Node.js\Modules-2\Day-1\Node.js', Floder, function(err){
    if(err){
        console.log(err);
        
    }else{
        console.log("add the Floder");
        
    }
})