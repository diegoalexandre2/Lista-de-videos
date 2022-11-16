import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByjTg5galHVCcUZO0pM1CeD4PCvljQ-VQ",
  authDomain: "video-15fe2.firebaseapp.com",
  projectId: "video-15fe2",
  storageBucket: "video-15fe2.appspot.com",
  messagingSenderId: "574776305011",
  appId: "1:574776305011:web:9b7484806edbfc67421106"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage (app);
export const db = getFirestore(app);