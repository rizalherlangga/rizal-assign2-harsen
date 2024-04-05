function handleCardClick(url) {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        alert("Anda harus login terlebih dahulu untuk melihat detail anggota.");
        window.location.href = "./login.html"; // Redirect ke halaman login jika belum login
    } else {
        window.location.href = url; // Redirect ke halaman detail anggota jika sudah login
    }
}

function handleLogout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload halaman setelah logout
}

// Tombol Login, User, dan Logout
const loginButton = document.getElementById("loginButton");
const containLog = document.getElementById("containLog");
const logoutButton = document.getElementById("logoutButton");
const userButton = document.getElementById("userButton");

const isLoggedIn = sessionStorage.getItem("isLoggedIn");
if (isLoggedIn) {
    loginButton.style.display = "none";
    containLog.style.display = "block";
    userButton.style.display = "block";
    logoutButton.style.display = "block";
    containLog.style.display = "flex";
    containLog.style.gap = "10px";
} else {
    loginButton.style.display = "block";
    containLog.style.display = "none";
    userButton.style.display = "none";
    logoutButton.style.display = "none";
}

// Event listener untuk tombol Logout
logoutButton.addEventListener("click", handleLogout);

// Event listener untuk tombol login redirect ke page login
loginButton.addEventListener("click", () => {
    window.location.href = "./login.html"; // Redirect ke halaman login saat tombol Login diklik
});