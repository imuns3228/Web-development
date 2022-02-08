const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Pineaplle",
  rating: 4.8,
  review: "Delicious!"
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const banana = new Fruit ({
  name: "banana",
  rating: 4.8,
  review: "Delicious!"
});

const kiwi = new Fruit ({
  name: "kiwi",
  rating: 4.8,
  review: "Delicious!"
});

const person = new Person ({
  name: "John",
  age: 28
});


// person.save();

// Fruit.insertMany([kiwi, banana], (err) => {
//   if(err){
//     console.log(err);
//   }else {
//     console.log("Succes");
//   }
// });

Fruit.find((err, fruits) => {
  if(err){
    console.log(err);
  }else {

    mongoose.connection.close();

    fruits.forEach((element) => {
      console.log(element.name);
    });
  }
});
//fruit.save();
