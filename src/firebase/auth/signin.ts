import firebase_app from "../config";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(): Promise<any> {
    let result = null,
        error = null;
    try {
        result = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (e) {
        error = e;
    }

    return { result, error };
}
