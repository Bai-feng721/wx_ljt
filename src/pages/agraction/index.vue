<template>
  <div class="container">
    <un-cell
      v-for="(item,index) in actionList"
      :key='item.index'
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
      time:[],
      read:[],
      imgurl:[],
      url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.search()
  },
  methods:{
   //查询sn码
    search(){
      let that = this
      this.$http.post({
          url:"/hContent/list_content/1275625572071899136",

       }).then(res =>{
         that.actionList=res.data
         
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
