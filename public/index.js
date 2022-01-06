/*var button = document.getElementById('button');

button.addEventListener("click", function(){
    console.log("clicked");
})*/

const haircutFemale = document.getElementById("haircuts-female");
const toggleButtonFemale = document.getElementById("button-haircut-female");

toggleButtonFemale.addEventListener("click", function () {
  haircutFemale.classList.toggle("d-none");
});

const fanFemale = document.getElementById("fan-female");
const toggleButtonFemaleFan = document.getElementById("button-fan-female");

toggleButtonFemaleFan.addEventListener("click", () => {
  fanFemale.classList.toggle("d-none");
});

const coloring1 = document.getElementById("coloring-1");
const toggleButtonFemaleColor1 = document.getElementById("coloring-our");

toggleButtonFemaleColor1.addEventListener("click", function () {
  coloring1.classList.toggle("d-none");
});

const haircutMale = document.getElementById("haircuts-male");
const toggleButtonMale = document.getElementById("button-haircut-male");

toggleButtonMale.addEventListener("click", function () {
  haircutMale.classList.toggle("d-none");
});

const coloring2 = document.getElementById("coloring-2");
const toggleButtonFemaleColor2 = document.getElementById("coloring-yours");

toggleButtonFemaleColor2.addEventListener("click", function () {
  coloring2.classList.toggle("d-none");
});

const haircutPramen = document.getElementById("haircut-pramen");
const toggleButtonPramen = document.getElementById("button-haircut-pramen");

toggleButtonPramen.addEventListener("click", function () {
  haircutPramen.classList.toggle("d-none");
});

const haircutVal = document.getElementById("haircut-val");
const toggleButtonVal = document.getElementById("button-haircut-val");

toggleButtonVal.addEventListener("click", function () {
  haircutVal.classList.toggle("d-none");
});

const firebaseConfig = {
  apiKey: "AIzaSyD3QRxs7oh-GzFp8jRs0fPKljCD3K8g4Fw",
  authDomain: "project-6-586f9.firebaseapp.com",
  projectId: "project-6-586f9",
  storageBucket: "project-6-586f9.appspot.com",
  messagingSenderId: "461463694857",
  appId: "1:461463694857:web:76da7d68178db4ba2712d8",
  measurementId: "G-4PQGVNBYT7",
};
