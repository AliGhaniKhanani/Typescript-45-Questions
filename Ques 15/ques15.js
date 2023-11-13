var guestList = ["Muhammad", "Ahmed", "Shoaib"];
console.log(guestList);
console.log("Unfortunately, ".concat(guestList[2], " is not able to attend the dinner with us"));
// Removing the last element of an array
guestList.pop();
console.log(guestList);
// adding the last element to an array
guestList.push("Salman");
console.log(guestList);
// Printing the modified invitation
console.log("The New List of Guest Who Will Attend The Dinner", guestList);
