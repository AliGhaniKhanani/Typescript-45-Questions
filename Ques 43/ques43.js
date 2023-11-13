var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(names) {
    var greatMagicians = names.map(function (name) { return "Great ".concat(name); });
    return greatMagicians;
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
// Call make_great() with a copy of the array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians() with both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
