<template>
  <header class="fixed w-full lg:h-full top-0 left-0 grid grid-cols-12 gap-6 lg:gap-8 pointer-events-none px-6 lg:px-8 z-50">
    <div :class="currentDiff > 1 ? 'lg:justify-end' : 'lg:justify-between'" class="col-span-12 lg:col-span-2 py-8 h-full flex flex-col pointer-events-auto">
      <div class="top flex lg:flex-col justify-between lg:items-start">
        <p>
          <nuxt-link 
            to="/" 
            class="text-red lg:hover:text-grey"
            v-html="spanify('Mitchell Barton')"
          ></nuxt-link>
        </p>
        <p class="hidden lg:block">--</p>
        <p class="hidden lg:block">
          <nuxt-link 
            to="/three-basketball-games-preorder" 
            class="lg:hover:text-grey"
            v-html="spanify('Three Basketball Games (Preorder)')"
          ></nuxt-link>
        </p>
        <p 
          v-for="(project, index) in projects" 
          :key="index"
          class="hidden lg:block"
        >
          <nuxt-link 
            :to="`/work/${project.project.slug}`" 
            class="lg:hover:text-grey"
            v-html="spanify(project.project.data.title)"
          ></nuxt-link>
        </p>
        <p class="hidden lg:block">--</p>
        <p class="hidden lg:block">
          <nuxt-link 
            to="/info" 
            class="lg:hover:text-grey"
            v-html="spanify('Info')"
          ></nuxt-link>
        </p>

        <button @click.prevent="toggleMenu()" class="text-red lg:hidden">{{ mobileMenuOpen ? 'Close' : 'Menu' }}</button>
      </div>

      <div class="bottom hidden lg:block">
        <p v-html="spanify('Difficulty Level')"></p>
        <div class="pl-6 flex flex-col items-start">
          <button 
            v-for="(level, index) in diffLevels" 
            :key="index"
            :class="{ 'active': index === currentDiff }"
            class="diff-link lg:hover:text-grey"
            @click.prevent="setDiff(index)"
            v-html="spanify(level)"
          ></button>
        </div>
        <p><span v-html="spanify('Grid')"></span> = <button @click.prevent="toggleGrid()" class="text-red lg:hover:text-grey">{{ showGrid ? 'True' : 'False' }}</button></p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/mixins/utils.js'

export default {
  name: 'MainNav',
  mixins: [utils],
  computed: {
    ...mapState(['diffLevels', 'currentDiff', 'showGrid', 'mobileMenuOpen']),
    ...mapState({
      projects: state => state.siteData.globalData.data.nav_link
    })
  },
  methods: {
    setDiff (index) {
      this.$store.dispatch('setCurrentDiff', index)
    },
    toggleGrid () {
      this.$store.dispatch('setShowGrid', !this.showGrid)
    },
    toggleMenu () {
      if (process.client) {
        if (!this.mobileMenuOpen) {
          document.body.style.overflow = 'hidden'
          console.log('hiding')
        } else {
          document.body.style.overflow = 'initial'
          console.log('initial')
        }
      }
      this.$store.dispatch('setMobileMenuOpen', !this.mobileMenuOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
  .diff-link {
    // transition: color .3s;

    &.active {
      color: theme('colors.red');
    }
  }

  .top {
    a {
      // transition: color .3s;

      &.nuxt-link-exact-active {
        color: theme('colors.red');
      }
    }
  }
</style>
