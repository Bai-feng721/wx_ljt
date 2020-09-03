<template>
  <div class="container">
    <div class="notice">
      <answer-replay
        v-if="status==1?false:true"
        :name="answer.link_phone"
        :newtime="$parseTime(answer.operate_time,'{y}-{m}-{d}')"
        :content="answer.content"
        :imgurl1="url+imgurl[0]"
        :imgurl2="url+imgurl[1]"
        :imgurl3="url+imgurl[2]"
        :replay="answer.replay_count"
        :isImg="isShow"
        :preview="preview"
       />
      <answer-list
				v-else
        :name="answer.link_phone"
        :newtime="$parseTime(answer.operate_time,'{y}-{m}-{d}')"
        :newtitle="answer.title"
        :content="answer.content"
        :imgurl = "imgurl"
        :imgurl1="url+imgurl[0]"
        :imgurl2="url+imgurl[1]"
        :imgurl3="url+imgurl[2]"
        :replaycount="answer.replay_count"
        :exportname="replay.operate"
        :replaytime="$parseTime(replay.operate_time,'{y}-{m}-{d}')"
        :exportcont="replay.content"
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
       replay:{},
       status:0,
       imgurl:[],
       preview:[],
			 enclosure:'',
       isShow:true,
       url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.getDetail(this.$root.$mp.query.id)
    this.getReplay(this.$root.$mp.query.id)
  },
  methods:{

    getDetail(id){
      this.$http.post({
          url:"/pro/detail/"+id,
       }).then(res =>{
          this.answer=res.data
          this.status=res.data.status
          this.enclosure = this.answer.enclosure_id.replace(/\s/g,"");
          this.imgurl = this.enclosure.substring(0,this.enclosure.length - 1);
          this.imgurl = this.imgurl.slice(1);
          this.imgurl = this.imgurl.split(',');
           // this.preview=this.imgurl 
           // this.preview.map(item=>{
           //   this.url+item
           // })
          //判断附件是否有图片，有则true,传值给组件，详情中显示图片，反之。
          if(!/\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i.test(this.enclosure)){
             this.isShow= false
          }else{
            this.isShow= true
          }
      });
    },
    getReplay(id){
      this.$http.post({
          url:"/pro/replay/"+id,
       }).then(res =>{
          this.replay=res.data

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
