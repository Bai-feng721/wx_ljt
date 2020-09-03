<template>
  <div class="container">
    <div class="search">
       <van-search
         :value="value"
         shape="round"
         background="white"
         placeholder="请输入搜索关键词"
         @change="search"
       />
    </div>
    <div class="main">
      <new-cell
        v-for="(item,index) in searchList"
        :key="index"
        :id="item.id"
        :imgurl="url+item.image"
        :newtitle="item.title"
        :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
        :read="item.read_count"
         :className="item.headerName"
         :isvideo="item.is_enclosure"
      />
    </div>
  </div>
</template>

<script>
import NewCell from '@/components/new-cell.vue'
export default {
  components: {
    NewCell
  },
  data () {
    return {
        value:'',
        searchList:[],
        url:process.env.VUE_IMAGES
    }
  },

  methods:{
    search(event){
      this.value=event.mp.detail
      this.$http.post({
          url:"/hContent/list?pageNum=1&pageSize=10",
          data:{
							  "keyword":this.value,
							   "is_content":2
          },
       }).then(res =>{
        this.searchList=res.rows

      });
    },

  }
}
</script>

<style scoped>
  .search{
    width: 750rpx;
    height:100%;
  }

</style>
