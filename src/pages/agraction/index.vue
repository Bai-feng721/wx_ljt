<template>
  <div class="container">
    <un-cell
      v-for="(item,index) in actionList"
      :key='index'
      :id='item.id'
      :newtitle="item.title"
      :time="$parseTime(item.operate_time,'{y}-{m}-{d}')"
      :read="item.read_count"
      :imgurl="url+item.image"
    />


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
      actionList:[],
      listtotal:'',
      time:[],
      read:[],
      imgurl:[],
      pageNum:1,
      url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.search()
  },
  onReachBottom(){
    console.log('上拉')
   if(this.pageNum<=this.listtotal){
      this.search()
   }
  },
  methods:{
    search(){
      let that = this
      let data = {
      	"header_id": "1275625572071899136",
      	"is_enclosure": 0,
      	"is_out": 0
      }
      this.$http.post({
          url: "/hContent/list?pageSize=10&pageNum="+that.pageNum++,
          data,
       }).then(res =>{
         res.rows.map(item=>{
           that.actionList.push(item)
         })
          this.listtotal=Math.ceil(res.total/10)
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
