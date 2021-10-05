import {onMounted, onUnmounted} from 'vue';

export default function useWindowEvent(eventHandler){
    console.log("hi")
    onMounted(()=>window.addEventListener("Keydown", eventHandler));
    onUnmounted(()=>window.removeEventListener("Keydown", eventHandler));
}