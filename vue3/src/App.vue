<template>
  <div>{{title}}</div>
  <span>{{number}}</span>
  <ul>
    <li v-for="names in freindz" v-bind:key="names">{{names.name}}</li>
    <input v-model="hero">
    <button v-on:click="number++;hero='wonder woman'">submit</button>
  </ul>
</template>

<script>
export default ({
  data() {
    return{
      title: "hi world !",
      freindz: [
        {name :'waldi'},
        {name :'mostapha'},
        {name :'redwan'}
    ],
      hero:"superman",
      number: 0
    }
    
  }
})
</script>
