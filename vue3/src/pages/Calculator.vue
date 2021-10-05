<template>
    <section class="calculator">   
        <h1>Calculator</h1>
        <p>{{currentNum}}</p>
        <small v-if="selectedOperation">{{prevNum}}{{selectedOperation}}{{currentNum}}</small>
        <div class="cal-buttons">
            <button @click="pressed('1')">1</button>
            <button @click="pressed('2')">2</button>
            <button @click="pressed('3')">3</button>
            <button @click="pressed('+')">+</button>
            <button @click="pressed('4')">4</button>
            <button @click="pressed('5')">5</button>   
            <button @click="pressed('6')">6</button>
            <button @click="pressed('-')">-</button>
            <button @click="pressed('7')">7</button>
            <button @click="pressed('8')">8</button>
            <button @click="pressed('9')">9</button>
            <button @click="pressed('*')">*</button>
            <button @click="pressed('0')">0</button>
            <button @click="pressed('c')">C</button>
            <button @click="pressed('=')">=</button>
            <button @click="pressed('/')">/</button>

        </div>    
    </section>    
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue';
export default {
    setup(){
        const currentNum=ref("");
        const number=ref("");
        const operator=['+','-','*','/'];
        const prevNum=ref("");
        const selectedOperation=ref("");
        const onlynumber=['1','2','3','4','5','6','7','8','9','0'];
        function pressed(value){
            if(value === '=' || value === "Enter") calculate();
            else if(operator.includes(value)) applyOperation(value);
            else if(value === 'c') clear();
            else if (onlynumber.includes(value)) appendNumber(value)
            
        }
        function appendNumber(value){
            currentNum.value=currentNum.value + value ;
        }

        function calculate(){
            if (selectedOperation.value === '+') sum()
            else if (selectedOperation.value === '-') subtract()
            else if (selectedOperation.value === '*') multiply()
            else if (selectedOperation.value === '/') divide();

            prevNum.value="";
            selectedOperation.value=""
        }

        function applyOperation(value){
            calculate();
            prevNum.value=currentNum.value;
            currentNum.value="";
            selectedOperation.value=value;
        }

        function clear(){
            currentNum.value="";
        }
        function sum(){
            currentNum.value=+prevNum.value + +currentNum.value
        }
        function subtract(){
            currentNum.value=+prevNum.value - +currentNum.value
        }
        function multiply(){
            currentNum.value=+prevNum.value * +currentNum.value
        }
        function divide(){
            currentNum.value=+prevNum.value / +currentNum.value
        }
        function keydownHandler(e){
            pressed(e.key);
        }
        onMounted(()=>window.addEventListener("keydown", keydownHandler));
        onUnmounted(()=>window.removeEventListener("keydown", keydownHandler));

        return {currentNum,number,pressed,prevNum,selectedOperation}
    }

}
</script>
<style>

</style>