var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var worldList = ["Japan", "USA", "Kenya", "Spain", "Nigeria"];
console.log("Original array", worldList);
// Sorting an Array
console.log("After Sorting", __spreadArray([], worldList, true).sort());
console.log("Original Array", worldList);
// reversing an Array
console.log("reversing", __spreadArray([], worldList, true).sort().reverse());
console.log("Original Array", worldList);
console.log("After Sorting", __spreadArray([], worldList, true).sort());
console.log("Original Array", worldList);
