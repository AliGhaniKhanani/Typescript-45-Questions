function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "the Great ".concat(names[i]);
    }
}
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
var magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Criss Angel",
    "Doug Henning",
];
// Call make_great to modify the array
make_great(magicians);
// Call show_magicians to display the modified list
show_magicians(magicians);
