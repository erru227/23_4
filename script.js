const fs = require("fs");

//TODO make working!
function new_directory(folder_name){
    const path = "./"+folder_name;
    fs.access(path, (error) => {
    if (error) {
        fs.mkdir(path, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("New Directory created successfully !!");
        }
        });
    }
    });
}

function new_file(){
    
}