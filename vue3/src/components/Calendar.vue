<template>
    <div class="calendar">
        <h1>Calendar</h1>
        <section class="month_year">
            <h3>{{currentMonthName}}</h3>
            <h3>{{currentYear}}</h3>
        </section>

        <section class="days_section">
            <p v-for="day in days" v-bind:key="day">{{day}}</p>
        </section>

        <section class="days_numbre">
            <p v-for="num in startDay()" v-bind:key="num"></p>
            <p v-for="num in numOfDays(currentYear,currentMonth)" v-bind:key="num">{{num}}</p>
        </section>
    </diV>
</template>

<script>
export default {
    data() {
        return{
        currentYear: new Date().toLocaleString("default",{year: "numeric"}),
        currentMonthName: new Date().toLocaleString("default",{month: "long"}),
        currentMonth: new Date().getMonth(),
        days: ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"],
        };
    },
    methods :{
        numOfDays(year,month){
            return new Date(year,month+1,0).getDate();
        },

        startDay(){
            return new Date(this.currentYear,this.currentMonth,1).getDay();
        }

    }
}
</script>

<style>

</style>