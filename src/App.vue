<template>
      <Header />
        <router-view />
      <Footer />
</template>


<script>

import Header from './components/general/Header.vue'
import Footer from './components/general/Footer.vue'

export default {
   components: {
    Header, 
    Footer  
   }
}
</script>

<style scoped>
</style>