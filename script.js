 // Data alat musik dan tarian
        const dataDaerah = {
            "ID-AC": {
                title: "Aceh",
                description: "Serune Kalee adalah alat musik khas Aceh. Tari tradisionalnya antara lain Tari Saman.",
                image: "images/serune-kalee.png",
                sound: "sounds/serune-kalee.mp3"
            },
            "ID-BA": {
                title: "Bali",
                description: "Gamelan adalah alat musik khas Bali. Tari tradisionalnya antara lain Tari Kecak.",
                image: "images/gamelan-bali.png",
                sound: "sounds/gamelan-bali.mp3"
            },
            "ID-BB": {
                title: "Bangka Belitung",
                description: "Tari Belibis adalah tarian tradisional Bangka Belitung. Alat musik yang digunakan adalah Gendang.",
                image: "images/gendang-bangka.png",
                sound: "sounds/gendang-bangka.mp3"
            },
            "ID-BE": {
                title: "Bengkulu",
                description: "Rendang adalah alat musik khas Bengkulu. Tari tradisionalnya adalah Tari Andun.",
                image: "images/rendang-bengkulu.png",
                sound: "sounds/rendang-bengkulu.mp3"
            },
            "ID-BT": {
                title: "Banten",
                description: "Tanjidor adalah alat musik khas Banten. Tari tradisionalnya adalah Tari Topeng.",
                image: "images/tanjidor-banten.png",
                sound: "sounds/tanjidor-banten.mp3"
            },
            "ID-GO": {
                title: "Gorontalo",
                description: "Alat musik Bili-Bili adalah khas Gorontalo. Tari tradisionalnya adalah Tari Dero.",
                image: "images/bili-bili-gorontalo.png",
                sound: "sounds/bili-bili-gorontalo.mp3"
            },
            "ID-JA": {
                title: "Jambi",
                description: "Alat musik Gambus adalah khas Jambi. Tari tradisionalnya adalah Tari Piring.",
                image: "images/gambus-jambi.png",
                sound: "sounds/gambus-jambi.mp3"
            },
            "ID-JB": {
                title: "Jawa Barat",
                description: "Angklung adalah alat musik khas Jawa Barat. Tari tradisionalnya antara lain Tari Jaipong.",
                image: "preset/angklung.png",
                sound: "preset/suara angklung.mp3"
            },
            "ID-JI": {
                title: "Jawa Timur",
                description: "Keroncong adalah alat musik khas Jawa Timur. Tari tradisionalnya adalah Tari Remo.",
                image: "images/keroncong-jawa-timur.png",
                sound: "sounds/keroncong-jawa-timur.mp3"
            },
            "ID-JK": {
                title: "Jakarta",
                description: "Betawi memiliki alat musik Ondel-Ondel. Tari tradisionalnya adalah Tari Topeng Betawi.",
                image: "images/ondel-ondel-jakarta.png",
                sound: "sounds/ondel-ondel-jakarta.mp3"
            },
            "ID-JT": {
                title: "Jawa Tengah",
                description: "Gamelan adalah alat musik khas Jawa Tengah. Tari tradisionalnya adalah Tari Gambyong.",
                image: "images/gamelan-jawa-tengah.png",
                sound: "sounds/gamelan-jawa-tengah.mp3"
            },
            "ID-KB": {
                title: "Kalimantan Barat",
                description: "Alat musik Sape adalah khas Kalimantan Barat. Tari tradisionalnya adalah Tari Dayak.",
                image: "images/sape-kalimantan-barat.png",
                sound: "sounds/sape-kalimantan-barat.mp3"
            },
            "ID-KI": {
                title: "Kalimantan Timur",
                description: "Alat musik Kecapi adalah khas Kalimantan Timur. Tari tradisionalnya adalah Tari Perang.",
                image: "images/kecapi-kalimantan-timur.png",
                sound: "sounds/kecapi-kalimantan-timur.mp3"
            },
            // Tambahkan data untuk provinsi lain sesuai ID-nya
        };

        // Fungsi untuk menampilkan detail
        function showDetails(id) {
            const daerah = dataDaerah[id];
            if (daerah) {
                document.getElementById("daerah-title").innerText = daerah.title;
                document.getElementById("description").innerText = daerah.description;
                const image = document.getElementById("alat-musik-image");
                image.src = daerah.image;
                image.style.display = "block";
                document.getElementById("play-sound").style.display = "inline-block";
                document.getElementById("stop-sound").style.display = "inline-block";
            }
        }

        // Fungsi untuk memutar suara
        let audio;
        function playSound() {
            const id = document.getElementById("daerah-title").innerText;
            const daerah = Object.keys(dataDaerah).find(key => dataDaerah[key].title === id);
            if (daerah) {
                audio = new Audio(dataDaerah[daerah].sound);
                audio.play();
            }
        }

        // Fungsi untuk menghentikan suara
        function stopSound() {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }

        // Event listener saat peta SVG di-load
        document.getElementById("indonesia-map").addEventListener("load", function () {
            const svgDoc = this.contentDocument;
            for (const id in dataDaerah) {
                const region = svgDoc.getElementById(id);
                if (region) {
                    region.addEventListener("click", function () {
                        console.log(`Clicked on region: ${id}`);
                        showDetails(id);
                        svgDoc.querySelectorAll(".selected-region").forEach(el => el.classList.remove("selected-region"));
                        region.classList.add("selected-region");
                    });
                } else {
                    console.warn(`Region not found: ${id}`);
                }
            }
        });
