<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view/>
    <FooterView></FooterView>
  </div>
</template>
<script>
//先导入组件
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'

export default {
  components:{
    HeaderView,
    FooterView
  }
}
</script>
<style lang="scss">
// html{
//   font-size: 10px;
// }
// p{
//   font-size: 1.2rem;
//   // 12px
// }
#app{
  font-size: 14px;
  font-family: SourceHanSansSC-Light;
}
a{
  text-decoration: none;
}
</style>
