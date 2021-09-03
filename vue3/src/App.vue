<template>
  <div>{{title}}</div>
  <ul>
    <li v-for="names in freindz" v-bind:key="names">{{names.name}}</li>
    <input v-model="freind">
    <button v-on:click="addName">add nom</button>
  </ul>
</template>

<script>
export default ({
  methods: {
    addName(){
      this.freindz.push({name:this.freind});
      this.freind=''
    }
  },
  data() {
    return{
      title: "hi world !",
      freindz: [
        {name :'waldi'},
        {name :'mostapha'},
        {name :'redwan'}
    ],
      freind:"",
      number: 0
    }
    
  }
})
</script>
