<template>
   <div>
      <div class="header">
         <slot name="left"></slot>
         <div class="mid">{{title}}</div>
         <slot name="right"></slot>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      title: String
   }
}
</script>

<style lang="scss" scoped>
   .header{
      width: 100%;
      height: 40px;
      background-color: #02a774;
      display: flex;
      justify-content: space-around;
      line-height: 40px;
      color: #ffffff;
       .mid{
          font-size: 20px;
          width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
      }
   }
</style>