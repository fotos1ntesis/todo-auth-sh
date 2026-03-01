import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADT3Unttl2SYzL81XOqlrd_3Dntc7dd2I",
    authDomain: "auth-project-a3435.firebaseapp.com",
    projectId: "auth-project-a3435",
    storageBucket: "auth-project-a3435.firebasestorage.app",
    messagingSenderId: "232789626494",
    appId: "1:232789626494:web:3091b84120d0009fe2522f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

