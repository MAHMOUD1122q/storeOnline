
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDAl89BlrN5mbJazi5MyG7SMiK1lPNf3N8",
  authDomain: "storeonline-a34aa.firebaseapp.com",
  projectId: "storeonline-a34aa",
  storageBucket: "storeonline-a34aa.appspot.com",
  messagingSenderId: "932161055539",
  appId: "1:932161055539:web:98a6e54a14742fefde6c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;