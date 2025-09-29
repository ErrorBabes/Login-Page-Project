// Input boxes and button from the page
 
const firstName = document.querySelector(".firstname");
const secondName = document.querySelector(".secondname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".createbtn");
 
// To store all user accounts
const personalInfo = [];
 
 
// I added this event so that when the "Create account" button is clicked,
// user input will be collected and stored
 
button.addEventListener('click', function(event){
    event.preventDefault(); // stop the page from refreshing
 
// To store one user’s details
    const dataInput = {
        Name: [firstName.value, secondName.value],
 
 
// saving both first and last name
       
Email: email.value,Password: password.value
    };
 
   
// To add object into the array
    personalInfo.push(dataInput);
 
// Show a message for testing
 
    alert("Account created successfully!");
 
// To show all accounts in the console
 
    console.log(personalInfo);
});
 
