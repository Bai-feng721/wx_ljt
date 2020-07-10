<template>
  <div class="container">
    <div class="notice">
      <van-tabs :active="active" color="#00923f " @change="onChange" type="card" swipeable>
        <van-tab title="问答" >
          <div class="notice_left" >
            <person-cell
              v-for="(item,index) in allList"
              :key='index'
              :id="item.id"
              :name='item.operate'
              :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
              :title='item.title'
              :count='item.replay_count'
            />
          </div>
        </van-tab>
        <van-tab title="专家"  >
          <div class="notice_right" >
            <expert-cell
              v-for="(item,index) in expertList"
              :key='index'
              :id="item.user_id"
              :name='item.name'
              :post='item.post'
              :remark='item.remark'
              :expertise='item.expertise'
              :imgurl="url+item.avator"
            />

          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import PersonCell from '@/components/person-cell.vue'
import ExpertCell from '@/components/expert-cell.vue'
export default {

  components: {
   PersonCell,ExpertCell
  },
  data () {
    return {
       active:0,
       expertList:[],
       allList:[],
       url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.search()
    this.allAnswer()
  },

  methods:{

    search(){
      this.$http.post({
          url:"/expe/list?pageNum=1&pageSize=10",

       }).then(res =>{
        this.expertList = res.rows

      });
    },
    allAnswer(){
      this.$http.post({
          url:"/pro/list",

       }).then(res =>{
        this.allList = res.rows

      });
    },

  }
}
</script>

<style scoped>
  .notice{
    width: 100%;
    height: 100%;
    font-size: 28rpx;
  }
  .notice_left,.notice_right{
    height: 100%rpx;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

</style>
