<template>
  <div class="cell" >
    <div class="top_1">
      <div class="top1">
        <div class="newimg">
          <img src="../../static/images/user.jpg" alt="">
        </div>
        <div class="mess">
          <h1 class="content">{{name}}</h1>
          <p>{{newtime}}</p>
        </div>
      </div>
      <div class="buttom">
        <h1>{{content}}</h1>
        <div class="main" v-if="imgurl[0]!=''">
          <img :src="imgurl1" alt="">
          <!-- <img :src="imgurl2" alt="">
          <img :src="imgurl3" alt=""> -->
        </div>
        <div class="mess1">
          <img src="../../static/images/mess.png" alt="">
          <p>1</p>
        </div>
      </div>
    </div>
   <!-- 回复开始 -->
    <div class="top_1">
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
            <h1 class="content">{{exportname}}</h1>
            <p>{{replaytime}}</p>
          </div>
        </div>
        <div class="content">
          <h1>{{exportcont}}</h1>
        </div>
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
      name:{
        type:String,
        default:null
      },
      imgurl:{
        type:String,
        default:null
      },
      imgurl1:{
        type:String,
        default:null
      },
      imgurl2:{
        type:String,
        default:null
      },
      imgurl3:{
        type:String,
        default:null
      },
      content:{
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
      replaycount: {
        type: Number,
        default: null
      },
      exportname: {
        type: Number,
        default: null
      },
      replaytime: {
        type: Number,
        default: null
      },
      exportcont: {
        type: Number,
        default: null
      },
    },
    mounted(){

    },
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
    /* padding: 0 40rpx; */
  }
  .top_1{
    border-bottom: 6px solid #f5f5f5;
  }
  .top{
    width: 240rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top1{
    width:300rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40rpx;
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
    justify-content: space-around;
  }
  .main img{
    width: 94%;
  }
  .reply{
    margin: 10rpx 0;
    padding: 0 40rpx;
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
    font-weight: 300;
  }
  .buttom{
    padding: 0 40rpx;
  }
  .buttom h1{
    /* height:44rpx ; */
    font-size: 30rpx;
    margin: 20rpx 0;
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
