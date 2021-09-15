<template>
    <div class="calendar">
        <h1>Calendar</h1>
        <section class="days_section">
            <p v-for="day in days" v-bind:key="day">{{day}}</p>
        </section>
        <section class="days_numbre">
            <p v-for="num in 30" v-bind:key="num">{{num}}</p>
        </section>
    </diV>
</template>

<script>
export default {
    data() {
        return{
        days: ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"],
        };
    }
}
</script>

<style>

</style>