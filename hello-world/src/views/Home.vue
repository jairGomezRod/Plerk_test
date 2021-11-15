<template>
  <div class="container">
    <div class="searchbar">
      <input type="text" class="searchbar__input" placeholder="Buscar" v-model="searchInput" />
    </div>
    <Loader v-if="!categories"/>
    <div v-else class="categories" >
      <Card v-for="(cat,i) in filterCategories" :index="i" :key="cat.id" :info="cat"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Home',
  components: {
    Card,
    Loader
  },
  data(){
    return {
      searchInput:""
    }
  },
  computed:{
    ...mapGetters({
      categories:'_getCategories'
    }),
    filterCategories(){
      
      return this.categories.filter(cat => cat.name.search(this.searchInput.toLowerCase())!= -1)
    } 
  }
}
</script>
