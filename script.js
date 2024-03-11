// Function to generate a random password based on user-defined criteria
function generatePassword() {
    // Define character sets for different types of characters
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/';

    // Get the desired password length from the HTML input field
    const passwordLength = document.getElementById('passwordLength').value;

    // Combine all character sets into one string
    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

    // Initialize an empty string to store the generated password
    let password = '';

    // Generate the random password by selecting characters from the combined set
    for (let i = 0; i < passwordLength; i++) {
        // Generate a random index within the length of the combined character set
        const randomIndex = Math.floor(Math.random() * allChars.length);
        // Append the randomly selected character to the password
        password += allChars.charAt(randomIndex);
    }

    // Set the generated password in the HTML input field for display
    document.getElementById('password').value = password;
}
