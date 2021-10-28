<template>
  <nav class="relative w-full top-0 left-0 hidden lg:grid grid-cols-12 gap-6 lg:gap-8 p-8 z-40">
    <div :class="currentDiff > 1 ? 'col-span-7 col-start-2' : 'col-span-5 col-start-5'" class="flex items-start">
      <div id="mc_embed_signup">
        <form
          action="https://mitchellbarton.us17.list-manage.com/subscribe/post?u=91c08a8c7d09a563f6c854c93&amp;id=935f26bf1c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          noValidate
        >
            <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <label htmlFor="mce-EMAIL" class="inline-block mr-1" v-html="spanify('I send periodic emails. Sign up')"></label>
                    <input type="email" name="EMAIL" class="required email w-full lg:w-auto" placeholder="here" id="mce-EMAIL" />
                    <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="hidden" />
                </div>
                <div id="mce-responses" class="clear">
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
    <div 
      v-if="recent.length > 0" 
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
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/mixins/utils.js'

export default {
  name: 'SecondaryNav',
  mixins: [utils],
  computed: {
    ...mapState({
      recent: state => state.siteData.globalData.data.recent_upcoming
    }),
    ...mapState(['currentDiff']),
  }
}
</script>

<style lang="scss" scoped>
  input {
    border-bottom: 1px solid black;
    outline: none;
    box-shadow: none;
    background: transparent;
  }
</style>
