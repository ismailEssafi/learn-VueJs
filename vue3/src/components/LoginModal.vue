<template>
        <div v-on:click="$emit('close-login')" class="login-modal"></div>
        <div class="login">
            <div class="border">    
                <div class="title-login">Login</div>
                <GoogleLogin @close-login-google="$emit('close-login')"/>
                    <form v-on:submit.prevent="submit">
                        <div class="input">
                            <label>Email or Username</label>
                            <input type="text" v-model="form.email" ref="emailRef" placeholder="Enter your email or username">
                        </div>
                        <div class="input">
                            <label>Password</label>
                            <input type="password" v-model="form.password" placeholder="Enter your password">
                        </div>
                        <button class="loginButton" type="submit">
                            <span v-if="!isLoading">login</span>
                            <span v-else>loading...</span>
                        </button>
                    </form>
            </div>
        </div>
</template>

<script>
import GoogleLogin from './login/GoogleLogin';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export default {
    components:{GoogleLogin},
    data(){
        return {
            form :{
                email: "",
                password: ""
            },
            isLoading:false
        }
    },
    methods :{
        submit(){
            this.isLoading=true;
            signInWithEmailAndPassword(auth,this.form.email,this.form.password)
            .then(()=>{
                this.$emit('close-login')
                this.isLoading=false;
            })
            .catch((e)=>{
                console.log(e);
                this.isLoading=false;

            })
        }
    },
    mounted(){
        this.$refs.emailRef.focus();
    }

}
</script>

<style>

</style>