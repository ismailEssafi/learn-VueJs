<template>
    <button @click="googleLogin" class="loginGoogle">Login With Google</button>
</template>

<script>
import { getAuth,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
const auth=getAuth();
export default {
    methods:{
        googleLogin(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then(() => {
                this.$emit('close-login-google')
            });
        }
    }

}
</script>

<style>

</style>