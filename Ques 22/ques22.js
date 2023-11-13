var myFriendList = ["Ali", "Adnan", "Olive", "Ziker", "Yousuf", "Ahmed"];
var error = myFriendList[8];
if (error === undefined) {
    console.log("Index Error ".concat(myFriendList.indexOf, " Not Defined"));
}
else {
    console.log(error);
}
