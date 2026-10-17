const input = document.querySelector('input');
const button = document.querySelector('button');
const previewParagraph = document.querySelector('#search-preview');
const statusParagraph = document.querySelector('#search-status');

input.addEventListener('input',function(event){
    if(event.target.value === ""){
        previewParagraph.innerHTML = "Aucun nom saisi";
    }else{
        previewParagraph.innerHTML = event.target.value;
    }
});

button.addEventListener('click',function(event){
    
    if(input.value !== ""){
        statusParagraph.innerHTML = "Recherche demandée pour: " + input.value;
    }else{
        statusParagraph.innerHTML = "Saisissez un nom";
        statusParagraph.classList.add('error');
    }
});