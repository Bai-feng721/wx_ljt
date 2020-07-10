<template>
  <div class="container">
    <div class="notice">
      <van-tabs :active="active" color="#00923f " @change="onChange"  swipeable>
        <van-tab title="未回复" >
          <div class="notice_left" >
            <un-replay
						/>
          </div>
        </van-tab>
        <van-tab title="已回复"  >
          <div class="notice_right" >
            <answer-list/>

          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
 import AnswerList from "@/components/answer-list.vue"
 import UnReplay from "@/components/un-replay.vue"
export default {

  components: {
    AnswerList,UnReplay
  },
  data () {
    return {
       active:0,
       myAnswer:'',
    }
  },

  methods:{

    search(){
      this.$http.post({
          url:"/pro/mypro",
       }).then(res =>{
        this.myAnswer= res.data

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
