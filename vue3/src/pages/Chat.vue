<template>
    <div class="chats">
        <h1>Chat App</h1>
        <div v-for="(chat,index) in state.chats" :key="index" 
        :class="chat.userId == state.userId ? '' : 'otherUser'">{{chat.message}}</div>
    </div>
    <input 
    class="message" 
    type="text" 
    placeholder="Start Typing..." 
    v-model="state.message"
    @keydown.enter="addMessage">
</template>

<script>
import { getDatabase, ref,onValue,set,push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { onMounted,reactive } from '@vue/runtime-core';

export default {
setup(){
    const state=reactive({
        chats:{},
        message:"",
        userId : null 
    });
    onMounted(()=>{
        const db = getDatabase();
        const refrence = ref(db, 'chat/');
        onValue(refrence, (snapshot) => {
        state.chats = snapshot.val();
        });

        const auth = getAuth();
        state.userId=auth.currentUser.uid;
    })

    function addMessage(){
        const db = getDatabase();
        const refrence = ref(db, 'chat/');
        const newMessagetRef = push(refrence);
        set(newMessagetRef, {
            message : state.message,
            userId :state.userId
        });
        state.message=""
    }

    return{state,addMessage}
}
}
</script>

<style>

</style>