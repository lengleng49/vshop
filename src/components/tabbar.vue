<template>
   <div>
      <div class="tabbar">
         <div :class="{active: '/' === $route.path}" @click="naviTo('/')">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
         </div>
         <div :class="{active: '/search' === $route.path}" @click="naviTo('/search')">
            <span class="iconfont icon-sousuo"></span>
            <span>搜索</span>
         </div>
         <div :class="{active: '/order' === $route.path}" @click="naviTo('/order')">
            <span class="iconfont icon-dingdan"></span>
            <span>订单</span>
         </div>
         <div :class="{active: '/user' === $route.path}" @click="naviTo('/user')">
            <span class="iconfont icon-wo"></span>
            <span>我</span>
         </div>
         
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      naviTo(str){
         this.$router.push(str)
      }
   }
}
</script>

<style lang="scss" scoped>
.tabbar{
   width: 100%;
   height: 40px;
   border-top: 1px solid #e3e3e3;
   position: fixed;
   left: 0;
   bottom: 0;
   display: flex;
   justify-content: space-around;
   div{
      width: 50px;
      height: 100%;
      text-align: center;
      .iconfont{
         font-size: 24px ;
         display: block;
      }
      span{
         font-size: 15px;
      }
   }
   .active{
      color: #02a774;
   }
}
</style>