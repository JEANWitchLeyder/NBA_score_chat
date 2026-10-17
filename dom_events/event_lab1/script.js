const btn = document.querySelector('#tasks-button');
const btn2 = document.getElementById('add-documents');
/*
function handleTasksClick(){
    console.log("Consultation des tâches demandée");
}
btn.addEventListener('click',handleTasksClick);

btn2.addEventListener('click',()=>{
 console.log('Consultation des documents demandée');
});
*/
function logTaskRequest(){
    console.log("Consultation demandée");
}
function logActivity(){
    console.log("Activité enregistrée");
}
btn.addEventListener("click",logTaskRequest);
btn.addEventListener("click",logActivity);

function logDocumentActivity(){
    console.log("Activité documents enregistrée");
}
btn2.addEventListener('click',logDocumentActivity);
