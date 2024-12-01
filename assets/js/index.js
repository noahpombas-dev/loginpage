document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const toSignup = document.getElementById('to-signup');
    const toLogin = document.getElementById('to-login');

    function switchForm(hideContainer, showContainer) {
        // Start transition for hiding the current form
        hideContainer.style.maxHeight = hideContainer.scrollHeight + 'px'; // Set to full height
        hideContainer.style.transition = 'max-height 0.75s ease'; // Set transition properties
        hideContainer.style.maxHeight = '100px'; // Collapse height

        // Hide the container after the transition
        setTimeout(function() {
            hideContainer.style.display = 'none'; // Completely remove from layout
            hideContainer.style.maxHeight = '100px'; // Ensure it's collapsed
            hideContainer.classList.remove('active');

            // Prepare the new container
            showContainer.style.display = 'block'; // Make it visible
            showContainer.style.maxHeight = '100px'; // Start with collapsed height
            showContainer.classList.add('active');

            // Trigger reflow to apply the new height
            showContainer.offsetHeight; // Trigger reflow

            // Animate showing the new container
            showContainer.style.transition = 'max-height 0.75s ease'; // Set transition properties
            showContainer.style.maxHeight = showContainer.scrollHeight + 'px'; // Expand to full height

        }, 1000); // Duration matches the max-height transition
    }

    toSignup.addEventListener('click', function(event) {
        event.preventDefault();
        switchForm(loginContainer, signupContainer);
    });

    toLogin.addEventListener('click', function(event) {
        event.preventDefault();
        switchForm(signupContainer, loginContainer);
    });

    // Optional: Show login form by default when the page loads
    loginContainer.classList.add('active');
    loginContainer.style.display = 'block'; // Ensure it's visible initially
    loginContainer.style.maxHeight = loginContainer.scrollHeight + 'px'; // Expand to full height
});
