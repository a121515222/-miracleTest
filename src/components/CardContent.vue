<template lang="pug">
div(class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0 md:gap-2 md:grid-cols-3 lg:grid-cols-4")
  template(v-for='(i, index) in youTubeData', :key='i.title + index')
    a.flex.flex-col(href="#")
      .relative
        img(:src='i.mainPicture', :alt='i.title + "picture"', class="object-cover w-full aspect-video")
        span.absolute.bottom-1.right-1.text-white.rounded.bg-slate-800.text-xs.px-1 {{i.videoTime}}
      .flex.flex-row.gap-3.mt-3
        img.img.rounded-full.object-cover.w-36px.h-36px(v-if="i.subPicture !== ''", :src='i.subPicture', :alt='i.title + "picture"')
        .grow.from-group.flex.flex-col
          h3.text-base.lineClamp {{i.title}}
          span.text-xs.text-slate-500 {{i.subTitle}}
          .flex.flex-row
          span.text-xs.text-slate-500 觀看次數: {{i.views}}次．{{i.time}}前
        span
          i(@click="addFavorite(i)").bi.bi-heart

</template>

<script>
export default {
  props: ['youTubeData'],
  data () {
    return {
      favoriteList: []
    }
  },
  methods: {
    addFavorite (item) {
      let favorite = JSON.parse(localStorage.getItem('favoriteList')) || []
      favorite.push(item)
      favorite = [...new Set(favorite)]
      localStorage.setItem('favoriteList', JSON.stringify(favorite))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
