function goToPage(choice) {
    if (choice === 'musik') {
        window.location.href = 'musik.html'; // Halaman alat musik
    } else if (choice === 'tarian') {
        window.location.href = 'tarian.html'; // Halaman tari tradisional
    }
}

// Adding event listeners for the Share and Skip buttons
document.addEventListener("DOMContentLoaded", () => {
    // Selecting the buttons
    const exploreButton = document.querySelector(".jelajahi");
