import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
  
const firebaseConfig = {
  apiKey: "AIzaSyDTctUvyyItJuaEPAQDTx1MFJe7KCZzq5o",
  authDomain: "fir-react-upload-a24db.firebaseapp.com",
  projectId: "fir-react-upload-a24db",
  storageBucket: "fir-react-upload-a24db.appspot.com",
  messagingSenderId: "914907297037",
  appId: "1:914907297037:web:75c1b2d8485b3184ba2c44",
  measurementId: "G-X91G0WC8YJ",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
