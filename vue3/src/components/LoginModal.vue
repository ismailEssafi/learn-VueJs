<template>
    <div v-if="isOpen">
        <div v-on:click="$emit('close-login')" class="login-modal"></div>
        <div class="login">login</div>
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