// ****************** Task1 ******************

function propsCount(currentObject){
    return Object.keys(currentObject).length;
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
console.log("Task 1");
console.log(propsCount(mentor));
console.log("\n");

// ****************** Task2 ******************

let book = {
    genre: "classic",
    author: "Byron",
    pageNumber: 300,
    coverPage: "blue",
    oldEdition: true
};
function showProps(currentObject){
    return Object.keys(currentObject);
}
function showValueProp(currentObject){
    return Object.values(currentObject);
}
console.log("Task 2");
console.log(showProps(book));
console.log(showValueProp(book));
console.log("\n");

// ****************** Task3 ******************

class Person {
    constructor(name,sirname){
        this.name = name
        this.sirname = sirname
    }
    showFullName(){
        return this.name + " " +  this.sirname;
    }
}
class Student extends Person {
    constructor (name,sirname,year){
        super (name,sirname)
        this.name = name
        this.sirname = sirname
        this.year = year
    }
    showFullName(middleName){
        return this.sirname + " " + this.name + " " + middleName;
    }
    showCourse(){
        const currentYear = new Date();
        let course = currentYear.getFullYear() - this.year + 1;
        if (course<0){
            return "You haven'r entered the university yet!";
        }
        else if(course>6){
            return "You are grduated!"
        }
        else {
            return course;
        }
    }
}
const person = new Student("Sophia","Taranets",2019);
console.log("Task 3");
console.log("You are: ",person);
console.log("Your full name: ",person.showFullName("Serhyivna"));
console.log("Current course: ",person.showCourse());
console.log("\n");

// ****************** Task4 ******************

class Worker {
    #experience = 1.2;
    constructor(fullName,dayRate,workingDays){
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.#experience;
    }
    get getExp (){
        return this.#experience;
    }
    set setExp (value){
        this.#experience = value;
    }
     
}

console.log("Task 4");
// 1 worker
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log(worker1.fullName + " salary whithout experience: ", worker1.showSalary());
console.log("Experience: ",worker1.getExp);
console.log(worker1.fullName + " salary with experience: ",worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " , worker1.getExp);
console.log(worker1.fullName + " salary with experience: ",worker1.showSalaryWithExperience());
console.log("\n");

// 2 worker
let worker2 = new Worker("Harry Potter", 30, 40);
console.log(worker2.fullName);                 
console.log(worker2.fullName + " salary whithout experience: ", worker2.showSalary());
console.log("Experience: ",worker2.getExp);
console.log(worker2.fullName + " salary with experience: ",worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " , worker2.getExp);
console.log(worker2.fullName + " salary with experience: ",worker2.showSalaryWithExperience());
console.log("\n");

//3 worker
let worker3 = new Worker("Mery Popins", 18, 10);
console.log(worker3.fullName);                 
console.log(worker3.fullName + " salary whithout experience: ", worker3.showSalary());
console.log("Experience: ",worker3.getExp);
console.log(worker3.fullName + " salary with experience: ",worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " , worker3.getExp);
console.log(worker3.fullName + " salary with experience: ",worker3.showSalaryWithExperience());
console.log("\n");
let arrWorkerSalary = [worker1,worker2,worker3];
function sortBySalary(arr) {
    arr.sort((a, b) => a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1);
  }
console.log("Sorted salary:");
sortBySalary(arrWorkerSalary);
for(let i = 0;i<arrWorkerSalary.length;i++){
    console.log(arrWorkerSalary[i].fullName + ": "+ arrWorkerSalary[i].showSalaryWithExperience());
}
console.log("\n");
// ****************** Task5 ******************

class GeometricFigure{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure{
    constructor (name1T,name2T,name3T){
        super()
        this.name1T = name1T
        this.name2T = name2T
        this.name3T = name3T
    }
    getArea(){
        if (this.name1T+this.name2T>this.name3T&& this.name1T+this.name3T>this.name2T && this.name2T+this.name3T>this.name1T) {
            let perimetrGerone = (this.name1T + this.name2T + this.name3T)/2;
            let area = Math.sqrt(perimetrGerone*(perimetrGerone-this.name1T)*(perimetrGerone-this.name2T)*(perimetrGerone-this.name3T));
            return area;
        }
        if ( this.name1T<=0 || this.name2T<=0 || this.name3T<=0 ) {
            throw new Error("A side of triangle can`t be negative or 0!");
        }
        else {
            throw new Error("Incorrect data!");
        }
        
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Square extends GeometricFigure{
    constructor(nameS){
        super()
        this.nameS = nameS
    }
    getArea(){
        return this.nameS * this.nameS;
    }
}
class Circle extends GeometricFigure{
    constructor(radius){
        super()
        this.radius = radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}
/*
class checkClass{
    constructor(n){
        this.n = n;
    }
}
*/
function handleFigures(figures) {
    let sumArea = 0;
    for (let i = 0; i<figures.length; i++){
        if(figures[i] instanceof GeometricFigure){
            console.log( "Geometric figure: "+ figures[i].toString() + " - area: " + figures[i].getArea());
            sumArea+=figures[i].getArea();
        }
        else {
            console.log(false);
        }
    }
    console.log("Total area: " + sumArea);
}
//const figures = [new checkClass(4,5,5 ), new Square(7), new Circle(5)];
const figures = [new Triangle(4,5,5), new Square(7), new Circle(5)];
console.log("Task 5");
handleFigures(figures);


