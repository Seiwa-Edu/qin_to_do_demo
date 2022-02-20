import app from "./firebase";
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { User } from "framework/common";

const provider = new GoogleAuthProvider();

export function login(): void {
  const auth = getAuth(app);
  signInWithRedirect(auth, provider);
}

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const auth = getAuth(app);

  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo: User | null = user
      ? {
          displayName: user?.displayName,
          email: user?.email,
        }
      : null;
    callback(userInfo);
  });
};
