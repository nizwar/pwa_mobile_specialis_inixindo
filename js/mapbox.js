var myLocationIcon = L.icon({
    iconUrl:'src/img/icon/me.png',
    iconSize:[35,50],
    iconAnchor:   [17, 50],
    popupAnchor:[0,-60]
});

var laundryLocationIcon = L.icon({
    iconUrl:    'src/img/icon/laundry_marker.png',
    iconSize:   [35,50],
    iconAnchor: [17, 50],
    popupAnchor:[0,-53]
});

//Bagian Inisial Map gajadi pake mapboxgl 
mapboxgl.accessToken = 'pk.eyJ1Ijoibml6d2FyIiwiYSI6ImNqbzJpMG1vNzBta3Qza210bjU3eG1lMGUifQ.28m4gM6M7inknP_vQjFEuA';
var map = L.map('map');
map.setView([0.3706089640472448,108.95238731056452], 6); 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox.streets'
    }).addTo(map);


//Minta GPS
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(myPosition); //Cek posisi dan manggil myPosition
}else{
    console.log("Browser tidak support GPS");
}

function myPosition(position){  
    L.marker([position.coords.latitude,position.coords.longitude], 
        {icon:myLocationIcon}).bindPopup("Anda berada disini")
        .addTo(map);

    map.setView([position.coords.latitude,position.coords.longitude], 13);
}