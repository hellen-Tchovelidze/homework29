// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`Hello, my name is ${this.name},  and I am ${this.age} years old.`);
    
        
    }
}
let user = new Person ("hellen", "24")
user.introduce()


// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.
class Persn{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello, my name is ${this.name},  and I am ${this.age} years old.`);
    
        
    }
static IsAdult(age) {
    return age >= 18
}
}
let users = new Persn("Hellen", 24);
users.greet()
 console.log(Persn.IsAdult(24));
 

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!
class Animal {
    constructor(name) {
        this.name = name
    }
   
        
    
}
class Dog extends Animal{
    constructor(name, speak) {
        super(name)
        this.speak = speak
    }

    getAnimal(){
        console.log(`${this.name} says: ${this.speak}`);
        
    }
}

let dog = new Dog( "husky", "woof")
dog.getAnimal()

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Button {
    constructor(label, color) {
        this.label = label;
        this.color = color;

        let button = document.createElement("button");
        button.textContent = this.label; 
        button.style.backgroundColor = this.color; 

        
        let container = document.getElementById("buttonContainer");
        container.appendChild(button);
        button.addEventListener("click", () => {
            this.createHelloElement();
        });
    }

   
    createHelloElement() {
        let  helloElement = document.createElement("div");
        helloElement.textContent = "Hello";
        helloElement.style.backgroundColor = this.color; 
        helloElement.style.color = "#fff"; 
       

        let container = document.getElementById("buttonContainer");
        container.appendChild(helloElement);
    }
}


let button1 = new Button("Click Blue", "blue");
let button2 = new Button("Click Green", "green");
let button3 = new Button("Click Red", "red");




// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    describe() {
        return `${this.brand} is moving at a speed of ${this.speed} km/h.`;
    }
}

class Car extends Vehicle {
    constructor(brand, speed, model) {
        super(brand, speed);  
        this.model = model;    
    }
    describe() {
        return `${this.brand} ${this.model} is moving at a speed of ${this.speed} km/h.`;
    }
}


let car1 = new Car("Volkswagen", 160, "passat");
let car2 = new Car("BMW", 250, "M3");
let car3 = new Car("dodge", 220, "challenger");


console.log(car1.describe()); 
console.log(car2.describe()); 
console.log(car3.describe()); 

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    
    static filterByCategory(products, category) {
        return products.filter(product => product.category === category);
    }
}


let product1 = new Product("Laptop", 1000, "electronics");
let product2 = new Product("Shirt", 30, "clothing");
let product3 = new Product("Smartphone", 800, "electronics");
let product4 = new Product("Coffee Maker", 50, "appliances");
let product5 = new Product("Headphones", 150, "electronics");


let products = [product1, product2, product3, product4, product5];


let electronicsProducts = Product.filterByCategory(products, "electronics");


console.log("Electronics Products:");
electronicsProducts.forEach(product => {
    console.log(`${product.name} - $${product.price}`);
});

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

class Event {
    constructor(name, date) {
        this.name = name;
        this.date = new Date(date); 
    }

    isUpcoming() {
        let now = new Date(); 
        return this.date > now; 
    }
}

let event1 = new Event("Concert", "2024-12-15");
let event2 = new Event("Meeting", "2024-11-30");
let event3 = new Event("Birthday Party", "2024-10-15");

console.log(`${event1.name} is upcoming: ${event1.isUpcoming()}`);
console.log(`${event2.name} is upcoming: ${event2.isUpcoming()}`);
console.log(`${event3.name} is upcoming: ${event3.isUpcoming()}`);

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

   
    getStatus() {
        return `${this.name} has ${this.health > 0 ? this.health : 0} health.`;
    }
}


class Warrior extends Character {
    attack(target) {
        if (target.health > 0) {
            target.health -= 10; 
            console.log(`${this.name} attacks ${target.name}, reducing their health to ${target.health > 0 ? target.health : 0}!`);
        } else {
            console.log(`${target.name} is already defeated!`);
        }
    }
}


let warrior1 = new Warrior("vaxo", 90);
let warrior2 = new Warrior("niki", 100);


console.log(warrior1.getStatus());
console.log(warrior2.getStatus());


warrior1.attack(warrior2); 
warrior2.attack(warrior1); 
warrior2.attack(warrior1); 

console.log(warrior1.getStatus());
console.log(warrior2.getStatus());

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.
class Task {
    constructor(title, priority = "low", completed = false) {
        this.title = title;
        this.priority = priority;
        this.completed = completed;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

   
    static filterByPriority(tasks, priority) {
        return tasks.filter(task => task.priority === priority);
    }
}


let task1 = new Task("Finish homework", "high", true);
let task2 = new Task("Go shopping", "medium");  
let task3 = new Task("Read a book", "low");  


task1.toggleCompleted();
console.log(task1); 


let highPriorityTasks = Task.filterByPriority([task1, task2, task3], "high");
console.log("High priority tasks:");
highPriorityTasks.forEach(task => console.log(task.title)); 

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.
class Appointment {
    constructor(title, date) {
        this.title = title;
        this.date = new Date(date);  
    }


    isToday() {
        let today = new Date();
        return today.toDateString() === this.date.toDateString();
    }
}


let appointment1 = new Appointment("How to understand JavaScript", "2024-11-24T10:00:00");
let appointment2 = new Appointment("Meeting with friend", "2024-11-26, 12:00:19");

console.log(appointment1.isToday()); 
console.log(appointment2.isToday()); 
