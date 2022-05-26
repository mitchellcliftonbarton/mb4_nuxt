<template>
  <div class="page-wrap grid grid-cols-12 p-8 push-nav lg:pt-0">
    <div class="wrapper col-span-12 lg:col-span-10 lg:col-start-3">
      <h1 class="wcag-hidden">Mitchell Barton</h1>

      <div class="media col-span-9 mt-20">
        <div class="mb-20">
          <ImageSizer
            :url="require(`../src/images/untitled-espn.jpg`)"
            :width="1500"
            :height="1783"
            :alt="`A Painting Thing`"
          />
        </div>

        <div class="mb-20">
          <ImageSizer
            :url="require(`../src/images/email-1.jpg`)"
            :width="1000"
            :height="1000"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div class="mb-20">
          <ImageSizer
            :url="require(`../src/images/email-3.jpg`)"
            :width="2000"
            :height="1597"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div class="mb-20">
          <ImageSizer
            :url="require(`../src/images/email-9.jpg`)"
            :width="2000"
            :height="1597"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

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
import { mapState } from 'vuex'
import ImageSizer from '@/components/ImageSizer'
import VideoSizer from '@/components/VideoSizer'

export default {
  components: { ImageSizer, VideoSizer },
  computed: {
    ...mapState({
      projects: state => state.siteData.projects.results,
      firstNavProject: state => state.siteData.globalData.data.nav_link[0]
    }),
    project () {
      return this.projects.find(project => project.id === this.firstNavProject.project.id)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    max-width: 1200px;
  }
</style>
