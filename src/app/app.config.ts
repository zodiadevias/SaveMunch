import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBb0oALSCaY8uQSKob79SgSzOdGchN5TgU",
  authDomain: "blockvote-a35f5.firebaseapp.com",
  projectId: "blockvote-a35f5",
  storageBucket: "blockvote-a35f5.firebasestorage.app",
  messagingSenderId: "549125708592",
  appId: "1:549125708592:web:435120aca237cb4e5446f5",
  measurementId: "G-34M5G5J5L7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
