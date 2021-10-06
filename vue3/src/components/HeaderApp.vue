<template>
    <div class="headerApp">
        <span><router-link to="/calendar">Calendar</router-link></span>
        <span><router-link to="/dc-hero">DC Hero</router-link></span>
        <span><router-link to="/markdown">Markdown</router-link></span>
        <span><router-link to="/slider-carousel">Slider</router-link></span>
        <span><router-link to="/calculator">calculator</router-link></span>
        <span><router-link to="/reuseable-model">Model</router-link></span>
        <span><router-link to="/chat">Chat</router-link></span>
        <span v-if="!isLoggedIn" v-on:click="$emit('open-login-modal')" style="color:white;cursor:pointer">Login</span>
        <span v-else v-on:click="logout" style="color:white;cursor:pointer">Logout</span>
    </div>
</template>
<script>
import {initializeApp} from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDfTvgRsaEeHi3wd2b4_yj3y70BTpr7UUY",
    authDomain: "vue3-ca3dd.firebaseapp.com",
    projectId: "vue3-ca3dd",
    storageBucket: "vue3-ca3dd.appspot.com",
    messagingSenderId: "72372233867",
    appId: "1:72372233867:web:1d74ed18d74ec69b35968e"
};
initializeApp(firebaseConfig);

const auth =getAuth();
export default {
    props:['isLoggedIn'],
    methods:{
        logout(){
            signOut(auth)
            .then(() => {})
            .catch(() => {});
        }
    },
}
</script>

