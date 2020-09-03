<template>
  <div class="container">
    <div class="notice">
      <van-tabs :active="active" color="#00923f " @change="onChange"  swipeable>
        <van-tab title="未回复" >
          <div class="notice_left" >
            <person-cell
              v-if="unreplay!=''"
              v-for="(item,index) in unreplay"
              :key='index'
              :id="item.id"
              :name='item.operate'
              :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
              :title='item.title'
              :count='item.replay_count'
            />
            <!-- <un-replay
              v-if="unreplay!=''"
              v-for="(item,index) in unreplay"
              :key="index"
              :name="item.operate"
              :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
              :newtitle="item.title"
              :imgurl1="url+imgurl[0]"
              :imgurl2="url+imgurl[1]"
              :imgurl3="url+imgurl[2]"
						/> -->
            <div class="tiger" v-if="unreplay==''">
              --------没有未回复的问题--------
            </div>
          </div>

        </van-tab>
        <van-tab title="已回复"  >
          <div class="notice_right" >
            <answer-list
              v-if="replay!=''"
              v-for="(item,index) in replay"
              :key="index"
              :name="item.operate"
              :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
              :content="item.content"
              :imgurl1="url+imgurl[0]"
              :imgurl2="url+imgurl[1]"
              :imgurl3="url+imgurl[2]"
              :exportname="exportrepaly.operate"
              :replaytime="$parseTime(exportrepaly.operate_time,'{y}-{m}-{d}')"
              :exportcont="exportrepaly.content"
            />
            <div class="tiger" v-if="replay==''">
              --------没有已回复的问题--------
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
  import PersonCell from '@/components/person-cell.vue'
 import AnswerList from "@/components/answer-list.vue"
 import UnReplay from "@/components/un-replay.vue"
export default {

  components: {
    AnswerList,UnReplay,PersonCell
  },
  data () {
    return {
       active:0,
      unreplay:'',
      replay:'',
      exportrepaly:'',
      imgurl:{},
      id:'',
      enclosure:'',
      url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.search()
    this.get()
    this.getreplay()
  },
  methods:{

    search(){
      this.$http.post({
          url:"/pro/mypro",
          data:{
            "status":0
          }
       }).then(res =>{
        this.unreplay= res.rows.reverse()
        this.unreplay.map((item,index)=>{
          this.enclosure = item.enclosure_id.replace(/\s/g,"");
          this.imgurl = this.enclosure.substring(0,this.enclosure.length - 1);
          this.imgurl = this.imgurl.slice(1);
          this.imgurl = this.imgurl.split(',');
        })

      });
    },
    get(){
      this.$http.post({
          url:"/pro/mypro",
          data:{
            "status":1
          }
       }).then(res =>{
        this.replay= res.rows

        this.replay.map((item,index)=>{
          this.id = item.id
          this.imgurl = item.enclosure_id.substring(0,item.enclosure_id.length - 1);
          this.imgurl = this.imgurl.slice(1);
          this.imgurl = this.imgurl.split(',');
        })
        this.$http.post({
            url:"/pro/replay/"+this.id

         }).then(res =>{
          this.exportrepaly= res.data

        });
      });
    },
    getreplay(){

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
  .tiger{
    width: 100%;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    margin-top: 40rpx;
  }
</style>
