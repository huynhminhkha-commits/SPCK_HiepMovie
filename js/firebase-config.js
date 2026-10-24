// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyQTYSyBjwk-pKdFQgKQWFVpNzafVbMms",
  authDomain: "spck-hiep.firebaseapp.com",
  projectId: "spck-hiep",
  storageBucket: "spck-hiep.firebasestorage.app",
  messagingSenderId: "417235787688",
  appId: "1:417235787688:web:45dbdbb36000ed0811879d",
  measurementId: "G-PH8YBFZJJJ"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage();
