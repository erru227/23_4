let output = document.getElementById("output");
let text_in = document.getElementById("name");

async function new_directory(){
    //We cannot use fs and Node.js in any JS file that runs on the local device
    //But we can send requests to the server
    const name = document.getElementById("name").value;
    const response = await fetch("/mkdir/" + name);
    output.textContent = await response.text();
}

function new_file(){
    const name = document.getElementById("name").value;
    const response = await fetch("/mkfldr/" + name);
    output.textContent = await response.text();
}
