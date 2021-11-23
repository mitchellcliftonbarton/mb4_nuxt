<template>
  <div class="image-sizer" :class="{ 'portrait': isPortrait }">
    <div class="inner relative" :style="{ paddingBottom: `${ratioPadding}%` }">
      <div class="image-wrapper absolute top-0 left-0 w-full h-full">
        <img 
          :src="url" 
          :alt="alt"
          class="object-cover object-center w-full h-full"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSizer',
  props: {
    url: String,
    alt: String,
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    ratioPadding () {
      return this.height / this.width * 100
    },
    isPortrait () {
      return this.height > this.width
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-sizer {
    width: 100%;

    .inner {
      background-color: #f4f4f4;
    }

    &.portrait {
      width: 100%;

      @media screen and (min-width: theme('screens.lg')) {
        width: 60%;
      }
    }
  }
</style>