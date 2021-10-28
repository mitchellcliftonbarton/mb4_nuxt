<template>
  <div class="video-sizer w-full">
    <div class="inner relative" v-html="embed"></div>
  </div>
</template>

<script>
export default {
  name: 'VideoSizer',
  props: {
    embed: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .video-sizer .inner {
    padding-bottom: 56.25%;
    height: 0px;
    overflow: hidden;
    background: linear-gradient(to bottom,#858585,#858585 10%,#ffffff 10%,#ffffff);
    background-size: 100% 4px;

    iframe {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
</style>