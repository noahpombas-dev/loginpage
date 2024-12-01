const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');

function validatePasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = 'Passwords do not match.';
        submitBtn.disabled = true; 
    } else {
        passwordError.textContent = '';
        submitBtn.disabled = false; 
    }
}

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);
