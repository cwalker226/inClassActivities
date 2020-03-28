const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const catStr = await readFileAsync("cat.json", "utf8");
    const dogStr = await readFileAsync("dog.json", "utf8");
    const goldfishStr = await readFileAsync("goldfish.json", "utf8");
    const hamsterStr = await readFileAsync("hamster.json", "utf8");
    console.log(catStr);

    const catJSON = JSON.parse(catStr);
    const dogJSON = JSON.parse(dogStr);
    const goldfishJSON = JSON.parse(goldfishStr);
    const hamsterJSON = JSON.parse(hamsterStr);

    console.log(catJSON);

    const animals = [catJSON, dogJSON, goldfishJSON, hamsterJSON];
    console.log(animals);

    await writeFileAsync("combined.json", JSON.stringify(animals, null, 2));

    console.log("Successful!");
  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
