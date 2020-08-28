//Question 1
//Point 1
function init() {
  var name = 'Mozilla';
  function displayName() { 
    alert(name);
  }
  displayName();
}
init();

//Point 2
function functionOne(x) { return x; };

function functionTwo(var1) {
    // some code
}

functionTwo(functionOne);

//Point 3
var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6));
// 720

//Point 4
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//Point 5


//Question 2
//Point 1

    //2 after 3 sec
    //12 after 3 sec

//Point 2

    //True
    //False

//Point 3

    //John Doe but i need to know why

//Point 4

    //blank -- no Console == no show

//Point 5

    //blank -- no Console == no show

//Question 3
//Point 1

    function game(){
        var question1 = 'do u fly';
        var question2 = 'do u wild';
        var question3 = 'do u live under sea';
        var question4 = 'do u fly';
        
        if (question1 == true)
            {
               if (question2 == true) 
                {
                    return "eagle";
                }
                else{
                    return "Parrot";
                }
            }
        else{
            if (question3 == true)
            {
                if(question4 == true)    
                    {
                        return "Shark";
                    }
                else{ return "Dolphin"; }
            }
            else{
                if (question2 == true)
                    {
                        return "Lion";
                    }
                else {return "Cat";}
            }
        }
    }

//Point 2

var obj = { "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 }; 
      
    // Using Object.entries() function 
    // to convert convert an Object {} to an  
    // Array [] of key-value pairs 
    var result = Object.entries(obj); 
      
    // Printing values 
    for(var i = 0; i < result.length; i++) { 
        for(var z = 0; z < result[i].length; z++) { 
            document.write(result[i][z] + " "); 
        } 
        document.write("</br>"); 
    } 

//Point 3

class Circle {
    constructor(raduis){
        this.raduis = raduis;
    }
    // property to set Raduis
    set Raduis(raduis){
        this.raduis = raduis;
    }
    // property to get raduis
    get Raduis(){
        return this.raduis;
    }
    getCircleArea(){
        return Math.PI * Math.pow(this.raduis , 2);
    }
    getCirclePerimeter(){
        return (2*Math.PI) * (this.raduis);
    }
    get allCircleInfo(){
    return `Raduis = ${this.raduis} \n Area = ${this.getCircleArea()} \n Perimeter = ${this.getCirclePerimeter()}`;
    }
}
let c =  new Circle(5);
 c.Raduis = 5 ;
console.log(c.allCircleInfo);

//Point 4

class Employee{
    constructor(name, age, budget){
        this.id = name;
        this.firstName = age;
        this.lastName = budget;
    }
    set Name(name){
        this.name = name;
    }
    set Age(age){
        this.age = age;
    }
    set Budget(budget){
        this.budget =budget;
    } 
    get Name(){
        return this.name;
    }
    get Age(){
        return this.age;
    }
    get Budget(){
        return this.budget;
    }
    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
       ]) 
    get allEmployeeInfo(){
        return `Result = ${this.Budgets}`;
    }
}
console.log(emp.allEmployeeInfo);

//Point 5



//Question 4
//Point 1

//Point 2

//Point 3