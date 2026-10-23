let output = document.getElementById("output");
let text_in = document.getElementById("name");

async function new_directory(){
    //We cannot use fs and Node.js in any JS file that runs on the local device
    const response = await fetch("/mkdir?name=" + encodeURIComponent(text_in.value));
    output.textContent = await response.text();
    /*
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
    } else{
        output.textContent = "Folder "+path+" already exists";
    }
    });
    */
}

function new_file(){
    
}
