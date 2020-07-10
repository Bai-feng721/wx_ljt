<template>
  <div class="container">
    <un-cell
      v-for="(item,index) in materList"
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
      materList:[],
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
    search(){
      let that = this
      this.$http.post({
          url:"/hContent/list_content/1277804936800763904",

       }).then(res =>{
        that.materList=res.data

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
