let guestList = ["Muhammad", "Ahmed", "Shoaib"]
console.log(guestList)
console.log(`Unfortunately, ${guestList[2]} is not able to attend the dinner with us`)

// Removing the last element of an array
guestList.pop()
console.log(guestList)

// adding the last element to an array
guestList.push("Salman")
console.log(guestList)

// Printing the modified invitation
console.log(`The New List of Guest Who Will Attend The Dinner`, guestList)

console.log("\nI have just found out a bigger dinner table and so I can invite three more person for a dinner")

// adding one new guest to the beginning of an array
guestList.unshift("Amir")
console.log(guestList)

// add one new guest in the middle
guestList.splice(2,0,"Naveed")
console.log(guestList)

// adding one new guest in the end with append().

