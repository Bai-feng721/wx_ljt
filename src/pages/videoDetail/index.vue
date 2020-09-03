<template>
  <div class="container">
  <view class="main">
      <block>
        <view class="content" catchtap='onPostTap' data-videoId='2'>
          <text class="video-title">{{video.title}}</text>
          <text class="video-num">{{video.read_count}}次播放</text>
          <video
            class="video-image"
            :title="video.title"
            :poster="url+video.image"
            :src="url+video.enclosure_path"></video>
        </view>
        <view class="mess">
          <view class="icon">
            <img :src="url+video.avator" alt="">
            <view class="name">
              {{video.operate}}
            </view>
          </view>
          <view class="messtime">
           {{video.operate_time}}
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
      video:{},
      url:process.env.VUE_IMAGES
    }
  },
  mounted(){
    this.getdata(this.$root.$mp.query.id)
  },
  methods:{
    getdata(id){
      if(id){
        this.$http.get({
            url:"/hContent/detail/"+id

         }).then(res =>{
            this.video = res.data
            this.video.operate_time= this.$parseTime(this.video.operate_time,'{y}-{m}-{d}')
        });
      }else{
        console.log(id)
      }
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
