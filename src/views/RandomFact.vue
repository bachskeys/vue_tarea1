<template>
  <div class="home">
     <div>Random Fact</div>
     <FactsView :view="'random'"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import FactsView from '@/components/FactsView.vue'


export default {
  name: 'Random',
  components: {
    FactsView,
  },
}
</script>