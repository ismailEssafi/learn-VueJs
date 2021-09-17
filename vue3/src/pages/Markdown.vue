<template>
  <div class="markdown">
    <h1>Markdown App</h1>
    <section class="input-output">
      <article class="input-text">
        <textarea v-on:input="update" v-bind:value="text"></textarea>
      </article>
      <article class="output-text" v-html="markedText">
      </article>            
    </section>
  </div>  
</template>

<script>
import marked from 'marked' ;
import debounce from '../utilities/mixins/debounce';
export default {
  mixins :[debounce],
  data(){
    return {
      text : "left",
    }
  },
  computed: {
      markedText(){
          return marked(this.text);
      }, 
  },
  methods: {
      update(e){ 
        const task=() => {this.text=e.target.value}; 
        this.debounce(task);   
      },
  }
}
</script>

<style>

</style>