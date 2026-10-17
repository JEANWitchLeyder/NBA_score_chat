const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress',function(e){
    if(e.key == 'Enter'){
        //Add item to list
        const newItemText= this.value;
        const newItem = document.createElement('h1');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
});