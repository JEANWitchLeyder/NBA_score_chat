/*
const documentCount = 5;
const statusA = "à vérifier";

console.log(documentCount >= 5); // true
console.log(documentCount === "5"); //false
console.log(statusA !== "Terminé");//true
console.log(documentCount < 5); //false

const documentCount = 3;

if(documentCount > 0){
    console.log("Documents disponibles");
}else{
    console.log("Aucun document");
}

const hasIdentityDocument = true;
const hasPhoto = false;

if(hasIdentityDocument && !hasPhoto){
    console.log("Dossier à vérifier");
}else{
    console.log("Pièce manquante");
}
    const hasIdentityDocument = true;
const hasPhoto = false;

if(hasIdentityDocument && !hasPhoto){
    console.log("Pièce manquante");
}else if(hasIdentityDocument && hasPhoto){
    console.log("Dossier prêt à vérifier");
}else{
    console.log("Pièce manquante");
}
    //ternary Operator
const hasPhoto = false;

const message = hasPhoto ? "Photo disponible" : "Photo manquante";

console.log(message);
for(let index = 1; index <= 100; index++){
    console.log(index);
}
    const documents = ["Identité", "Contrat","Photo", "Acte de naissance", "Extrait des archives"];

for(let index = 0; index < documents.length; index++){
    console.log(documents[index]);
}

let remainingTasks = 3;

while(remainingTasks > 0){
    console.log("Tâches restantes : " + remainingTasks);
    remainingTasks--;
}
    const departments = ["Accueil", "Archives", "Finance", "Support"];

for(department of departments){
    console.log(department);
}
    const clients = [
    { name: "Clara Joseph", city: "Jacmel" },
    { name: "Marc Antoine", city: "Hinche" }
  ];
  
  for (const client of clients) {
    console.log(client.name);
  }

 for(const client of clients){
    console.log(client.name);
 }

 const clients = [
    { name: "Clara Joseph", city: "Jacmel" },
    { name: "Marc Antoine", city: "Hinche" }
  ];
  
  for (const client of clients) {
    console.log(client.name);
  }

 for(const client of clients){
    console.log(client.name);
 }
    const employee = {
    name: "Nadia Pierre",
    department: "Accueil",
    documentsChecked: 5
  };
  
  for (const propertyName in employee) {
    console.log(propertyName);
  }
    const document = {
    title: "Pièce d’identité",
    status: "À vérifier",
    pages: 2
  };

  for(const propertyName in document){
    console.log(propertyName + " "+ document[propertyName]);
  }
    const numbers = [1,2,3,4];

for(const number of numbers){
    if(number === 1){
        continue;
    }
    console.log(number);
}
    const departments = ["Accueil", "Archives", "Finance", "Support"];

for (const department of departments) {
  if (department === "Archives") {
    break;
  }

  console.log(department);
}
  const tasks = [
    { title: "Vérifier le dossier", isCompleted: false, isBlocked: false },
    { title: "Classer les documents", isCompleted: true, isBlocked: false },
    { title: "Compléter la fiche", isCompleted: false, isBlocked: true },
    { title: "Préparer le rapport", isCompleted: false, isBlocked: false }
  ];

  for(const task of tasks){
    if(task.isBloked){
        break;
    }
    if(task.isCompleted){
        continue;
    }
    console.log(task.title);
  }
    const departments = ["Accueil", "Archives", "Finance"];

departments.forEach(function(department,index){
  console.log(index+":"+department);
});
function displayGreeting(){
    console.log("Bonjour Nadia");
}
displayGreeting();
function greetEmployee(employeeName){
    console.log("Bonjour " + employeeName);
}
greetEmployee("Nadia");
greetEmployee("Marc");

function displayTask(title,isCompleted){
  if(isCompleted){
    console.log("Terminée : " + title);
  }else{
    console.log("à faire : " + title);
  }
}
displayTask("Classer les documents",true);
displayTask("Vérifier le dossier", false);

function getTaskMessage(title,isCompleted){
    if(isCompleted){
        return "Terminée : " + title;
    }
    return "à faire : " + title;
}

const message = getTaskMessagea("Classer les documents",true);
console.log(message);

function getRemainingTasks(totalTasks, completedTasks){
    return totalTasks - completedTasks;
}

const remaining = getRemainingTasks(8,5);
console.log(remaining);
function getRemainingTasks(totalTasks, completedTasks) {
  const remainingCount = totalTasks - completedTasks;
  return remainingCount;
}

const result = getRemainingTasks(8, 5);

console.log(result);         // 3
console.log(remainingCount); // ReferenceError

const employeeName = "Nadia";

function displayEmployee() {
  const department = "Archives";

  console.log(employeeName);
  console.log(department);
}

displayEmployee();
console.log(department);//ReferenceError

function displayGreeting(){
    console.log("Bonjour Nadia");
}
const action = displayGreeting;
action();
function displayTask(){
    console.log("Vérifier le dossier");
}
function runAction(action){
    action();
}
runAction(displayTask);

function displayDocuments(){
    console.log("Liste des documents");
}
function runAction(action){
    console.log("Début");
    action();
    console.log("fin");
}
runAction(displayDocuments);
//Début
//Liste des documents 
//fin
const getRemainingTasks = (totalTasks,completedTasks) => totalTasks - completedTasks;

getRemainingTasks(10,2);
//arrow functions

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

sum(displayConsole,1,2);

function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("BOO HOO I'M SO SAD");
}

function rage(){
    console.log("I HATE EVERYTHING!");
}
function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}
repeatNTimes(rage,13);

function pickOne(f1,f2){
 let rand = Math.random();
 if(rand < 0.5){
    f1();
 }else{
    f2();
 }
}
 function multiplyBy(num){
    return function(x){
        return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);
isChild(5); //true
isChild(67); // false

function makeBetweenFunc(x,y){
    return function(num){
        return num >= x && num <= y;
    }
}
makeBetweenFunc(0,18);

const isChild = makeBetweenFunc(0,18);
const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num){
    console.log(num);
});

function printTriple(n){
    console.log(n*3);
}
numbers.forEach(printTriple);
printTriple(20)
printTriple(21)
printTriple(22)

const texts = ['rofl','lol','omg','ttyl'];

const caps = texts.map(function(t){
    return t.toUpperCase();
});
console.log(caps);

const numbers = [20,21,22,23,24,25,26,27];


const doubles = numbers.map(function(num){
    return num * 2;
});

console.log(doubles);

const numbers = [20,21,22,23,24,25,26,27];

const numDetail = numbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0
    }
});
const square = (x)=>{
    return x*x;
}
const isEven = (num) => {
    return num % 2 === 0;
}

const multiply =(x,y)=>{
    return x*y;
}
const greet = ()=>{
    console.log("Hi");
}

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function(n){
    return n*2;
})

const doubles2 = nums.map(n =>{
    return n*2;
})

const doubles3 = nums.map(n=>n*2);

const parityList = nums.map(function(n){
    if(n % 2 === 0) return 'even';
    return 'odd';
});
const parityList = nums.map((n)=>n%2===0 ? 'even':'odd');
const movie = movies.find(movie=>{
    movie.includes('Mrs');
});

const nums = [34,35,67,54,109,32,9];

const odds = nums.filter(n => n % 2===1);
const even = nums.filter(n => n%2 === 0);
const bigNums = nums.filter(n=>n>50);

const movies = [
   "The Fantastic Mr. Fox",
   "Mr. and Mrs. smith",
   "Mrs Doubtfire",
   "Mr Deeds"
];


const books = [
    {
      title: "The Last Lighthouse",
      authors: ["Maya Laurent"],
      rating: 4.5,
      genres: ["Mystery", "Adventure"]
    },
    {
      title: "Beyond the Mountains",
      authors: ["Jean Moreau", "Clara Pierre"],
      rating: 4.2,
      genres: ["Adventure", "Fiction"]
    },
    {
      title: "Learning to Begin",
      authors: ["Sofia Bernard"],
      rating: 3.8,
      genres: ["Personal Development"]
    },
    {
      title: "The Silent City",
      authors: ["Lucas Marin"],
      rating: 4.7,
      genres: ["Science Fiction", "Mystery"]
    },
    {
      title: "Letters from Jacmel",
      authors: ["Clara Pierre"],
      rating: 4.3,
      genres: ["Romance", "Fiction"]
    },
    {
      title: "Small Steps in JavaScript",
      authors: ["Nadia Joseph", "Marc Antoine"],
      rating: 4.8,
      genres: ["Technology", "Education"]
    },
    {
      title: "The Forgotten Garden",
      authors: ["Maya Laurent"],
      rating: 3.5,
      genres: ["Fantasy", "Adventure"]
    },
    {
      title: "A Taste of Home",
      authors: ["Élise Paul"],
      rating: 4.1,
      genres: ["Cooking", "Culture"]
    },
    {
      title: "Under the Same Sky",
      authors: ["Sofia Bernard", "Lucas Marin"],
      rating: 3.9,
      genres: ["Romance", "Science Fiction"]
    },
    {
      title: "Understanding Our Oceans",
      authors: ["David Noel"],
      rating: 4.6,
      genres: ["Science", "Education"]
    }
  ];

  const goodBooks = books.filter(b=>b.rating > 4.3);
  console.log(goodBooks);
  
  const fantasyBooks = books.filter(book=>{
     book.genres.includes('fantasy');
  });
 
  const query = 'The';
  const results = books.filter(book=>{
    const title = boooks.title.toLowerCse();
    return title.includes(query.toLowerCase);
});
const prices = [19.99, 8.50, 35.00, 12.75, 49.99, 5.25, 24.50, 15.00, 8.50, 99.95];

const ascSort = prices.sort((a,b)=>a-b);
const descSort = prices.sort((a,b)=>b-a);

const nums = [3,4,5,6,7];
const product = nums.reduce((total , currentVal)=>{
    return total * currentVal;
});
*/
const grades = [87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max,currentVal)=>{
    if(currentVal > max) return currentVal;
    return max;
});

const maxGrade2 = grades.reduce((max,currentVal)=>{
    return Math.max(max,currVal);
});

const minGrade = grades.reduce((min,currentVal)=>{
    return Math.min(min,currVal);
});

const sum = [10,20,30,40,50].reduce((sum , currVal)=>{
    return sum + currVal;
}, 1000);

const votes = ["y", "n", "y", "y", "n", "y", "n", "n", "y", "y"];

// const results = votes.reduce((tally,val)=>{
//     if(tally[val]){
//         tally[val]++;
//     }else{
//         tally[val] = 1;
//     }
//     return tally;      
// },{})

const books = [
    {
      title: "The Last Lighthouse",
      authors: ["Maya Laurent"],
      rating: 4.5,
      genres: ["Mystery", "Adventure"]
    },
    {
      title: "Beyond the Mountains",
      authors: ["Jean Moreau", "Clara Pierre"],
      rating: 4.2,
      genres: ["Adventure", "Fiction"]
    },
    {
      title: "Learning to Begin",
      authors: ["Sofia Bernard"],
      rating: 3.8,
      genres: ["Personal Development"]
    },
    {
      title: "The Silent City",
      authors: ["Lucas Marin"],
      rating: 4.7,
      genres: ["Science Fiction", "Mystery"]
    },
    {
      title: "Letters from Jacmel",
      authors: ["Clara Pierre"],
      rating: 4.3,
      genres: ["Romance", "Fiction"]
    },
    {
      title: "Small Steps in JavaScript",
      authors: ["Nadia Joseph", "Marc Antoine"],
      rating: 4.8,
      genres: ["Technology", "Education"]
    },
    {
      title: "The Forgotten Garden",
      authors: ["Maya Laurent"],
      rating: 3.5,
      genres: ["Fantasy", "Adventure"]
    },
    {
      title: "A Taste of Home",
      authors: ["Élise Paul"],
      rating: 4.1,
      genres: ["Cooking", "Culture"]
    },
    {
      title: "Under the Same Sky",
      authors: ["Sofia Bernard", "Lucas Marin"],
      rating: 3.9,
      genres: ["Romance", "Science Fiction"]
    },
    {
      title: "Understanding Our Oceans",
      authors: ["David Noel"],
      rating: 4.6,
      genres: ["Science", "Education"]
    }
  ];

books.reduce((groupedBooks , book)=>{
  const key = Math.floor(book,rating);
  if(!groupedBooks[key]) groupedBooks[key] = [];
  groupBooks[key].push(book);
},{})







































 






























