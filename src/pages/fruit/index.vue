<template>
  <div class="container">
    <div class="main">
      <van-tabs :active="active" swipeable color="#12be5c" @change="onChange">
        <van-tab
          v-for="(item,index) in fruit"
          :key="index"
          :id="item.id"
          :title="item.name">
          <div class="content">
            <un-cell
              v-for="(item,index1) in fruitList"
              :key="index1"
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
      fruit:[],
      index:0,
      fruitList:[],
      url:process.env.VUE_IMAGES
    }
  },
  mounted(event) {
    this.search()
  },
  methods:{
     onChange(event) {
        this.index = event.mp.detail.name
        this.$http.get({
            url:"/hContent/list_content/"+this.fruit[this.index].id,

         }).then(res =>{
          this.fruitList=res.data
        });
      },
    search(){
      // let that = this
      this.$http.get({
          url:"/hChild/1275625813865136128",

       }).then(res =>{
        this.fruit=res.data
        this.$http.get({
            url:"/hContent/list_content/"+this.fruit[this.index].id,

         }).then(res =>{
          this.fruitList=res.data

        });
      });

    },

  }
}
</script>

<style scoped>
 .main{
   width: 100%;
   height: 100%;
 }
 .content{
   min-height: 900rpx;
 }
</style>
