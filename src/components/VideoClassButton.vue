<template lang="pug">
div.flex.flex-row.flex-nowrap.gap-3.my-3.mx-6.overflow-x-auto.hiddenScrollBar
  template(v-for="(i, index) in youTubeVideoClassButtonData", :key="i + index")
    button(class="rounded-full font-bold px-3 bg-slate-800 text-white border-slate-300 border-2 hover:bg-slate-100 hover:text-black whitespace-nowrap", href="#", type="button" :class="{activeVideoClassButton : index === VideoClassButtonIndex}" @click="VideoClassButtonIndex = index") {{i}}
</template>

<script>
export default {
  data () {
    return {
      VideoClassButtonIndex: 0
    }
  },
  props: ['youTubeVideoClassButtonData']
}
</script>

<style lang="scss">
.activeVideoClassButton {
    @apply bg-slate-100 text-black #{!important};
  }
</style>
