<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All facts</router-link> |
      <router-link to="/random">Random</router-link>
    </div>
    <router-view/>
    <div>{{mapError}}</div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
   computed:{
    ...mapGetters(['mapError'])
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
