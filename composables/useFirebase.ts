import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import {getFirestore,onSnapshot,collection,doc,deleteDoc,setDoc,addDoc,orderBy,query, getDocs} from 'firebase/firestore';

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
      // ..x
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

export const addCollection = async (coll, object) => {
  const nuxtApp = useNuxtApp();
  const db = nuxtApp.$firestoreDb;
  await addDoc(collection(db, coll),{
    ...object,
  });
}

export const updateCollection = async (coll, object, id) => {
  const nuxtApp = useNuxtApp();
  const db = nuxtApp.$firestoreDb;
  await setDoc(doc(db, coll, id),{
    ...object,
  });
}

export const deleteCollection = async (coll, id) => {
  const nuxtApp = useNuxtApp();
  const db = nuxtApp.$firestoreDb;
  await deleteDoc(doc(db, coll ,id));
}

export const getCollectionList = async (coll) => {
  const nuxtApp = useNuxtApp();
  const db = nuxtApp.$firestoreDb;
  const querySnapshot = await getDocs(collection(db, coll));
  const list = [];
  querySnapshot.forEach((doc) => {
    const data = {
      id: doc.id,
      ...doc.data(),
    }
    list.push(data);
  });
  return list;
}
