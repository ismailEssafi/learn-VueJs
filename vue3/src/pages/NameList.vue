<template>
    <div class="container">
  <div class="title-list">{{title}} {{name_Number}}</div>

  <ul>
    <li v-for="(names,index) in freindz" v-bind:key="names.name">
      <span>{{names.name}}</span><button v-on:click="remove_name(index)">x</button>
      </li>
    <input v-model="freind" ref="nameListRef">
    <button v-on:click="addName">add nom</button><br>
  </ul>
</div>
</template>

<script>
  export default {
    computed: {
        name_Number() {
        return this.freindz.length;
        },
    },
    methods: {
        addName(){
        this.freindz.push({name:this.freind});
        this.freind=''
        },
        remove_name(index){
        this.freindz=this.freindz.filter((names,i)=> i !== index);
        }
    },
    data() {
        return{
        title: "hi world  ",
        freindz: [
            {name :'waldi'},
            {name :'mostapha'},
            {name :'redwan'}
        ],
        freind:"",
        }
        
    },
    mounted(){
      this.$refs.nameListRef.focus();
    }
  };
</script>
