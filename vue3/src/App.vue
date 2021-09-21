<template>
  <HeaderApp v-on:open-login-modal="isOpen=true"/>
  <router-view></router-view>
  <LoginModal v-if="isOpen" v-on:close-login="isOpen=false"/>
</template>

<script>
import HeaderApp from "./components/HeaderApp";
import LoginModal from "./components/LoginModal.vue"

export default {
  components: {HeaderApp,LoginModal },
  data(){
    return {
      isOpen:true
    }
  }
};
</script>
