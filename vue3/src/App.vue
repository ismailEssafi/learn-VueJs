<template>
  <div>{{title}} {{fullname}}</div>
  <p>{{randC}}</p>
  <p>{{randC}}</p>
  <p>{{randC}}</p><br>
  <p>{{randM()}}</p>
  <p>{{randM()}}</p>
  <p>{{randM()}}</p>

  <ul>
    <li v-for="names in freindz" v-bind:key="names">{{names.name}}</li>
    <input v-model="freind">
    <button v-on:click="addName">add nom</button><br>
    <button v-on:click="edit_fullname">Edit number_of_freindz</button>
  </ul>
</template>

<script>
export default ({

  computed:{
      fullname:{
        get(){ 
          return `${this.fname} ${this.lname}`;
        },
        set(fullname){
          const values=fullname.split(" ");
          this.fname=values[0];
          this.lname=values[1];
        }
      },
      randC(){
        return Math.random() ;
      },

  },

  methods: {
    addName(){
      this.freindz.push({name:this.freind});
      this.freind=''
    },
    randM(){
      return Math.random();
    },
    edit_fullname(){
      this.fullname="walid fisawi";
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
      fname: "ismail",
      lname: "essafi"
    }
    
  }
})
</script>
