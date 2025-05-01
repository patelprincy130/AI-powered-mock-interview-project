// Import the functions you need from the SDKs you need
import {getApp, getApps} from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase-admin/auth';
// import {getFirestore} from 'firebase-admin/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZcqYl1icHsSzUdWsjWA2CdmMEG4Y-JI",
  authDomain: "prepwise-10a13.firebaseapp.com",
  projectId: "prepwise-10a13",
  storageBucket: "prepwise-10a13.firebasestorage.app",
  messagingSenderId: "895925705807",
  appId: "1:895925705807:web:04a1269c0b2df7703f9e3a",
  measurementId: "G-XWFYV34KS6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();


export const auth=getAuth(app);
export const db=getFirestore(app);