var current_users = ['John', 'Alice', 'Bob', 'Eve', 'Grace'];
var new_users = ['Sam', 'Grace', 'Charlie', 'EVE', 'Oliver'];
var _loop_1 = function (new_user) {
    // Convert the new username to lowercase for case-insensitive comparison
    var lowerCaseNewUser = new_user.toLowerCase();
    // Check if the lowercase username exists in the current_users list
    if (current_users.some(function (user) { return user.toLowerCase() === lowerCaseNewUser; })) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
