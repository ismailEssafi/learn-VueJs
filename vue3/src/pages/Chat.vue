<template>
    Chat
</template>

<script>
import { getDatabase,ref,onValue } from "firebase/database";
import { onMounted } from '@vue/runtime-core';

export default {
setup(){
    
    onMounted(async()=>{
        const db = getDatabase();
        const collection =ref(db,"chat")
        onValue(await collection, (snapshot) => {
        const data =  snapshot.val();
        console.log(data);
        });
    })
}
}
</script>

<style>

</style>