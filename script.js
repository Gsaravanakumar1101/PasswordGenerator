function generatePassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/';

    const passwordLength = document.getElementById('passwordLength').value;
    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
}
