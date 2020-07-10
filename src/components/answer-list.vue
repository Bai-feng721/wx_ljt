<template>
  <div class="cell" >
    <div class="top">
      <div class="newimg">
        <img src="../../static/images/user.jpg" alt="">
      </div>
      <div class="mess">
        <h1 class="content">13112345678</h1>
        <p>2020-7-6</p>
      </div>
    </div>
    <div class="buttom">
      <h1>果树长虫子怎么办</h1>
      <div class="main">
        <img src="../../static/images/pic_sp.png" alt="">
        <img src="../../static/images/pic_sp.png" alt="">
        <img src="../../static/images/pic_sp.png" alt="">
      </div>
      <div class="mess1">
        <img src="../../static/images/mess.png" alt="">
        <p>0</p>
      </div>
    </div>
   <!-- 回复开始 -->
    <div class="reply">
      <div class="reply_top">
        <p></p>
        <h1>回复</h1>
      </div>
      <div class="top">
        <div class="newimg">
          <img src="../../static/images/zhuanjia.jpg" alt="">
        </div>
        <div class="mess">
          <h1 class="content">18812365431</h1>
          <p>2020-7-6</p>
        </div>
      </div>
      <div class="content">
        <h1>在环境植物病虫害防治中，果树病虫害防治的任务更重，因为不仅要对病虫有好的防治效果，同时还要符合环境的要求。这些，在防治方法上和药剂的选择上就要有对传统的突破，就要更新观念，甚至在果树品种的选择和发展上都要有新的要求。本书的编写是一个新的尝试。</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'AnswerList',
    props:{
      data:{

      },
      imgurl:{
        type:String,
        default:null
      },
      newtitle:{
        type:String,
        default:null
      },
      issued:{
        type:String,
        default:null
      },
      newtime:{
        type:String,
        default:null
      },
      createdBy: {
        type: String,
        default: null
      },
      id: {
        type: Number,
        default: null
      },
    },
    mounted(){},
   methods: {
     getDetail() {
       let id = this.id
       mpvue.navigateTo({
         url: ''
       })
     }
   }
  }
</script>

<style scoped>
  .cell{
    /* height: 360rpx; */
    padding: 0 40rpx;
    border-bottom: 6px solid #f5f5f5;
  }
  .top{
    width: 300rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .newimg{
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .newimg img{
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .content{
    font-size: 30rpx;
  }
  .main{
    width: 100%;
    margin: 20rpx 0;
    display: flex;
    justify-content: space-between;
  }
  .main img{
    width: 210rpx;
    height: 150rpx;
  }
  .reply{
    margin: 10rpx 0;
  }
  .reply_top{
    display: flex;
    align-items: center;
  }
  .reply_top p{
    width: 10rpx;
    height: 30rpx;
    background-color: #00923f;
  }
  .reply_top h1{
    font-size: 32rpx;
    margin-left: 15rpx;
  }
  .buttom h1{
    height:44rpx ;
    font-size: 30rpx;
  }
  .mess1{
    display: flex;
    align-items: center;
  }
  .mess1 img{
    width: 24rpx;
    height: 24rpx;
    margin-right: 20rpx;
  }
  .mess p{
    color: #999999
  }
  .mess1 p{
    color: #999999
  }

</style>
