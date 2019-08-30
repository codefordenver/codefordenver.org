<template>
  <article id="nav-bar">
    <section id="logo">
      <img alt="Code for Denver logo" src="../assets/logos/Horizontal Logo_red.png" />
      <h1 class="hidden">Code for Denver</h1>
    </section>
    <section id="nav-donate">
      <div id="contact-donate">
        <router-link class="links" to="/contact">Contact</router-link>
       <span class="links contact-space" >|</span>
        <router-link  class="red-font contact-space" to="/donate">Donate</router-link>
      </div>
      <nav id="nav" >
        <router-link class="links" to="/">Home</router-link>
        <router-link id="about" class="links" to="/about">About</router-link>
        <router-link id="volunteer" class="links" to="/volunteer">Volunteer</router-link>
        <router-link id="projects" class="links" to="/projects">Projects</router-link>
        <router-link id="resources" class="links" to="/rescources">Resources</router-link>
        <router-link id="login" class="links" to="/login">Login</router-link>  <!-- where are we linking too? -->
      </nav>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
#nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2vw;
  margin-right: 2.5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.hidden {
  display: none;
}
#logo img {
  height: 10vh;
}
#contact-donate {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5vh;
}
.contact-space {
  margin-left: 0.5vw;
}
nav {
  display: flex;
  align-content: space-between;
}
#about {
 margin-left: 2rem;
}
#volunteer {
  margin-left: 2rem;
}
#projects {
  margin-left: 2rem;
}
#resources {
  margin-left: 2rem;
}
#login {
  margin-right: 2.3rem;
  margin-left: 2rem;
}
.links {
  text-decoration: none;
  color: #0B1A1D;
}
#nav a.router-link-exact-active {
  color: #E14E54;
  border-bottom-style: solid;
  border-bottom-color: #E14E54;
}
.red-font {
  text-decoration: none;
  color: #E14E54;
  margin-left: 0.5rem;
}
</style>
