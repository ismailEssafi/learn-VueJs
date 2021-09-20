<template>
    <div v-for="(style,index) in styles" :key="index">
        <transition name="fade">
            <div v-if="countdown == index" class="slide" :style="style"></div>
        </transition>       
    </div>
    <div class="indicators">
        <div v-for="(style,index) in styles" :style="countdown==index ? 'background-color:#2C3E50':'background-color:white'" v-on:click="countdown=index" class="indicator" :key="index"></div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            countdown:0,
            interval:"",
            isShowing:false,
            styles: ["background-color:teal","background-color:tomato","background-color:yellow"]
        }
    },
    mounted(){
        this.interval=setInterval(()=>{
            console.log(this.countdown);
            if(this.countdown==2){
                this.countdown=0
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
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from{
    opacity: 0;
    transform:translateX(-100%)
}
.fade-leave-to {
    opacity: 0;
    transform:translateX(100%)
}
</style>