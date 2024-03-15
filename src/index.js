import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDdUUt-HlzdFy21izKRztJANcBWwMS01ug",
  authDomain: "chat-app-frontend-23321.firebaseapp.com",
  projectId: "chat-app-frontend-23321",
  storageBucket: "chat-app-frontend-23321.appspot.com",
  messagingSenderId: "1038179002068",
  appId: "1:1038179002068:web:f773e0526344cdc6c07d41",
  measurementId: "G-BMG9RK0WPR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
