<template>
  <div
    :class="`level-${currentLevel.toLowerCase()}`"
    class="main"
  >
    <Grid :class="{ 'opacity-0': !showGrid }" />
    <MainNav />
    <SecondaryNav />
    <MobileMenu :class="{ 'active': mobileMenuOpen }" />

    <main class="relative z-10">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import MainNav from '@/components/MainNav'
import SecondaryNav from '@/components/SecondaryNav'
import Grid from '@/components/Grid'
import MobileMenu from '@/components/MobileMenu'

export default {
  components: {
    MainNav,
    SecondaryNav,
    Grid,
    MobileMenu
  },
  computed: {
    ...mapState(['showGrid', 'mobileMenuOpen']),
    ...mapGetters(['currentLevel'])
  },
}
</script>
