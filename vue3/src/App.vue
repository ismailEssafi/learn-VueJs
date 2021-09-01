<template>
  <div v-html="title"></div>
  <p v-if="isVueJs">bonjour dans Vue.js</p>
  <p v-else-if="isVueJs === null">bonjour dans Angular</p>
  <p v-else>bonjour dans React</p>

</template>

<script>
export default ({
  data() {
    return{
      title: "<h1>hi world !</h1>",
      isVueJs: false,
    }
    
  }
})
</script>
