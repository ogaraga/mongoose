//importing modules to require

var mongoose = require('mongoose');
var Person = require('./Person'); //person contructor
const e = require('express');


// exporting and connecting database

    mongoose.connect("mongodb+srv://raim4christ:Tzaddi2121!@cluster0.ifuoe8j.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true, useUnifiedTopology: true, 
    }) 


    

/* callback has been stopped on mongoose connection hence the then and catch method is used to creact document(user) instance of Person*/

        const user = new Person({
            name: 'raymond ogaraga',
            email: 'ray_isgood@example.com',
            age: 30,
            favoriteFood: ['Egusi-Soup', 'Rice & Beans', 'Akpu', 'Yam','Bread']
        })
        user.save().then((data)=>{
            console.log(data)
            }).catch((e)=>{
                console.log(e.message)
            })  

// //creation of more persons/users/people using model.create() method
// 
    arrayOfPeople()
async function arrayOfPeople() {
    try{
        const user = await Person.create([
            {name: 'sunny Biwig',
            email: 'sunny_bigman@gmail.com',
            age: 40,
            favoriteFood: ['Burger','Palps']
        },
            {name: 'Uche Raymond',
            email: 'carpenta_yesoh@yahoo.com',
            age: 20,
            favoriteFood: ['Garri','Semovita']
        },
    
            {name: 'Biafra Oluchi',
            email: 'biafragirl_2000@outlook.com',
            age:38,
            favoriteFood: ['Banana','Moi-Moi & Rice']
        },
    
        {name: 'Gloria Ogaraga',
        email: 'oneday_2000@shell.com',
        age:50,
        favoriteFood: ['Soup & Garri','Pounded Yam']
    }
    
    ])

console.log(user)
}catch{
    (e)=>console.log(e.message);
}
}    

/*Search created database so far with model.find() you may wish to comment it out for you to be able to run other codes before this.*/

//     runAll()
// async function runAll(){
// try {
//     const user = await Person.find()
//     console.log(user)

// } catch (e) {
//     console.log(e.message)
// }    

// };

/* to find just one person we use Model.findOne()method for example lets find someone who likes Akpu as a fovorite food*/

//   runOne()
//   async function runOne(){
//   try {
//       const user = await Person.findOne({favoriteFood: 'Akpu'})
//       console.log(user)

//   } catch (e) {
//       console.log(e.message)
//   }    

//   };

/* find someone who likes semovita as a fovorite food using the Id as key value */


//   runById()
//   async function runById(){
//   try {
//       const user = await Person.findById("64f3f7a20f13559adf2b15a5")
//       console.log(user)

//   } catch (e) {
//       console.log(e.message)
//   }    

//   }

/*Upadating existing recordes of the guy with the name Uche raymond using his ID as done above*/


//   runUpdate()
//   async function runUpdate(){
//   try {
//      const added = []
//      const user = await Person.findById("64f3f7a20f13559adf2b15a5")
//       added.push(user.favoriteFood += [',Hamburger']);
    
//       await user.save();
//       console.log(user);

//   } catch (e) {
//       console.log(e.message)
//   }    

//   }

 

//create a person with name MARY

// const user = new Person({name: 'Mary Saluteen', email:'mary.saluteen@gmail.net', age: 23, favoriteFood: ['Amala','Rice and Beans','Okro Soup']});
// user.save().then((data)=>console.log(data)).catch((e)=>console.log(e.message));

//Deletion or removal of persons with name MARY

// runRemove()
// async function runRemove(){
// try {
//     const user = await Person.deleteOne({name: 'Mary saluteen'})

//     console.log(user,'\n Done!\n' + 'Mary has been deleted');

// } catch (e) {
//     console.log(e.message)
// }    

// }

//creation of people who like BURRITOS before sorting

// likeBuritos()
// async function likeBuritos() {
//     try {
//         const user = await Person.create({name: 'monday Skools', email:'skools@gmail.com', age: 32, favoriteFood: ['Shawamma','Burritos','White Soup']},
//         {name: 'Loveday Great', email:'loveme300@gmail.com', age: 21, favoriteFood: ['Garri','Burritos','Palps']},
//         {name: 'Geoffery Dean', email:'dean_lion4real@yahoo.com', age: 42, favoriteFood: ['Eba','Burritos','Beans']},
//         {name: 'Tunde Ahmed', email:'tunde2021@gmail.com', age: 27, favoriteFood: ['Ewedu & Amala','Burritos','White Rice']}       
//         )
//         console.log(user)
//     } catch (e) {
//       console.log(e.message)  
//     }

// }

/*chaining those with penchant for BURRITOS limiting it to 2 documents(persons) in order of importance*/

// likeBurritos()
// async function likeBurritos() {
//     try {
//         const user = await Person.find({favoriteFood: 'Burritos'}).sort({name: 1}).limit(2).select({age: 0}).exec()
//             console.log(user, '\n Done!\n' + 'People with favoriteFood as Burritos are now sorted 2 docs only')

//            } catch (e) {
//         console.log(e.message);
//     }

// }

// find by name and set age to 20

// updateOne()
// async function updateOne() {
//  try {
//     const user = await Person.findOneAndUpdate({name: 'raymond ogaraga', age: 20, new: true});
// await user.save()
//     console.log(user)
// }
// catch(e){
//     console.log(e.message)}

//  }   


//find one person and remove same using findbyid and remove

// findByIdAndRmove()
// async function findByIdAndRmove() {
//     try {
//         const user = await Person.findByIdAndRemove("64f3f7a20f13559adf2b15a5");
//         console.log(user)
//     } catch (e) {
//         console.log(e.message)
//     }
// }