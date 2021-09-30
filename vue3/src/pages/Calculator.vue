<template>
    <section class="calulator">   
        <h1>Calculator</h1>
        <p type="number">{{number}}</p>
        <div class="cal-buttons">
            <button @click="addNumber(1)">1</button>
            <button @click="addNumber(2)">2</button>
            <button @click="addNumber(3)">3</button>
            <button @click="addNumber(4)">4</button>
            <button @click="addNumber(5)">5</button>   
            <button @click="addNumber(6)">6</button>
            <button @click="addNumber(7)">7</button>
            <button @click="addNumber(8)">8</button>
            <button @click="addNumber(9)">9</button>
            <button @click="addNumber(0)">0</button>
            <button>=</button>
        </div>    
    </section>    
</template>

<script>
import {ref} from 'vue';
export default {
    setup(){
        const inputNum=ref([]);
        const number=ref("");
        function addNumber(num){
            inputNum.value.push(num);
            number.value=+inputNum.value.join("");

        }
        return {inputNum,number,addNumber}
    }

}
</script>
<style>

</style>