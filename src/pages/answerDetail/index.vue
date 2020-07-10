<template>
  <div class="container">
    <div class="notice">
      <answer-replay
        v-if="status==1?false:true"
        :name="answer.link_phone"
        :newtime="$parseTime(answer.operate_time,'{y}-{m}-{d}')"
        :content="answer.content"
        :imgurl1="url+answer.enclosure_id[0]"
        :imgurl2="url+answer.enclosure_id[1]"
        :imgurl3="url+answer.enclosure_id[2]"
        :replay="answer.replay_count"
       />
      <answer-list
        v-if="status==0?false:true"
        :name="answer.link_phone"
        :newtime="$parseTime(answer.operate_time,'{y}-{m}-{d}')"
        :content="answer.content"
        :imgurl1="url+answer.enclosure_id[0]"
        :imgurl2="url+answer.enclosure_id[1]"
        :imgurl3="url+answer.enclosure_id[2]"
        :replay="answer.replay_count"
      />
    </div>

  </div>
</template>

<script>
 import AnswerList from "@/components/answer-list.vue"
 import PersonCell from "@/components/person-cell.vue"
 import AnswerReplay from "@/components/answer-replay.vue"
export default {

  components: {
    AnswerList,PersonCell,AnswerReplay
  },
  data () {
    return {
       active:0,
       answer:{},
       status:0,
       url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.getDetail(this.$root.$mp.query.id)
    console.log("111",this.answer)
  },
  methods:{

    getDetail(id){
      this.$http.post({
          url:"/pro/detail/"+id,
       }).then(res =>{
          this.answer=res.data
          this.status=res.data.status
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
