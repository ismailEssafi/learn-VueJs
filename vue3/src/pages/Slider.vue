<template>
    <div v-if="countdown == 1" class="slide1"></div>
    <div v-if="countdown == 2" class="slide2"></div>
    <div v-if="countdown == 3" class="slide3"></div>
</template>

<script>
export default {
    data() {
        return{
            countdown:1,
            interval:""
        }
    },
    mounted(){
        this.interval=setInterval(()=>{
            console.log(this.countdown);
            if(this.countdown==3){
                this.countdown=1
            }else{
                this.countdown++;
            }     
        },2000);
        console.log(this.countdown);
    },  
    beforeUnmount(){
        clearInterval(this.interval);
    }
}
</script>

<style>

</style>