// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import {
//   collection,
//   getDocs,
//   getFirestore,
//   setDoc,
//   doc,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3QRxs7oh-GzFp8jRs0fPKljCD3K8g4Fw",
  authDomain: "project-6-586f9.firebaseapp.com",
  projectId: "project-6-586f9",
  storageBucket: "project-6-586f9.appspot.com",
  messagingSenderId: "461463694857",
  appId: "1:461463694857:web:0f917d7786031f3b2712d8",
  measurementId: "G-J2RTBF7ZT2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.getElementById("contact-form").addEventListener("submit", submitForm);

const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validatePhoneNumber = (phoneNumber) => {
  return rePhone.test(phoneNumber);
};

const validateEmail = (email) => {
  return re.test(email);
};

async function submitForm(e) {
  e.preventDefault();

  var firstName = document.getElementById("ime").value;
  var lastName = document.getElementById("prezime").value;
  var mobileNumber = document.getElementById("mobitel").value;
  var email = document.getElementById("email").value;
  var question = document.getElementById("pitanje").value;

  if (
    firstName.length === 0 ||
    lastName.length === 0 ||
    email.length === 0 ||
    question.length === 0
  ) {
    return console.log("Error field not input");
  }

  if (validatePhoneNumber(mobileNumber) === false)
    return console.log("Phone number not valid.");

  if (validateEmail(email) === false) {
    return console.log("Email not valid");
  }

  await addDoc(collection(db, "questions"), {
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    email: email,
    question: question,
  });

  console.log("Success");
}

const getInputValue = (id) => {
  document.getElementById(id).value;
};
