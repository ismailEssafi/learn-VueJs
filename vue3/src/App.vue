<template>
  <HeaderApp v-on:open-login-modal="isOpen=true"/>
  <router-view></router-view>
  <LoginModal v-if="isOpen" v-on:close-login="isOpen=false"/>
</template>

<script>
import HeaderApp from "./components/HeaderApp";
import LoginModal from "./components/LoginModal.vue"
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export default {
  components: {HeaderApp,LoginModal },
  data(){
    return {
      isOpen:false,
      isLoggedIn:false,
      authUser :{}
    }
  },
  mounted(){
      onAuthStateChanged(auth, (user) => {
        if (user) {
            this.isLoggedIn=true;
            this.authUser=user;
        } else {
            this.isLoggedIn=false;
            this.authUser={};
        }
      });

  }
};
</script>
