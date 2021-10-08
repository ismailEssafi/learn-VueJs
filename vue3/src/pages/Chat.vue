<template>
    <div v-for="(chat,index) in state.chats" :key="index">{{chat.message}}</div>
</template>

<script>
import { getDatabase, ref,onValue} from "firebase/database";
import { onMounted,reactive } from '@vue/runtime-core';

export default {
setup(){
    const state=reactive({
        chats:{}
    });
    onMounted(()=>{
        const db = getDatabase();
        const refrence = ref(db, 'chat/');
        onValue(refrence, (snapshot) => {
        state.chats = snapshot.val();
        
});
    })

    return{state}
}
}
</script>

<style>

</style>