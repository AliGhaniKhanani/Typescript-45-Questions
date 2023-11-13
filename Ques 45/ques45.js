function createCar(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    if (options.color) {
        car.color = options.color;
    }
    if (options.features) {
        car.features = options.features;
    }
    return car;
}
// Calling the function with required and optional information
var carInfo = createCar("Toyota", "Camry", { color: "Blue", features: ["Leather seats", "Sunroof"] });
// Printing the car information
console.log(carInfo);
