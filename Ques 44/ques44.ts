function orderSandwich(...items: string[]): void {
  if (items.length === 0) {
    console.log("You ordered an empty sandwich. Please add some items.");
  } else {
    console.log("You ordered a sandwich with the following items:");
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
  console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
orderSandwich("Bread", "Turkey", "Lettuce", "Tomato");
orderSandwich("Bread", "Peanut Butter", "Jelly");

