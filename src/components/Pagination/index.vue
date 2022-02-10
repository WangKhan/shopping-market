<template>
  <div class="pagination">
    <button @click="goPage(pageNo-1)" :disabled="pageNo == 1">上一页</button>
    <button v-show='startNumAndEndNum.start>1' @click="goPage('1')">1</button>
    <button v-show='startNumAndEndNum.start>2'>···</button>
    <button v-for='(num,index) in startNumAndEndNum.end-startNumAndEndNum.start+1'
            :key='index' @click="goPage(num+startNumAndEndNum.start-1)" :class="{active:pageNo==num+startNumAndEndNum.start-1}">{{num+startNumAndEndNum.start-1}}</button>
    <button v-show='startNumAndEndNum.end<totalPage-1'>···</button>
    <button v-show='startNumAndEndNum.end<totalPage' @click="goPage(totalPage)">{{totalPage}}</button>
    <button @click="goPage(pageNo+1)" :disabled="pageNo == totalPage">下一页</button>
    <button style="margin-left: 30px">共 {{(total)}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage () {
      return Math.ceil((this.total / this.pageSize))
    },
    startNumAndEndNum () {
      const { continues, pageNo, totalPage } = this;
      let start = 0,
        end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    }
  },
  methods:{
    goPage(pageNum){
      this.$emit('goPage',pageNum)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
