/*
Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
 person’s name, print a message to them. The text of each message
 should be the same, but each message should be personalized with the person’s name.
*/

let friendsArray = ["Ayaan","Sana","Sajida","Atif","Angelis Aura"];
let message = " is a good person.";
for (let i=0; i<friendsArray.length; i++){
    console.log(friendsArray[i] + message);
}