<template>
  <div class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #ffffff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
      .search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      .search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
</style>
