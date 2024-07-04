/*
Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
 person’s name, print a message to them. The text of each message
 should be the same, but each message should be personalized with the person’s name.

*/
var friendsArray = ["Ayaan", "Sana", "Sajida", "Atif", "Angelis Aura"];
var message = " is a good person.";
for (var i = 0; i < friendsArray.length; i++) {
    console.log(friendsArray[i] + message);
}
