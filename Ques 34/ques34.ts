let pizzaList = ["Chicken Pizza", "Cheese Pizza", "Vegetable Pizza"];
for (let index = 0; index < pizzaList.length; index++) {
  const element = pizzaList[index];
  console.log(element);
}

console.log("\nModified Sentences:");
for (const pizza of pizzaList) {
    console.log(`I like ${pizza}.`);
}
