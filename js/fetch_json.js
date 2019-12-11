var data = [{
        "name": "Laundry Mempawah 1",
        "alamat": "Jl. Mane Pak Kasih, Terusan, Mempawah Hilir, Pontianak, Kalimantan Barat 78912, Indonesia",
        "latitude": "0.3706089640472448",
        "longitude": "108.95238731056452",
        "img": "src/img/laundry/gbr_mph1.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Mempawah 2",
        "alamat": "Unnamed Road, Terusan, Terusan, Mempawah Hilir, Pontianak, West Kalimantan 78912, Indonesia",
        "latitude": "0.37444913563215804",
        "longitude": "108.95339313894509",
        "img": "src/img/laundry/gbr_mph2.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Mempawah 3",
        "alamat": "Unnamed Road, Terusan, Mempawah Hilir, Pontianak, Kalimantan Barat 78912, Indonesia",
        "latitude": "0.37297462259195674",
        "longitude": "108.94974768161774",
        "img": "src/img/laundry/gbr_mph3.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Mempawah 4",
        "id": "27",
        "alamat": "Jl. Raden Kusno, Terusan, Mempawah Hilir, Pontianak, Kalimantan Barat 78912, Indonesia",
        "latitude": "0.3709200937786436",
        "longitude": "108.94959814846516",
        "img": "src/img/laundry/gbr_mph4.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Pontianak 1",
        "alamat": "Universitas Tanjungpura, Jl. Profesor Dokter H. Hadari Nawawi, Bansir Laut, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78115, Indonesia",
        "latitude": "-0.062234948258537134",
        "longitude": "109.34434387832881",
        "img": "src/img/laundry/gbr_ptk1.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Pontianak 2",
        "alamat": "Jl. Pemda 3 No.57, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78116, Indonesia",
        "latitude": "-0.07544515336882678",
        "longitude": "109.34815496206284",
        "img": "src/img/laundry/gbr_ptk2.jpg",
        "opsional": "Uji Coba"
    },
    {
        "name": "Laundry Pontianak 3",
        "alamat": "Jl. Purnama II, Kota Baru, Pontianak Sel., Kota Pontianak, Kalimantan Barat 78115, Indonesia",
        "latitude": "-0.0685750156833886",
        "longitude": "109.31657932698727",
        "img": "src/img/laundry/gbr_ptk3.jpg",
        "opsional": "Uji Coba"
    }
];
proses_fetch(data);

function proses_fetch(response) {
    for (var l of response) {
        var pesan = "<span class='gbr' id='gbr' alt='gambarnya' title='gambarnya'></span><div class='alas'>" +
            "<h1>" + l.name + "</h1>" + l.alamat + "</div>";
        var opsional = {
            'maxWidth': '300',
            'className': 'popup-nizwar'
        }
        localStorage.setItem('lokasi', JSON.stringify(response));
        L.marker([l.latitude, l.longitude], { icon: laundryLocationIcon }).bindPopup(pesan, opsional).addTo(map).on("click", event_Click);
    }

}

var lokasi = JSON.parse(localStorage.getItem('lokasi'));

function event_Click(e) {
    var n = cek_lokasi(e.latlng.lat, e.latlng.lng);
    if (n >= 0) {
        setTimeout(function() {
            var gbr = document.getElementById('gbr');
            if (gbr != null) {
                gbr.style.backgroundImage = "url(" + lokasi[n]['img'] + ")";
            }
        }, 1000);
    }
}

function cek_lokasi(x, y) {
    for (var i = 0; i < lokasi.length; i++) {
        if (lokasi[i]['latitude'] == x && lokasi[i]['longitude'] == y) {
            return i;
        }
    }
    return -1;
}