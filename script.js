const form = document.getElementById("sign-up-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
        confirmPassword.setCustomValidity("Passwords do not match");
        return;
    }

    confirmPassword.setCustomValidity("");

    alert("Account created successfully!");
    form.reset();
});

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});