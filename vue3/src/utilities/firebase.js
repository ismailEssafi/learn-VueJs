
import * as fireInit from 'firebase/app';
import * as firebase from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfTvgRsaEeHi3wd2b4_yj3y70BTpr7UUY",
    authDomain: "vue3-ca3dd.firebaseapp.com",
    projectId: "vue3-ca3dd",
    storageBucket: "vue3-ca3dd.appspot.com",
    messagingSenderId: "72372233867",
    appId: "1:72372233867:web:1d74ed18d74ec69b35968e"
};

fireInit.initializeApp(firebaseConfig);

export default {
    firebase,
}
