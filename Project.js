// project.js

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Access elements by their IDs
  const districtSelect = document.getElementById('District');
  const usernameInput = document.getElementById('Username');
  const passwordInput = document.getElementById('Password');
  const loginButton = document.querySelector('.btn');

  // Event listener for the login button
  loginButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the selected district, username, and password values
      const selectedDistrict = districtSelect.value;
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;

      // You can perform additional validation or send the data to a server here
      console.log('District:', selectedDistrict);
      console.log('Username:', enteredUsername);
      console.log('Password:', enteredPassword);
  });
});
