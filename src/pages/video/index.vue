<template>
  <div class="container">

    <view class="main" v-for="(item,index) in video" :key=index>
      <block>
        <view class="content" data-videoId='2'>
          <text class="video-title">{{item.title}}</text>
          <text class="video-num">{{item.read_count}}次播放</text>
          <video class="video-image" :title="item.title" :poster="url+item.image" :src="url+item.enclosure_path" @play='playcount'></video>
        </view>
        <view class="mess">
          <view class="icon">
            <img :src="url+item.avator" alt="">
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
    components: {},
    data() {
      return {
        video: [],
        imgurl: [],
        videourl: [],
        time: [],
        url: process.env.VUE_IMAGES
      }
    },
    mounted() {
      this.search()
    },
    onShow() {
      this.search()
    },
    methods: {
      playcount(e){
        console.log(e)
        this.$http.get({
            url:"/hContent/detail/"+id

         }).then(res =>{

        });
      },
      search() {
        let that = this
        this.$http.get({
          url: "/hContent/allVideo",

        }).then(res => {
          that.video = res.rows
          that.video.map(function(item, index, arr) {

            var oDate = new Date(item.operate_time)
            var oYear = oDate.getFullYear()
            var oMonth = oDate.getMonth() + 1
            var oDay = oDate.getDate()
            var oTime = oYear + '-' + (oMonth) + '-' + (oDay)
            that.time.push(oTime)

          }, 123);



        });
      },

    }
  }
</script>

<style scoped>
  .video-image {
    width: 94%;
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

  .content {
    position: relative;
  }

  .video-title {
    width: 400rpx;
    font-size: 34rpx;
    color: #FFFFFF;
    position: absolute;
    left: 70rpx;
    top: 32rpx;
    z-index: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  .video-num {
    font-size: 30rpx;
    color: #FFFFFF;
    position: absolute;
    left: 580rpx;
    top: 35rpx;
    z-index: 1;

  }

  .mess {
    height: 80rpx;
    display: flex;
    padding: 0 70rpx;
    justify-content: space-between;
  }

  .icon {
    width: 300rpx;
    display: flex;
    align-items: center;
  }

  .icon img {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }

  .name {
    font-size: 30rpx;
    margin: 0 30rpx;
  }

  .messtime {
    color: #b5b5b5;
    font-size: 30rpx;
    line-height: 80rpx;
  }
</style>
