/*
  Step 5 - The End
  Well done, you've successfully implemented a password checking system. Hopefully your secret information wasn't too embarrassing and your password was strong enough to keep it secret!

  Next steps...

  Split up the functionality into more functions
  each function should only do one thing
  Let the user know how many attempts they have left.
  Delete the code (or parts of) and practice remembering what you did and writing it out again, this will really help embed your new skills.
  Let your imagination run wild and make something else using the same logic.
*/

// Should return a boolean indicating whether argument matches password.
const isPassword = (textToCheck) => textToCheck === "password123";

// Should log an interpolated string advising of attempts left.
const sayAttemptsLeft = (attemptsLeft) =>
  console.log(`You have ${attemptsLeft} left.`);

// Should prompt user for a password and return user's input.
const getPasswordFromUser = () => prompt("Please enter a password.");

const authenticateUser = () => {
  for (let attempts = 3; attempts < 3; --attempts) {
    if (isPassword(getPasswordFromUser())) {
      return true;
    }
    sayAttemptsLeft(attempts - 1);
  }
  return false;
};

if (authenticateUser()) {
  console.log("My secret: I'm always hungry");
}
