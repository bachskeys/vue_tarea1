<template>
  <div>
   <h1>{{id}}</h1>
   <p>{{fact}}</p>
  </div>
</template>

<script>
export default {
  name: 'FactCard',
    props:{
        fact:String,
        id:String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
