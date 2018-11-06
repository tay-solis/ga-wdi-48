// var alwaysTrue = true;

const alwaysTrue = true;

// function myBarn(petMe) {
//  var that = this;
//   that.petMe=petMe;
//   var animals = {
//     petMe: petMe,
//   };

const myBarn = petMe =>{
    let animals ={
        petMe
    };

    if(alwaysTrue){
        let animals = {
            petMe: "pig"
        }
        const greeting = `This animal should be a pig; it is a ${animals.petMe}.`;
        console.log(greeting);
    }
    console.log(`This animal should be a dog, it is a ${animals.petMe}`);
}

myBarn("dog");
  
//   if (alwaysTrue) {
//     var animals = {
//       petMe: "pig",
//     };
//     var greeting = 'This animal should be a pig; it is a: ' + animals.petMe + '.';
    
//     console.log(greeting);
//   }
  
//   console.log('This animal should be a dog; it is a: ' + animals.petMe);  // 2
// }

// myBarn("dog");


/******* Arrow Functions ******/
//NOT with Arguments Object

const orderChildren = function() {
    const children = Array.from(arguments);
    return children.map((child, i)=>{
        return `${child} was #${i}.`;
    });
}

console.log(orderChildren("Brock", "Andrew", "Big dumb Keith"));
