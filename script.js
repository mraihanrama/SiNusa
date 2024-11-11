// Mengambil elemen-elemen yang diperlukan
const petaInteraktif = document.getElementById("peta-interaktif");
const detailsSection = document.getElementById("details");
const backButton = document.getElementById("back-button");

// Fungsi untuk menampilkan detail provinsi yang dipilih
function selectRegion(regionId) {
    const regionElement = document.getElementById(regionId);

    // Menghapus kelas 'selected-region' dari elemen sebelumnya
    document.querySelectorAll(".selected-region").forEach(el => el.classList.remove("selected-region"));

    // Menambahkan kelas 'selected-region' ke provinsi yang dipilih
    if (regionElement) {
        regionElement.classList.add("selected-region");
    }

    // Sembunyikan peta dan tampilkan detail
    petaInteraktif.classList.add("hidden");
    detailsSection.classList.remove("hidden");
    backButton.classList.remove("hidden");

    // Menampilkan detail untuk provinsi yang dipilih
    showDetails(regionId);  // Isi detail berdasarkan provinsi
}

// Fungsi untuk kembali ke peta
function goBack() {
    // Sembunyikan detail dan tampilkan peta
    detailsSection.classList.add("hidden");
    petaInteraktif.classList.remove("hidden");
    backButton.classList.add("hidden");

    // Hapus kelas 'selected-region' dari provinsi yang dipilih
    document.querySelectorAll(".selected-region").forEach(el => el.classList.remove("selected-region"));
}

// Fungsi untuk menampilkan detail alat musik dan tarian (sesuaikan dengan data provinsi)
function showDetails(region) {
    const daerahData = {
        "ID-AC": {
            title: "Aceh",
            description: "Aceh memiliki alat musik tradisional seperti Serune Kale, dan tarian Saman.",
            image: "path/to/aceh-image.jpg",  // Ganti dengan path gambar
            sound: "path/to/aceh-sound.mp3"   // Ganti dengan path suara
        }
        // Tambahkan data untuk setiap provinsi lainnya
    };

    const data = daerahData[region];
    if (data) {
        document.getElementById("daerah-title").innerText = data.title;
        document.getElementById("description").innerText = data.description;
        
        const alatMusikImage = document.getElementById("alat-musik-image");
        alatMusikImage.src = data.image;
        alatMusikImage.style.display = "block";
        
        document.getElementById("play-sound").style.display = "inline-block";
        document.getElementById("play-sound").setAttribute("data-sound", data.sound);
    }
}

// Fungsi untuk memainkan suara alat musik
function playSound() {
    const soundFile = document.getElementById("play-sound").getAttribute("data-sound");
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
}

// Fungsi untuk menghentikan suara alat musik
function stopSound() {
    const soundFile = document.getElementById("play-sound").getAttribute("data-sound");
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.pause();
        audio.currentTime = 0;  // Kembali ke awal suara
    }
}
