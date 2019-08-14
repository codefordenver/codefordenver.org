<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#0B1A1D;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #0B1A1D;
}

#nav a.router-link-exact-active {
  color: #E14E54;
}
</style>
