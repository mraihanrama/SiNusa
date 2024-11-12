 // Data alat musik dan tarian
const backButton = document.getElementById("back-button");
// Event listener saat peta SVG di-load
document.getElementById("indonesia-map").addEventListener("load", function () {
    const svgDoc = this.contentDocument;

    // Mengambil data dari dataDaerah.json
    fetch("dataDaerah.json")
        .then(response => response.json())
        .then(dataDaerah => {
            // Menambahkan event klik pada setiap provinsi yang ada dalam data
            for (const id in dataDaerah) {
                const region = svgDoc.getElementById(id);
                if (region) {
                    region.addEventListener("click", function () {
                        showDetails(id, dataDaerah); // Kirim dataDaerah ke showDetails

                        // Menghapus kelas terpilih dari elemen sebelumnya
                        svgDoc.querySelectorAll(".selected-region").forEach(el => el.classList.remove("selected-region"));

                        // Menambahkan kelas terpilih ke elemen saat ini
                        region.classList.add("selected-region");
                    });
                }
            }
        })
        .catch(error => console.error("Gagal memuat data daerah:", error));
});

// Fungsi untuk menampilkan detail
function showDetails(id, dataDaerah) {
    const regionData = dataDaerah[id];
    if (regionData) {
        // Contoh: tampilkan title dan description
        console.log("Title:", regionData.title);
        console.log("Description:", regionData.description);
        // Anda bisa menambahkan logika lain untuk menampilkan data ini di UI
    }
}
let audio; // Variabel audio untuk kontrol suara

function showDetails(regionId) {
    const daerahData = dataDaerah[regionId];
    if (daerahData) {
        document.getElementById("daerah-title").innerText = daerahData.title;
        document.getElementById("description").innerText = daerahData.description;
        
        const alatMusikImage = document.getElementById("alat-musik-image");
        alatMusikImage.src = daerahData.image;
        alatMusikImage.style.display = "block";
        
        const playButton = document.getElementById("play-sound");
        playButton.style.display = "inline-block";
        playButton.setAttribute("data-sound", daerahData.sound);

        document.getElementById("stop-sound").style.display = "inline-block";
    }
}
function goBack() {
    window.location.href = 'index.html';
}

function playSound() {
    const soundFile = document.getElementById("play-sound").getAttribute("data-sound");
    if (soundFile) {
        if (audio) audio.pause(); // Menghentikan suara sebelumnya jika ada
        audio = new Audio(soundFile);
        audio.play();
    }
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Mengembalikan ke awal
    }
}
