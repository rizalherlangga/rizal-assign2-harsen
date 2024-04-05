document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Lakukan proses autentikasi, contoh sederhana:
    authenticateUser(email, password);
});

function authenticateUser(email, password) {
    // Gunakan metode autentikasi yang sesuai dengan aplikasi Anda
    // Misalnya, panggil API autentikasi atau lakukan validasi dengan database

    // Contoh sederhana:
    if (email === "admin" && password === "admin") {
        // Autentikasi berhasil
        sessionStorage.setItem("isLoggedIn", "true");
        alert("Login berhasil!");
        window.location.href = "./index.html"; // Redirect ke halaman utama setelah login
    } else {
        alert("Email atau password salah. Silakan coba lagi.");
    }
}

authenticateUser()