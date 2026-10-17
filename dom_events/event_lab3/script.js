/*
const clientNameInput = document.querySelector('#client-name');
clientNameInput.addEventListener('input',function(event){
 console.log('Pendant la saisie:',event.currentTarget.value);
});
clientNameInput.addEventListener('change',function(event){
  console.log('Modification validée :', event.currentTarget.value);
});
const nameInput = document.querySelector('#employee-name');
const livePreview = document.querySelector('#live-preview');
const committedPreview = document.querySelector('#committed-preview');

nameInput.addEventListener('input',function(event){
  livePreview.textContent = "Saisie en cours : " + event.target.value;
});
nameInput.addEventListener('change',function(event){
    committedPreview.textContent = "Dernière modification : " + event.target.value;
}); 
const departmentSelect = document.querySelector('#department');
const departmentStatus = document.querySelector('#department-status');

departmentSelect.addEventListener('change', function(event) {
    departmentStatus.textContent =
        'Filtre : ' + event.currentTarget.value;
});
const completedCheckbox = document.querySelector('#show-completed');

completedCheckbox.addEventListener('change', function(event) {
    console.log(event.currentTarget.checked);
});
const clientNameInput = document.querySelector('#client-name');
const nameHelp = document.querySelector('#name-help');

clientNameInput.addEventListener('focus', function() {
    nameHelp.textContent = 'Saisissez le prénom et le nom.';
});

clientNameInput.addEventListener('blur', function() {
    nameHelp.textContent = '';
});
const documentTitle = document.querySelector('#document-title');
const documentHelp = document.querySelector('#documentelp');

documentTitle.addEventListener('focus',function(event){
    documentHelp.textContent = "Pièce d'identité";
});
documentTitle.addEventListener('blur',function(event){
   if(event.target.value === ""){
    documentHelp.textContent = "Le titre est encore vide";
   }else{
    documentHelp.textContent = "Titre renseigné";
   }
});
const clientForm = document.querySelector('#client-form');
const clientNameInput = document.querySelector('#client-name');
const formMessage = document.querySelector('#form-message');

clientForm.addEventListener('submit',function(event){
   event.preventDefault();
   const clientName = clientNameInput.value.trim();
   if(clientName === ''){
    formMessage.textContent = 'Saisissez un nom.';
   }else{
    formMessage.textContent = 'Nom renseigné: ' + clientName;
   }
});
*/

const formData = document.querySelector('form');
const documentTitle= document.querySelector('#document-title');
const documentCategory = document.querySelector("#document-category");
const documentMessage = document.querySelector('#document-message');
formData.addEventListener('submit',function(event){
  event.preventDefault();
  const title = documentTitle.value.trim();
  if(title === ''){
    documentMessage.innerText = "Saisissez un titre";
  }else if(documentCategory.value === ""){
    documentMessage.innerText = "Choisissez une catégorie";
  }else{
    documentMessage.innerText = "Document prêt à vérifier";
  }
});






