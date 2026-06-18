/** CLASS INHERITANCE **/

/** The Beverage Class **/

/*
	EXAMPLE: Define a Beverage class and give the constructor three parameters: 
    name, ounces, and container, then set the properties accordingly.

    Add one more property (no parameter) called recycled and set it to false.

    Add a method called recycle() that sets the recycled property to true 
    and prints a sentence with the name and container as a confirmation.

	Add a method called describe() that prints a sentence to the console 
    with its name, container, and capacity. The sentence should differ 
    slightly depending on whether it's been recycled or not.
*/

class Beverage {
	
    constructor(name, ounces, container) {
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.recycled = false;
    }

    recycle() {
        this.recycled = true;
        console.log(`\nThat was delicious! I rinsed and recycled the ${this.container} of ${this.name}.`);
    }

    describe() {
        let status;
        if (this.recycled) {
            status = "had";
        } else {
            status = "have";
        }
        console.log(`\nI ${status} a ${this.ounces}-oz. ${this.container} of ${this.name}.`);
    }

}

// Create a water object from Beverage class
let water = new Beverage("water", 20, "bottle");

// Print the water object
console.log(water);

// Describe the water (call the method)
water.describe();

// Recycle the water and then describe it again
water.recycle();
water.describe(); 


/** The Juice Class **/

/*
	EXAMPLE: Define a Juice class as a child of Beverage 
    Use 'extends' and 'super()' where needed

    Add two more properties as parameters:
		- fruits
		- veggies (make optional with empty array as value) 
	
	Override the inherited describe() method to use the parent describe()
    but then also include a list of fruits and veggies (one on each line)

    Do not override recycled or recycle()
*/

class Juice extends Beverage {
    constructor(name, ounces, container, fruits, veggies = []) {
        super(name, ounces, container); 
        this.fruits = fruits;
        this.veggies = veggies;
    }
  
    describe() {
        super.describe();
        console.log(`It contains the following:`);
        let ingredients = (this.fruits).concat(this.veggies);
        for (let ingredient of ingredients) {
            console.log(`\t${ingredient}`);
        }
    }
}

// Create orangeJuice, appleJuice, and v8 objects from the Juice class
let orangeJuice = new Juice("orange juice", 16, "bottle", ["oranges"]);
let appleJuice = new Juice("apple juice", 14, "can", ["apples"]);
let v8 = new Juice("V8", 20, "glass bottle", ["tomatoes"], ["carrots", "celery", "beets", "parsley", "lettuce", "watercress", "spinach"]);

// Print the three objects
console.log(orangeJuice);
console.log(appleJuice);
console.log(v8);

// Describe the v8
v8.describe();

// Recycle the apple juice (method inherited from Beverage)
appleJuice.recycle();


/** The Soda Class **/

/* 
	Use 'extends' and 'super()' to create the Soda class as 
    a child of Beverage
	
 	Add one more property as a parameter: hasCaffeine

 	Override the inherited describe() method with an entirely new 
    sentence that includes the brand and caffeine status
*/

class Soda extends Beverage {

    constructor(name, ounces, container, hasCaffeine) {
        super(name, ounces, container);
        this.hasCaffeine = hasCaffeine;
    }
  
    describe() {
        let recycledStatus;
        if (this.recycled) {
            recycledStatus = "had";
        } else {
            recycledStatus = "have";
        }
        let caffeineStatus;
        if (this.hasCaffeine) {
            caffeineStatus = "caffeinated";
        } else {
            caffeineStatus = "caffeine-free";
        }
        console.log(`\nI ${recycledStatus} a ${this.ounces}-oz. ${this.container} of ${caffeineStatus} ${this.name}.`);
    }
}

// Create drPepper and sprite objects from the Soda class, then print them
let drPepper = new Soda("Dr Pepper", 12, "can", true);
let sprite = new Soda("Sprite", 20, "can", false);

console.log(drPepper);
console.log(sprite);

// Whoops! That Sprite is actually in a bottle. Fix it.
sprite.container = "bottle";

// Describe the Sprite
sprite.describe();

// Recycle the Dr. Pepper, then describe it 
drPepper.recycle();
drPepper.describe();
  

/** The DietSoda Class **/

/*
	Use 'extends' and 'super() to create the DietSoda class as a child of Soda.

 	Give it all four params from Soda plus a new one, sweetener

	Overwrite the describe method, calling the Soda describe and then adding a line that mentions the type of sweetener.
*/

class DietSoda extends Soda {

    constructor(name, ounces, container, hasCaffeine, sweetener) {
        super(name, ounces, container, hasCaffeine);
        this.sweetener = sweetener;
    }
        
    describe() {
        super.describe();
        console.log(`It is sweetened with ${this.sweetener}.`);
    }
}

// Create cokeZero, caffFreeDietCoke, and dietPepsi objects from the DietSoda class
let cokeZero = new DietSoda("Coke Zero", 12, "can", true, "aspartame");
let caffFreeDietCoke = new DietSoda("Caffeine-Free Diet Coke", 10, "bottle", false, "aspartame");
let dietPepsi = new DietSoda("Diet Pepsi", 20, "bottle", true, "sucralose");

// Print the three new objects
console.log(cokeZero);
console.log(caffFreeDietCoke);
console.log(dietPepsi);

// Describe the Diet Pepsi
dietPepsi.describe();

// Recycle the Coke Zero and caffeine-free Diet Coke
cokeZero.recycle();
caffFreeDietCoke.recycle();


/* Identity */

// Use the instanceof keyword to verify the class inheritance of cokeZero
console.log(cokeZero instanceof DietSoda);
console.log(cokeZero instanceof Soda);
console.log(cokeZero instanceof Beverage);

// Try the same for cokeZero with the Juice class
console.log(cokeZero instanceof Juice);


/* Polymorphism */

// Different classes, same behavior

// Objects of different classes in same list
const beverages = [water, v8, drPepper, dietPepsi];

// Each objects carries out its describe method a little differently
for (let beverage of beverages) {
    beverage.describe();
}


/** YOUR TURN **/

/*
    TODO: Create a Milk class that is a child of Beverage

    Add a new property called "source",
    which could take values like "almond", "dairy", or "soy" 
    for objects created from this class

    Add an optional property called "isNonDairy" that defaults to false.
    Add another optional property called "flavoring" that defaults to null.

    Customize the describe() method (be creative!)

    Create several instances of this class with unique values
    (think regular milk, chocolate milk, almond milk, soy milk, etc...)
    Include examples that use optional parameters and some that don't.
    Print the objects and call methods on a few of them
*/


