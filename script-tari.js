// Mengambil elemen-elemen dari DOM
const descriptionElement = document.getElementById('description');
const tarianImageElement = document.getElementById('tarian-image');
const playVideoButton = document.getElementById('play-video');
const stopVideoButton = document.getElementById('stop-video');
const backButton = document.getElementById('back-button');

// Menyimpan data tarian
let dataTari = {};
let videoElement = null; // Menyimpan elemen video

// Event listener saat peta SVG di-load
document.getElementById("indonesia-map").addEventListener("load", function () {
    const svgDoc = this.contentDocument;

    // Mengambil data dari dataTari.json
    fetch("data/dataTari.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Gagal memuat data");
            }
            return response.json();
        })
        .then(dataDaerah => {
            dataTari = dataDaerah; // Simpan data ke dataTari

            // Menambahkan event klik pada setiap provinsi yang ada dalam data
            for (const id in dataTari) {
                const region = svgDoc.getElementById(id);
                if (region) {
                    region.addEventListener("click", function () {
                        showDetails(id); // Kirim id ke showDetails

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

// Fungsi untuk menampilkan detail tarian
function showDetails(daerahId) {
    const daerahData = dataTari[daerahId];
    if (daerahData) { // Pastikan data ada
        document.getElementById("daerah-title").innerText = daerahData.title;
        descriptionElement.textContent = daerahData.description;
        tarianImageElement.src = daerahData.image || ''; // Jika ada gambar
        tarianImageElement.style.display = daerahData.image ? 'block' : 'none'; // Tampilkan gambar jika ada
        playVideoButton.style.display = 'inline-block'; // Tampilkan tombol play video
        stopVideoButton.style.display = 'none'; // Sembunyikan tombol stop video
        backButton.style.display = 'inline-block'; // Tampilkan tombol kembali
    } else {
        console.log('Data tidak ditemukan untuk ID:', daerahId);
    }
}

// Fungsi untuk memutar video
function playVideo() {
    const daerahId = Object.keys(dataTari).find(id => descriptionElement.textContent.includes(dataTari[id].description));
    if (daerahId) {
        const videoUrl = dataTari[daerahId].video;
        if (videoUrl) {
            if (!videoElement) { // Jika elemen video belum ada, buat baru
                videoElement = document.createElement('video');
                videoElement.controls = true;
                videoElement.autoplay = true;
                videoElement.id = 'tarian-video';
                document.body.appendChild(videoElement);
            }
            videoElement.src = videoUrl; // Set sumber video
            videoElement.play(); // Putar video
            playVideoButton.style.display = 'none'; // Sembunyikan tombol play
            stopVideoButton.style.display = 'inline-block'; // Tampilkan tombol stop
        }
    }
}

// Fungsi untuk menghentikan video
function stopVideo() {
    if (videoElement) {
        videoElement.pause();
        videoElement.src = ''; // Hapus sumber video
        stopVideoButton.style.display = 'none'; // Sembunyikan tombol stop
        playVideoButton.style.display = 'inline-block '; // Tampilkan tombol play
    }
}

// Fungsi untuk kembali ke tampilan awal
function goBack() {
    window.location.href = 'index.html';
}