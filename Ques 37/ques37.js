function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("medium");
// Create a custom-sized shirt with a different message
make_shirt("small", "TypeScript is awesome!");
