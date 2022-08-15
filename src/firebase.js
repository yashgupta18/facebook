//use only reqd librarires
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDQgkajNu4ygoMB9s5ohQDuVqShOzhslOA",
  authDomain: "facebook-clone--71829.firebaseapp.com",
  projectId: "facebook-clone--71829",
  storageBucket: "facebook-clone--71829.appspot.com",
  messagingSenderId: "837214755490",
  appId: "1:837214755490:web:4df7f6f208f4b5e37595fb",
  measurementId: "G-MNF275NEFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };
export default db;
