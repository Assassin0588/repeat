function repeatTask () {
    let command = document.getElementById("command").value;
    if (command === "" ) {
        alert("Please enter a command");
        return;
    }
    else{
        for (let i = 1; i <=100; i++) {
        document.getElementById("body").innerHTML += `<p>${i}. ${command} </p>`
        console.log(`${i}. ${command}`)
        }
    }
}

function clearTask () {
    document.getElementById("body").innerHTML = ""
}
