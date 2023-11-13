function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = `the Great ${names[i]}`;
        
    }
}

function show_magicians(names: string[]): void {
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

// Call make_great to modify the array
make_great(magicians);

// Call show_magicians to display the modified list
show_magicians(magicians);
  