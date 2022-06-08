<template lang="pug">
.flex.flex-row.justify-between.py-2.px-2.border-b-4.border-slate-300
  a(href="#" class="flex flex-row")
    i.bi.bi-youtube.text-red-500.text-3xl
    p.text-black.font-black.text-2xl Youtube
  .flex.flex-row
    button.border-1
      i.bi.bi-search.text-stone-400.py-2.px-3
    button.relative
      svg.bi.bi-coin.bg-stone-500.rounded-full.text-white(xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' viewBox='0 0 16 16')
        path(d='M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z')
        path(d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z')
        path(d='M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z')
VideoClassButton(:you-tube-video-class-buttonData='videoClass')
div(class="md:px-2")
  CardContent(:you-tube-data='demoData')
.flex.flex-row.justify-between.mx-10.my-2
  button.flex.flex-col(type="button")
    i.bi.bi-house.self-center
    span Hone
  button.flex.flex-col(type="button")
    i.bi.bi-box2.self-center
    span Trending
  button.flex.flex-col(type="button")
    i.bi.bi-collection-play.self-center
    span Subscriptions
  button.flex.flex-col(type="button")
    i.bi.bi-collection.self-center
    span Library
</template>

<script>
import CardContent from '@/components/CardContent.vue'
import VideoClassButton from '@/components/VideoClassButton.vue'

export default {
  data () {
    return {
      videoClass: ['全部', '遊戲', '直播中', '寶可夢', '寵物', '已觀看', '動作冒險遊戲', '烹飪', '最新上傳', '動畫', '合輯', '讓你耳目一新的影片', '運動', 'NBA'],
      demoData: [
        {
          title: '周杰倫 Jay Chou【愛在西元前 Love before BC】Official MV',
          subTitle: '周杰倫',
          views: '81萬',
          time: '11年',
          videoTime: '03:54',
          mainPicture: 'https://img.youtube.com/vi/5XK2C9w6oVk/0.jpg',
          subPicture: ''
        },
        {
          title: 'Omicron 就像感冒？後遺症有什麼症狀？什麼又是長新冠呢？',
          subTitle: 'Pan Sic泛科學',
          views: '4萬',
          time: '3個月',
          videoTime: '09:14',
          mainPicture: 'https://img.youtube.com/vi/_HvDo67R6Nk/0.jpg',
          subPicture: 'https://yt3.ggpht.com/gFvVs22CqiCvk88u12j4E0rjRn48itY87hEiMR_czWlzvngO2AgOqlVxBU_9WAowTCpBZug-nA8=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '亞洲最窮十個國家，坐擁天然資源也發展不起來，他們都面臨着什麼難題？',
          subTitle: '窮奢極慾',
          views: '4.8萬',
          time: '1個月',
          videoTime: '06:55',
          mainPicture: 'https://img.youtube.com/vi/FDSMBq_Yl9o/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLS4ypE2WWA0JEURB9wZHRJJHSO7AQzP37mSyVvrRQ=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '學校成地獄！韓國校園霸凌盛行，學暴保險、請壯漢陪上課成商機，復仇式商機能有效解決霸凌？ 【TODAY 看世界】',
          subTitle: 'TODAY 看世界',
          views: '11萬',
          time: '1個月',
          videoTime: '07:33',
          mainPicture: 'https://img.youtube.com/vi/xEdlTsS5aOY/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLQy5RNdmpmFTLgIkJ3cDFze72nrn_XHw_g6rkqo=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '台灣史真正「零負評」的人物 最該被印在鈔票上的人',
          subTitle: 'cheap',
          views: '51萬',
          time: '7個月前',
          videoTime: '05:54',
          mainPicture: 'https://img.youtube.com/vi/Fa-s6v95jkA/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLREkv1Y6_vEamFC1xzyApLvy-lUfExP0CPMRLNkHA=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '00878換股不先講 0056三週前先公告 巨型ETF成分調整不需要先講嗎？ | 夯翻數FQ&A63',
          subTitle: '柴鼠兄弟 ZRBros',
          views: '10萬',
          time: '4天前',
          videoTime: '06:33',
          mainPicture: 'https://img.youtube.com/vi/iknKUZpV0as/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLTOWKjZsa1qrByn3d-Zle2QRktk_eLkkiUXhQ2w=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '為什麼說進化的終點是螃蟹？原來，至少有5類史前蟲子進化成了螃蟹……|自說自話的總裁',
          subTitle: '自說自話的總裁',
          views: '90萬',
          time: '9天',
          videoTime: '18:38',
          mainPicture: 'https://img.youtube.com/vi/Fu0gTUT_MHk/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLRA2LQmvarS6RFp1C0FLwwaXVAcR40M2mOmjqRi=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '模範犯人突然越獄，平尾龍磨越獄事件 | X調查',
          subTitle: 'X調查',
          views: '43萬',
          time: '3個月',
          videoTime: '15:33',
          mainPicture: 'https://img.youtube.com/vi/hqQWOK3olFg/0.jpg',
          subPicture: 'https://yt3.ggpht.com/ytc/AKedOLQ60K6bCXYGhvpdxQVHwXRHdi8T_YolbHRlH1y6kA=s88-c-k-c0x00ffffff-no-rj'
        },
        {
          title: 'Antonio Vivaldi - The Four Season Violin Concerto no.1-4 韋瓦第 四季小提琴協奏曲 古典音樂 classical music relaxing',
          subTitle: '舒壓古典音樂 Relaxing Classical Music',
          views: '24萬',
          time: '6個月',
          videoTime: '05:57',
          mainPicture: 'https://img.youtube.com/vi/BxwK92i93OE/0.jpg',
          subPicture: 'https://yt3.ggpht.com/S38wmgeZeDe6-tLbT7zD4a2UdrYjGIxNwmcHxfNo7j9taI7pugxoSqOyC4VUn_erqWOhs9TDUw=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '米津玄師 - Lemon Kenshi Yonezu',
          subTitle: 'Kenshi Yonezu 米津玄師',
          views: '75億',
          time: '3年',
          videoTime: '04:23',
          mainPicture: 'https://img.youtube.com/vi/SX_ViT4Ra7k/0.jpg',
          subPicture: 'https://yt3.ggpht.com/obIiHrgUtL93lzpHG_pOPzseJv9ZEwGcLauBcqw9G-HB30qjiOe7uiVrA87WOO_4yCh-aQKxhsg=s88-c-k-c0x00ffffff-no-rj'
        },
        {
          title: 'Chopin - Nocturne in E flat major Op.9 No.2 Classical music relaxing 蕭邦 降E大調夜曲 古典音樂 放鬆音樂',
          subTitle: '舒壓古典音樂 Relaxing Classical Music',
          views: '69萬',
          time: '5個月',
          videoTime: '08:41',
          mainPicture: 'https://img.youtube.com/vi/49zqp4wG5x0/0.jpg',
          subPicture: 'https://yt3.ggpht.com/S38wmgeZeDe6-tLbT7zD4a2UdrYjGIxNwmcHxfNo7j9taI7pugxoSqOyC4VUn_erqWOhs9TDUw=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          title: '深入解析，蕭邦為什麼這麼好聽',
          subTitle: '音樂家的無聊人生 Musician Seacow',
          views: '69萬',
          time: '1年',
          videoTime: '18:05',
          mainPicture: 'https://img.youtube.com/vi/RcVyNE5L-zk/0.jpg',
          subPicture: 'https://yt3.ggpht.com/xNOBXH3Q_bWSYSxEoPyctfflc76qvMJ8UXA-GnF1rwlYlEfEt8XKdjZ93RQ-4gcU_qjhCGcMLQ=s68-c-k-c0x00ffffff-no-rj'
        }]
    }
  },
  components: {
    CardContent,
    VideoClassButton
  }
}
</script>
