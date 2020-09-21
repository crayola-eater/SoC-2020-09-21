/*
  Step 2 - Using the input to determine behavior
  Now that we have the user's input stored in a variable, we can check whether it is the correct password. If it is correct, we should then alert with some secret information.

  alert("My secret information");
  To check that our variable is equal to the correct password we can use ===, the equality operator.

  userPassword === "myPassword1!";
  The code above will resolve to true if the variable userPassword contains the string "myPassword1!".

  👉 Use an if statement to alert your message only when the password is correct.
*/

let result = prompt("Please enter the password.");
let secret = "SUPER_SECRET_PASSWORD";

if (result === secret) {
  alert(secret);
}
