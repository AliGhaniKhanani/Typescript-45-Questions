function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
orderSandwich("Bread", "Turkey", "Lettuce", "Tomato");
orderSandwich("Bread", "Peanut Butter", "Jelly");
