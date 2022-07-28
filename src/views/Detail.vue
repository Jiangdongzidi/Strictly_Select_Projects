<template>
  <div>
    <NavView :is-show="false"></NavView>
    
  </div>
</template>

<script>
// import axios from 'axios'
// import request from '../axios/request'
import NavView from '../components/Nav.vue'
import {detailApi} from '../api/detail-api'
export default {
  data() {
    return {
      nav: [],//面包屑导航
      productInfo:{},//商品详情
      themYouCanBuy:[]//还可以兑换的商品
    };
  },
created() {
  // axios.get('http://www.520it.com:8081/cms/products/124').then((res)=>{
  //   // console.log(res);
  //   this.nav = res.data.data.nav;
  //   this.productInfo = res.data.data.productInfo;
  //   this.themYouCanBuy = res.data.data.themYouCanBuy;

  // })
  // request.get('/products/124').then(res=>{
  //   console.log(res);
  //   this.nav = res.data.nav;
  //   this.productInfo = res.data.productInfo;
  //   this.themYouCanBuy = res.data.themYouCanBuy;
  // })
    getDetailFun(124)
},
components:{
    NavView
  }
}
</script>

<style>

</style>