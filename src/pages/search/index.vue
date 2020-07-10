<template>
  <div class="container">
    <div class="search">
       <van-search
         :value="value"
         shape="round"
         background="white"
         placeholder="请输入搜索关键词"
         @focus="gosearch"
       />
    </div>
    
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {

    }
  },

  methods:{
   //查询sn码
    search(){
      this.$http.post({
          url:"/",
          data:{

          },
       }).then(res =>{
        if(res.code==200){

        }else{

        }

      });
    },
    snchange(){
      this.isCode=false
    }
  }
}
</script>

<style scoped>
  .search{
    width: 750rpx;
    height:100%;
  }

</style>
