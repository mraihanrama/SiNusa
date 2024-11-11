// Data alat musik dan tarian
const dataDaerah = {
    "ID-AC": {
        title: "Aceh",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },"ID-BA": {
        title: "Bali",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },"ID-BB": {
        title: "Bangka Belitung",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },"ID-BE": {
        title: "Bengkulu",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },"ID-BT": {
        title: "Banten",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-GO": {
        title: "Gorontalo",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-JA": {
        title: "Jambi",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-JB": {
        title: "Jawa Barat",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-JI": {
        title: "Jawa Timur",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-JK": {
        title: "Jakarta",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-JT": {
        title: "Jawa Tengah",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-KB": {
        title: "Kalimantan Barat",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    "ID-KI": {
        title: "Kalimantan Timur",
        description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
        image: "images/serune-kalee.png",
        sound: "sounds/serune-kalee.mp3"
    },
    // Tambahkan data untuk provinsi lain sesuai ID-nya
};

// Event listener saat peta SVG di-load
document.getElementById("indonesia-map").addEventListener("load", function () {
    const svgDoc = this.contentDocument;
    
    // Menambahkan event klik pada setiap provinsi yang ada dalam data
    for (const id in dataDaerah) {
        const region = svgDoc.getElementById(id);
        if (region) {
            region.addEventListener("click", function () {
                showDetails(id);
                
                // Menghapus kelas terpilih dari elemen sebelumnya
                svgDoc.querySelectorAll(".selected-region").forEach(el => el.classList.remove("selected-region"));
                
                // Menambahkan kelas terpilih ke elemen saat ini
                region.classList.add("selected-region");
            });
        }
    }
});

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
