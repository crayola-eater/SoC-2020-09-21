/*
  Step 4 - Functions
  New Plan
  declare a function that will prompt the user for input - a password in our case
  store that password in a variable within the function
  check whether the password matches the correct password
  if it does, return true from the function
  if it doesn't let them try again
  if they fail three times in a row, do not allow them any more tries and return false from the function
  console.log a secret only if the function returned true
  👉 Refactor the code you have written into a function called authenticateUser. Have that function return true if the user logged in successfully, and false if they got the password wrong more than three times. You can put most of the code you have written into the function, but don't reveal the secret yet. The function should be used like this...

  function authenticateUser() {
    // prompt for password and handle login attempts here
  }
  // get answer here
  let isLoggedIn = authenticateUser();

  // you should reveal the secret after the function is called using the boolean isLoggedIn
*/

function authenticateUser() {
  let attempts = 0;
  let password = "SUPER_STRONG_PASSWORD";

  while (attempts < 3) {
    let result = prompt("Please enter the password.");
    if (result === password) {
      return true;
    }
    attempts++;
  }
  return false;
}

let isLoggedIn = authenticateUser();

if (isLoggedIn) {
  console.log("My secret: I'm always hungry");
}
