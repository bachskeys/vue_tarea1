<template>
<div>
  <div v-if="view === 'facts'" >
     <button @click="this.getFactList">traer lista</button>
      <div v-for="factItem in mapFactList">
        <FactCard :fact="factItem.fact" :id="factItem.id" />
      </div>
  </div>
  <div v-else-if="view === 'random'">
     <button @click="this.getRandomFact">Traer dato Random</button>
      <FactCard :fact="mapRandomFact.fact" :id="mapRandomFact.id"/>
  </div>
</div>
</template>

<script>
import { mapGetters,mapState,mapActions} from "vuex"
import FactCard from '@/components/FactCard.vue'
export default {
  name: 'FactsView',
  computed:{
    ...mapState(['lista']),
    ...mapGetters(['mapFactList','mapRandomFact'])
  },
  methods:{
    ...mapActions(['getFactList','getRandomFact','resetError']),
  },
  components: {
    FactCard,
  },
  props:{
    view:String
  },
    beforeDestroy() {
      this.resetError;
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
