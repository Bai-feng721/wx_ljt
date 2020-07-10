<template>
  <div class="container">
   <van-tabs :active="active" swipeable color="#12be5c" @change="onChange">
     <van-tab
      v-for="item in tech"
      :key="item.index"
      :id="item.id"
      :title="item.name"
     >
       <div class="content">
         <un-cell
          v-for="(item,index1) in techList"
          :key="item.index1"
          :id="item.id"
          :time="$parseTime(item.operate_time,'{y}-{m}-{d}')"
          :newtitle="item.title"
          :read="item.read_count"
          :imgurl="url+item.image"
         />

       </div>
     </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import UnCell from "@/components/un-cell.vue"
export default {

  components: {
    UnCell
  },
  data () {
    return {
      active:0,
      tech:[],
      index:0,
      techList:[],
      url:process.env.VUE_IMAGES
    }
  },
  mounted(event) {
    this.search()
  },
  methods:{
    onChange(event) {
       console.log(event.mp.detail.name)
       this.index = event.mp.detail.name
       this.$http.get({
           url:"/hContent/list_content/"+this.tech[this.index].id,

        }).then(res =>{
         this.techList=res.data
       });
     },
    search(){
      this.$http.get({
          url:"/hChild/1277806410612080640",
       }).then(res =>{
        this.tech=res.data
        this.$http.get({
            url:"/hContent/list_content/"+this.tech[this.index].id,

         }).then(res =>{
          this.techList=res.data

        });

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
  .content{
    width: 100%
  }

</style>
