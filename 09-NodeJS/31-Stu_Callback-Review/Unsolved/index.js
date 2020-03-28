const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter(animal => animal.species === "dog");
  const cats = animalJSON.filter(animal => animal.species === "cat");

  // dogsJSON = JSON.stringify(dogs);
  // catsJSON = JSON.stringify(cats);

  fs.writeFile("dogs.json", JSON.stringify(dogs, null, 2), function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });

  fs.writeFile("cats.json", JSON.stringify(cats, null, 2), function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });
});
