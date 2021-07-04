import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDdGqEV5HceDv6q1wTOIVY1kKrk_vOEuK8",
    authDomain: "chat-app-94a58.firebaseapp.com",
    projectId: "chat-app-94a58",
    storageBucket: "chat-app-94a58.appspot.com",
    messagingSenderId: "1098877967713",
    appId: "1:1098877967713:web:6e88057681665b3de5b920",
  })
  .auth();
