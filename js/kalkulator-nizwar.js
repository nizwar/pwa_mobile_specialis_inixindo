//Ditulis oleh Mochamad Nizwar Syafuan :)
//----------------------------------------//
var kalkulator = document.getElementById('kalkulator');
navView.style.left = "-320px";

var kredit = "Created by Nizwar";
function clearKalkulator() {
 txtKalkulator.value = 0;
}

function resetKalkulator() {
 clearKalkulator();
 lblHitung.innerHTML = kredit;
 hitungan = 0;
 tempPenambahan = "";
}

function Kalkulator(show) {
 if (show) {
  kalkulator.style.display = "block";
  blank.style.display = "block";
 } else {
  kalkulator.style.display = "none";
  blank.style.display = "none";
 }
}

function SimulasiNavBar(mode) {
 kalkulator.style.display = "none";
 if (mode == 1) {
  navView.style.left = "0px";
  blank.style.display = "block";
 } else {
  navView.style.left = "-320px";
  blank.style.display = "none";
 }
}

var txtKalkulator = document.getElementById('txtbox-kalk');
var lblHitung = document.getElementById('deskripsi-kalk');

txtKalkulator.value = 0;
//Disini fungsi kalkulator
var tempPenambahan = "";
var hitungan = 0;

function catatHitungan(simbol) {
 var catatan = "";
 if (txtKalkulator.value == "0") return;
 hitungan += parseFloat(txtKalkulator.value);
 lblHitung.style.textAlign = "right";
 if (tempPenambahan == "") {
  tempPenambahan += txtKalkulator.value;
 } else {
  tempPenambahan += " + " + txtKalkulator.value;
 }

 if (tempPenambahan.length > 35) {
  catatan = "..." + tempPenambahan.substr(tempPenambahan.length - 30, tempPenambahan.length);
 } else {
  catatan = tempPenambahan;
 }
 lblHitung.innerHTML = catatan + " = " + hitungan;
 txtKalkulator.value = 0;
}

function samaDengan() {
 hitungan += parseFloat(txtKalkulator.value);
 var htngan = hitungan;
 resetKalkulator();
 txtKalkulator.value = htngan;
}

function masukanAngka(angka) {
 if (txtKalkulator.value == 0) {
  txtKalkulator.value = angka;
  return;
 }
 txtKalkulator.value = txtKalkulator.value + angka;
}

function hapusKalkulator() {
 if (txtKalkulator.value > 0) {
  txtKalkulator.value = txtKalkulator.value.substr(0, txtKalkulator.value.length - 1);
 } else {
  txtKalkulator.value = 0
 }
}