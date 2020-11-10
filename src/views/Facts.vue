<template>
  <div class="home">
     <div>facts view</div>
     <FactsView :view="'facts'"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import FactsView from '@/components/FactsView.vue'


export default {
  name: 'Facts',
  components: {
    FactsView,
  },
}
</script>