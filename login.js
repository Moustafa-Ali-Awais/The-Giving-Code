const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const loginSection = document.getElementById('login');

// Move eyes when typing username
usernameInput.addEventListener('input', () => {
    const usernameLength = usernameInput.value.length;
    const eyePosition = Math.min(usernameLength * 2, 20);
    const leftEye = document.getElementById('left-eye');
    if (leftEye) {
        leftEye.style.transform = `translateX(${eyePosition}px)`;
    }
    const rightEye = document.getElementById('right-eye');
    if (rightEye) {
        rightEye.style.transform = `translateX(${eyePosition}px)`;
    }
});

// Add sunglasses when typing password
passwordInput.addEventListener('input', () => {
    const sunglasses = document.getElementById('sunglasses');
    if (sunglasses) {
        if (passwordInput.value.length > 0) {
            sunglasses.classList.add('visible');
        } else {
            sunglasses.classList.remove('visible');
        }
    }
});

// Handle login
loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple validation
    if (username && password) {
        // Show success message
        alert('تم تسجيل الدخول بنجاح!');
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
    }
});

// Check login state on page load
window.addEventListener('load', () => {
    // Clear any previous login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    if (loginSection && loginSection.style.display === 'block') {
        document.querySelector('.container').style.opacity = 1;
    }
});
