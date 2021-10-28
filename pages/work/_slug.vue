<template>
  <div class="page-wrap grid grid-cols-12 p-8 push-nav lg:pt-0">
    <div class="wrapper col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-10">
      <h1 class="wcag-hidden">{{ project.data.title }}</h1>

      <div v-if="project.data.description" class="formatted italic-spans col-span-10 lg:col-span-6" v-html="renderRichText(project.data.description)"></div>

      <div class="media col-span-10 lg:col-span-9 mt-20">
        <div 
          v-for="(media, index) in project.data.media" 
          :key="index" 
          class="mb-20"
        >
          <ImageSizer 
            v-if="media.image.url"
            :url="media.image.url"
            :width="media.image.dimensions.width"
            :height="media.image.dimensions.height"
            :alt="media.image.alt ? media.image.alt : `Image of ${project.data.title}`"
          />
          <VideoSizer 
            v-else-if="media.youtube_vid.html" 
            :embed="media.youtube_vid.html"
          ></VideoSizer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import utils from '@/mixins/utils.js'
import ImageSizer from '@/components/ImageSizer'
import VideoSizer from '@/components/VideoSizer'

export default {
  mixins: [utils],
  components: { ImageSizer, VideoSizer },
  head () {
    return {
      title: `Mitchell Barton | ${this.project.data.title}`
    }
  },
  computed: {
    ...mapState({
      projects: state => state.siteData.projects.results
    }),
    project () {
      return this.projects.find(project => project.slugs[0] === this.$route.params.slug) 
    }
  }
}
</script>

<style scoped>
  .wrapper {
    max-width: 1200px;
  }
</style>
