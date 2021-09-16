<template>
  <HeaderApp/>
  <router-view></router-view>
</template>

<script>
import HeaderApp from "./components/HeaderApp";

export default {
  components: {HeaderApp },
};
</script>
