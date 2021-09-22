<template>
        <div v-on:click="$emit('close-login')" class="login-modal"></div>
        <div class="login">
            <div class="border">    
                <div class="title-login">Login</div>
                <div>
                    <form v-on:submit.prevent="submit">
                        <div class="input">
                            <label>Email or Username</label>
                            <input type="text" v-model="form.email" placeholder="Enter your email or username">
                        </div>
                        <div class="input">
                            <label>Password</label>
                            <input type="password" v-model="form.password" placeholder="Enter your password">
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
import firebase from '../utilities/firebase';


export default {
    data(){
        return {
            form :{
                email: "",
                password: ""
            }
        }
    },
    methods :{
        submit(){

            console.log(firebase);
            const auth =firebase.default.getAuth();
            console.log(auth)

            // firebase.default.auth().signInWithEmailAndPassword(this.form.email,this.form.password)
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch((e)=>{
            //     console.log(e)
            // })
        }
    }

}
</script>

<style>

</style>