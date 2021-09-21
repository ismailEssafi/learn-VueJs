<template>
        <div v-on:click="$emit('close-login')" class="login-modal"></div>
        <div class="login">
            <div class="border">    
                <div class="title-login">Login</div>
                <div>
                    <form>
                        <div class="input">
                            <label>Email or Username</label>
                            <input type="text" placeholder="Enter your email or username">
                        </div>
                        <div class="input">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password">
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            isOpen:true,
        }
    }

}
</script>

<style>

</style>