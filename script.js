const fs = require("fs");
let output = document.getElementById("output");
let text_in = document.getElementById("name");

//TODO make working!
function new_directory(){
    const path = "./"+text_in.value;
    fs.access(path, (error) => {
    if (error) {
        fs.mkdir(path, (error) => {
        if (error) {
            output.textContent = error;
        } else{
            output.textContent = "Folder "+path+" made";
        }
        });
    } else{
        output.textContent = "Folder "+path+" already exists";
    }
    });
}

function new_file(){
    
}
