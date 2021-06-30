var profileNameElement = document.querySelector("#profileName");
var totalRequestElement = document.querySelector("#totalRequestNumber");
var totalConnectionElement = document.querySelector("#totalConnectionNumber");

requestNumber = 2
connectionNumber = 500

function editName(){
    profileNameElement.innerText = "Darth Sidious"
}

function removeRequest(element){
    element.remove();
    requestNumber--
    totalRequestElement.innerText = requestNumber
}

function addConnection(){
    connectionNumber++
    totalConnectionElement.innerText = connectionNumber
}