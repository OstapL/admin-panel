import { initializeApp } from "firebase/app";


export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: "admin-panel-3f4e5.firebaseapp.com",
    projectId: "admin-panel-3f4e5",
    storageBucket: "admin-panel-3f4e5.appspot.com",
    messagingSenderId: "42670242007",
    appId: "1:42670242007:web:fb99b54c4d94a80a499892"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
})
