<template>
  <div class="container">



   <view class="main"
      v-for="(item,index) in video"
      :key = item.index>
      <block>
        <view class="content" catchtap='onPostTap' data-videoId='2'>
          <text class="video-title">{{item.title}}</text>
          <text class="video-num">{{item.read_count}}次播放</text>
          <video class="video-image" :title="item.title" :poster="url+item.image" :src="videourl[index]"></video>
        </view>
        <view class="mess">
          <view class="icon">
            <img :src="imgurl[index]" alt="">
            <view class="name">
              {{item.name}}
            </view>
          </view>
          <view class="messtime">
           {{time[index]}}
          </view>
        </view>
      </block>
    </view>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      video:[],
      imgurl:[],
      videourl:[],
      time:[],
      url:process.env.VUE_IMAGES
    }
  },
  mounted(){
    this.search()
  },
  methods:{
    search(){
      let that = this
      this.$http.get({
          url:"/hContent/allVideo",

       }).then(res =>{
          that.video = res.data
          that.video.map(function(item,index,arr){
               var cont1 = 'http://172.10.162.112:20000'+item.avator
               var cont2 = 'http://172.10.162.112:20000'+item.enclosure_path
               that.imgurl.push(cont1)
               that.videourl.push(cont2)
               var oDate = new Date(item.operate_time)
               var oYear = oDate.getFullYear()
               var oMonth = oDate.getMonth()+1
               var oDay = oDate.getDate()
               var oTime = oYear +'-'+(oMonth) +'-'+(oDay)
               that.time.push(oTime)

          },123);



      });
    },

  }
}
</script>

<style scoped>
  .video-image {
    width: 92%;
    height: 400rpx;
    border-radius: 10rpx;
    margin-top: 15rpx;
    margin-left: 30rpx;
  }

  .main {
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    background-color: #fff;
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
    padding-bottom: 5px;
  }
  .content{
    position: relative;
  }
  .video-title {
    font-size: 34rpx;
    color: #FFFFFF;
    position: absolute;
    left:70rpx;
    top: 50rpx;
    z-index: 1;

  }
  .video-num{
    font-size: 30rpx;
    color: #FFFFFF;
    position: absolute;
    left:70rpx;
    top: 110rpx;
    z-index: 1;

  }
  .mess{
    height: 80rpx;
    display: flex;
    padding: 0 70rpx;
    justify-content: space-between;
  }
  .icon{
    width: 300rpx;
    display: flex;
    align-items: center;
  }
  .icon img{
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }
  .name{
    font-size: 30rpx;
    margin: 0 30rpx ;
  }
  .messtime{
    color: #b5b5b5;
    font-size: 30rpx;
    line-height: 80rpx;
  }
</style>
