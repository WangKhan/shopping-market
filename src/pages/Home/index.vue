<template>
  <div class="container">
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="(fl) in floor"
           :key='fl.id'
           :list='fl' />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState({
      floor: (state) => state.home.floor
    }
    )
  },
  mounted () {
    this.$store.dispatch('getFloor')
    
  }
}
</script>

<style scoped lang="less">
</style>
