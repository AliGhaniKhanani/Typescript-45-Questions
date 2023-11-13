var pizzaList = ["Chicken Pizza", "Cheese Pizza", "Vegetable Pizza"];
for (var index = 0; index < pizzaList.length; index++) {
    var element = pizzaList[index];
    console.log(element);
}
console.log("\nModified Sentences:");
for (var _i = 0, pizzaList_1 = pizzaList; _i < pizzaList_1.length; _i++) {
    var pizza = pizzaList_1[_i];
    console.log("I like ".concat(pizza, "."));
}
