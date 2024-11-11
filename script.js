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
                document.getElementById("daerah -title").innerText = daerahData.title;
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
