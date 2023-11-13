interface CarInfo {
    manufacturer: string;
    model: string;
    color?: string;
    features?: string[];
}

function createCar(manufacturer: string, model: string, options: Partial<CarInfo> = {}): CarInfo {
    const car: CarInfo = {
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
const carInfo = createCar("Toyota", "Camry", { color: "Blue", features: ["Leather seats", "Sunroof"] });

// Printing the car information
console.log(carInfo);
