var fruits = ['pear', 'papaya', 'fig'];



const phrase1 = "Good morning";
const phrase2 = 'Have a good day!;


console.log(phrase1 + phrase2);

console.log(phrase1 + phrase2);



const hour = new Date().getHours();
let greeting;
if (hour < 18) {
greeting = 'Good day';
} else {
greeting = 'Good evening';
}



let person = {name: "Sara", country: "Nigeria", job: "Web Developer"};

let {name, country, job} = persona;

console.log(name);//"Sara"
console.log(country);//"Nigeria"
console.log(job);//Desarrolladora"






  console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function() {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");


