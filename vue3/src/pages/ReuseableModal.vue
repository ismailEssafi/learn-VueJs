<template>
    <div class="re-modal">
        <section class="re-modal-title">
            Re-useable Model
        </section>
        <Modal v-if="isModal1Open" @close="isModal1Open=false">
            <template v-slot:title>
                Modal 1
            </template>
            <template v-slot:paragraph>
                bonjour
            </template>
        </Modal>
        <button @click="isModal1Open=true">Open Modal 1</button>
        <Modal v-if="isModal2Open" @close="isModal2Open=false">
            <template v-slot:title>
                Modal 2
            </template>
            <template v-slot:paragraph>
                bonsoir
            </template>
        </Modal>
        <button @click="isModal2Open=true">Open Modal 2</button>
    </div>
</template>

<script>
import {ref} from 'vue';
import Modal from '../components/Modal';

export default {
components : {Modal},

setup(){
const isModal1Open=ref(false);
const isModal2Open=ref(false);
return {isModal1Open,isModal2Open}
}
}

</script>

<style>

</style>