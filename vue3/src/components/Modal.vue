<template>
    <div v-on:click="$emit('close')" class="login-modal"></div>
    <div class="login">
            <div class="border">    
                <div class="title-login">
                    <h1><slot name="title"></slot></h1>
                    <p><slot name="paragraph"></slot></p>
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>