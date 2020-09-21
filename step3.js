/*
  Step 3 - try again!
  We now want to let the user try again if the answer they entered was incorrect, but only for three times.

  We can have the code loop round the part where we ask for the password using a while loop.

  while (condition) {
  // ask the user for the password
  // give secret and break the loop if correct
  }
  We only want to repeat our loop if the previous guesses are less that three.

  This means we will need to keep track of the number of attempts.

  👉 Declare a variable at the top of our code called attempts with the value of 0. We will add one to this variable each time the user makes an incorrect guess.

  👉 Use the variable attempts in the condition of the while loop. We want the while loop to run as long as attempts are less than 3.

👉 If the user enters the wrong password, we want to add 1 to the attempts variable. If they are correct we want to exit the loop.
*/

let secret = "SUPER_SECRET_PASSWORD";
let attempts = 0;

while (attempts < 3) {
  let result = prompt("Please enter the password.");
  if (result === secret) {
    alert(secret);
    break;
  }
  attempts++;
}
