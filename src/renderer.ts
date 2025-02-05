document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const handleInput = document.getElementById('handle') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const statusText = document.getElementById('status') as HTMLParagraphElement;

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        statusText.textContent = 'Logging in...';

        const handle = handleInput.value;
        const appPassword = passwordInput.value;

        const response = await window.api.login(handle, appPassword);

        if (response.success) {
            statusText.textContent = 'Login successful!';
        } else {
            statusText.textContent = `Error: ${response.error}`;
        }
    });
});