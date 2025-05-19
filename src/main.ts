import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';

const firebaseConfig = {
  apiKey: "AIzaSyAcJrNYQh39fScVhn6jWJSv5GHjLgdX87g",
  authDomain: "savemunch-9cd09.firebaseapp.com",
  projectId: "savemunch-9cd09",
  storageBucket: "savemunch-9cd09.firebasestorage.app",
  messagingSenderId: "9541239258",
  appId: "1:9541239258:web:61d0f66babba9668e600e3",
  measurementId: "G-4WQHFMC38Q"
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

