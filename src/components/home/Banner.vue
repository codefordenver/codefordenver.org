<template>
  <div class="banner">
    <h3>Banner Image</h3>
    <div class="text-box">
      <p>We build software to help nonprofits and local government better serve their community.</p>
      <p>We are technologists, programmers, visual and graphic designers, product managers, researchers developers, UX and UI designers, architectural engineers, QA analysts, community organizers, students and entrepreneurs. We are also mothers and fathers, brothers and sisters, and citizens. We are all working for a better Denver, a better America and a better tomorrow.</p>
      <button class="button">Join Us</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  background-color: black;
  color: #FBFDFF;
}
.text-box{
  max-width: 40%;
  justify-content: left;
  text-align: start;
}
.text-box p{
  margin: 1rem;
}
</style>
