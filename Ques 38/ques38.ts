function describe_city(param1: string, param2 = "Pakistan") {
  console.log(`${param1} is in ${param2}`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "United Kingdom");
