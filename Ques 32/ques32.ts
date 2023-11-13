let current_users: string[] = ['John', 'Alice', 'Bob', 'Eve', 'Grace'];
let new_users: string[] = ['Sam', 'Grace', 'Charlie', 'EVE', 'Oliver'];

for (let new_user of new_users) {
  // Convert the new username to lowercase for case-insensitive comparison
  let lowerCaseNewUser = new_user.toLowerCase();

  // Check if the lowercase username exists in the current_users list
  if (current_users.some((user) => user.toLowerCase() === lowerCaseNewUser)) {
    console.log(`The username '${new_user}' is not available. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}