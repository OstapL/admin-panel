import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export const createUser = async (email: string, password: string | number) => {
  const auth = getAuth();
  const credations = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return credations;
}

export const signInUser = async (email: string, password: string | number) => {
  const auth = getAuth();
  const credations = await signInWithEmailAndPassword(
      auth, email, password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  console.log(credations);
  return credations;
}

export const initUser = async () => {
  const auth = getAuth();
  const { setLoginData, resetLoginData } = useUserStore();
  setLoginData(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginData(user);
      // ...
    } else {
      // User is signed out
      resetLoginData();
    }
  });
}

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  return result;
}
