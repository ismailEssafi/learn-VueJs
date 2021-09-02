<template>
  <div>{{title}}</div>
  <ul>
    <li v-for="names in freindz" v-bind:key="names">{{names.name}}</li>
    <input v-bind:value="hero">
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
      hero:"superman"
    }
    
  }
})
</script>
