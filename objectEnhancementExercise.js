// Same keys and values
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */

//mine************
function createInstructor(firstName, lastName) {
    return {firstName, lastName}
}
// theirs
// function createInstructor(firstName, lastName){
//     return {
//       firstName,
//       lastName
//     }
//   }



// Computed property names------------------------------
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
//mine*************
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: 'That is my favorite!'
}

//object methods---------------------------------
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
//mine************
//is using 'const' necessary?
let instructor = {
    firstName: "Colt",
    sayHi () {
        return 'Hi!';
    },
    sayBye () {
        return this.firstName + " says bye!";
    },
}

//theirs
// const instructor = {
//     firstName: "Colt",
//     sayHi(){
//       return "Hi!";
//     },
//     sayBye(){
//       return this.firstName + " says bye!";
//     }
// }


// create animal function---------------------------------
// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

//mine*******************************
function createAnimal(kind, action, sound){
    return {
      kind,
      [action](){
        return sound;
      }
    }
  }

  //theirs
//   function createAnimal(species, verb, noise){
//     return {
//       species,
//       [verb](){
//         return noise;
//       }
//     }
//   }