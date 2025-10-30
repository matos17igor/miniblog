import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3RNWNymmf-dGpiHH6npjVYe07hDeZnOY",
  authDomain: "miniblog-82d6d.firebaseapp.com",
  projectId: "miniblog-82d6d",
  storageBucket: "miniblog-82d6d.firebasestorage.app",
  messagingSenderId: "353027058713",
  appId: "1:353027058713:web:4d580997b18913708e0e88",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
