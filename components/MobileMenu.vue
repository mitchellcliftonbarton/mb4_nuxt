<template>
  <div id="mobile-menu" class="fixed w-full h-full top-0 left-0 lg:hidden push-nav bg-white z-20 px-6 lg:px-8 pb-8">
    <div class="top mb-20">
      <p>
        <nuxt-link 
          to="/three-basketball-games-order" 
          class="lg:hover:text-grey"
          v-html="spanify('Three Basketball Games')"
          @click.native="hideMenu()"
        ></nuxt-link>
      </p>
      <p 
        v-for="(project, index) in projects" 
        :key="index"
      >
        <nuxt-link 
          :to="`/work/${project.project.slug}`" 
          class="lg:hover:text-grey"
          v-html="spanify(project.project.data.title)"
          @click.native="hideMenu()"
        ></nuxt-link>
      </p>
      <p>--</p>
      <p>
        <nuxt-link 
          to="/info" 
          class="lg:hover:text-grey"
          v-html="spanify('Info')"
          @click.native="hideMenu()"
        ></nuxt-link>
      </p>
    </div>

    <div class="middle mb-20">
      <div id="mc_embed_signup_mobile">
        <form
          action="https://mitchellbarton.us17.list-manage.com/subscribe/post?u=91c08a8c7d09a563f6c854c93&amp;id=935f26bf1c"
          method="post"
          id="mc-embedded-subscribe-form-mobile"
          name="mc-embedded-subscribe-form-mobile"
          class="validate"
          target="_blank"
          noValidate
        >
            <div id="mc_embed_signup_scroll_mobile">
                <div class="mc-field-group">
                    <label htmlFor="mce-EMAIL" class="inline-block mr-1" v-html="spanify('I send periodic emails. Sign up')"></label>
                    <input type="email" name="EMAIL" class="required email w-full lg:w-auto" placeholder="here" id="mce-EMAIL" />
                    <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="wcag-hidden" />
                </div>
                <div id="mce-responses-mobile" class="clear">
                    <div class="response hidden" id="mce-error-response"></div>
                    <div class="response hidden" id="mce-success-response"></div>
                </div>
                <div 
                  style="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input type="text" name="b_91c08a8c7d09a563f6c854c93_935f26bf1c" tabIndex="-1" />
                </div>
            </div>
        </form>
      </div>
    </div>

    <div v-if="recent.length > 0" class="bottom mb-20">
      <div 
        class="col-span-3"
      >
        <p class="text-red" v-html="spanify('Semi-Recent/Upcoming')"></p>
        <p 
          v-for="(item, index) in recent" 
          :key="index"
        >
          <a 
            :href="item.link.url" 
            :target="item.link.target" 
            rel="noreferrer"
            class="lg:hover:text-grey"
            v-html="spanify(item.text)"
          ></a>
        </p>
      </div>
    </div>

    <div class="controls">
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
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/mixins/utils.js'

export default {
  name: 'MobileMenu',
  mixins: [utils],
  computed: {
    ...mapState(['diffLevels', 'currentDiff', 'showGrid']),
    ...mapState({
      projects: state => state.siteData.globalData.data.nav_link,
      recent: state => state.siteData.globalData.data.recent_upcoming
    })
  },
  methods: {
    setDiff (index) {
      this.$store.dispatch('setCurrentDiff', index)
      this.hideMenu()
    },
    toggleGrid () {
      this.$store.dispatch('setShowGrid', !this.showGrid)
    },
    hideMenu () {
      document.body.style.overflow = 'initial'
      this.$store.dispatch('setMobileMenuOpen', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  #mobile-menu {
    opacity: 0;
    pointer-events: none;

    &.active {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .diff-link {
    &.active {
      color: theme('colors.red');
    }
  }

  .top {
    a {
      &.nuxt-link-exact-active {
        color: theme('colors.red');
      }
    }
  }

  input {
    border-bottom: 1px solid black;
    outline: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0px;
  }
</style>
