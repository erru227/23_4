let output = document.getElementById("output");
let text_in = document.getElementById("name");

async function new_directory(){
    //We cannot use fs and Node.js in any JS file that runs on the local device
    //But we can send requests to the server
    const name = document.getElementById("name").value;
    const response = await fetch("/mkdir/" + name);
    output.textContent = await response.text();
}

async function new_file(){
    const name = document.getElementById("name").value;
    const response = await fetch("/mkfile/" + name);
    output.textContent = await response.text();
}

async function show_files() {
    const response = await fetch("/files");
    output.innerText = await response.text();
}
