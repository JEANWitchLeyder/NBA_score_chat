// pageTitle = document.getElementById("page-title");
// console.log(pageTitle);

// paragraph = document.getElementsByTagName("p");

// clients = document.querySelectorAll(".client");

// specialClient = document.querySelector(".client.selected");

// missing = document.querySelector("#missing");

// if(missing == null){
//  console.log("élément introuvable");
//}

const clientContainer = document.querySelector("#clients");

const clientsElements = clientContainer.querySelectorAll(".client");

clientsElements.forEach((clientElement)=>{
    console.log(clientElement);
});