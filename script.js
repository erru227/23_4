const fs = require("fs");
let output = document.getElementById("output");
let text_in = document.getElementById("name");

function new_directory(){
    const path = "./"+text_in.value;
    fs.access(path, (error) => {
    if (error) {
        fs.mkdir(path, (error) => {
        if (error) {
            console.log(error);
        } else{
            output.textContent = "Folder "+path+" made";
        }
        });
    }
    });
}

function new_file(){
    
}
