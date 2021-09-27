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
  import {ref,onMounted, computed} from 'vue';
  export default {
  
    setup(){
      const nameListRef =ref("");
      const title= ref("hi world");
      const freindz= ref([
            {name :'waldi'},
            {name :'mostapha'},
            {name :'redwan'}
        ]);
      const freind= ref("");
      const name_Number=computed({
        get:()=> freindz.value.length
      });
      function addName(){
        freindz.value.push({name:freind.value});
        freind.value='';
        }
      function remove_name(index){
        freindz.value=freindz.value.filter((names,i)=> i !== index);
        }
      onMounted(()=>{
          nameListRef.value.focus();
      })
      return {title,freindz,freind,addName,remove_name,nameListRef,name_Number}
    }
  };
</script>
