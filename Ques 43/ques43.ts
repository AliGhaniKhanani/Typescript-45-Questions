function make_great(names: string[]): string[] {
    const greatMagicians = names.map(name => `Great ${name}`);
    return greatMagicians;
}

function show_magicians(names: string[]) {
    for (const name of names) {
        console.log(name);
    }
}

const magicians: string[] = [
    "Harry Houdini",
    "David Copperfield",
    "Criss Angel",
    "Doug Henning",
  ];

// Call make_great() with a copy of the array
const greatMagicians = make_great([...magicians]);

// Call show_magicians() with both arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);