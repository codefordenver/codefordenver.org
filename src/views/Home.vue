<template>
  <div class="home">
    <Banner/>
    <WhatWeDo/>
    <ExploreProjects/>
    <Info/>
    <OurSponsors/>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import ExploreProjects from '@/components/home/ExploreProjects.vue'
import Info from '@/components/home/Info.vue'
import OurSponsors from '@/components/home/OurSponsors.vue'
import ProjectCards from '@/components/home/ProjectCards.vue'
import WhatWeDo from '@/components/home/WhatWeDo.vue'

export default {
  name: 'home',
  components: {
    Banner,
    ExploreProjects,
    Info,
    OurSponsors,
    ProjectCards,
    WhatWeDo
  }
}
</script>
