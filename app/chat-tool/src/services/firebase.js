import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGQsM7SnDHwYvMB802pLcNEZLg8MrL7rE",
    authDomain: "chat-tool-663b7.firebaseapp.com",
    projectId: "chat-tool-663b7",
    storageBucket: "chat-tool-663b7.appspot.com",
    messagingSenderId: "633847513330",
    appId: "1:633847513330:web:8fa8ec21a37e6e04a1d06b",
    measurementId: "G-5PFX4ZE43W"
};
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };