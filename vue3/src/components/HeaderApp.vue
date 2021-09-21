<template>
    <div class="headerApp">
        <span><router-link to="/calendar">Calendar</router-link></span>
        <span><router-link to="/dc-hero">DC Hero</router-link></span>
        <span><router-link to="/markdown">Markdown</router-link></span>
        <span><router-link to="/slider">Slider Carousel</router-link></span>
        <span v-on:click="$emit('open-login-modal')" style="color:white;cursor:pointer">Login</span>
    </div>
</template>

