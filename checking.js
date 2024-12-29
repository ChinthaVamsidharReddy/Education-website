function signin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = "123";
    const pass = "123";
    if(username==''|| password==''){
        document.getElementById('error-message').innerText='Enter username and password'
    }
    else{
        if (username === name && password === pass) {
            window.location.href = "Education.html";
        } else {
            document.getElementById('error-message').innerText = 'Invalid username or password';
        }
    }
}

function signup(event) { 
    event.preventDefault(); 
    let spa = 0;
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const pass = document.getElementById('password').value;
    const cnfpass = document.getElementById('cnfpassword').value;
    if (email.includes(' ')) {
        document.getElementById('error-message').innerText = 'Invalid email: contains spaces';
        return;
    }
    if (!email.endsWith('@gmail.com')) {
        document.getElementById('error-message').innerText = 'Invalid E-mail format';
        return;
    }
    if (pass !== cnfpass) {
        document.getElementById('error-message').innerText = 'Passwords do not match';
        return;
    }
    window.location.href = "Education.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('bars');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});