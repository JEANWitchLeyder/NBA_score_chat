/*
const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerText = ' a lot';

console.log(myParagraph.innerHTML);

const registerForm = document.querySelector('form');
const formTitle = document.getElementById('form-title');
const allInputs = document.querySelectorAll('input');
const googleLink = document.querySelector('.google-link');
const selectContainer = document.querySelector('select');
const option = selectContainer.querySelectorAll('option');

    // console.log(formTitle.getAtrribute());
for(input of allInputs){
    console.log(input.getAttribute('class'));
}
console.log(allInputs[0].value);
*/

console.log("script.js loaded");

const documentContainer = document.querySelector("#document-container");
console.log("Container:", documentContainer);


const dashboard = document.querySelector('#dashboard');
const dashboardTitle = document.querySelector('#dashboard-title');
const clientContainer = document.querySelector('#client-container')
const clientTitle = document.querySelector('#client-title');
const clientList = document.querySelector('#client-list');
const allLis = document.querySelectorAll('.client');
const dashboardFooter = document.querySelector('#dashboard-footer');
const liStyle = allLis.forEach((li,i)=>{
    li.style.color = 'red';
})

const dashboardStyle = getComputedStyle(dashboard);
const allLisStyle = getComputedStyle(allLis);
console(dashboard.parentElement);

dashboardTitle.style.color = 'orange';

const newLink = document.createElement('a');
newLink.innerHTML = 'leyder.com';
newLink.href = 'link';

dashboard.appendChild(newLink);



const newDiv = document.createElement('div');
newDiv.className = 'container';
newDiv.id = 'recent-transaction';

const newH1 = document.createElement('h1');
newH1.innerText = 'Recent Transactions';
newDiv.appendChild(newH1);

documentContainer.parentElement.insertBefore(newDiv,documentContainer);

