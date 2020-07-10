<template>
  <div class="cell" >
    <div class="top">
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
      <div class="main">
        <img :src="imgurl1" alt="">
        <img :src="imgurl2" alt="">
        <img :src="imgurl3" alt="">
      </div>
      <div class="mess1">
        <img src="../../static/images/mess.png" alt="">
        <p>{{replay}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    props:{
      data:{

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
      newtitle:{
        type:String,
        default:null
      },
      name:{
        type:String,
        default:null
      },
      newtime:{
        type:String,
        default:null
      },
      content: {
        type: String,
        default: null
      },
      id: {
        type: Number,
        default: null
      },
      replay: {
        type: Number,
        default: null
      },
    },
    mounted(){
      console.log(this.imgurl1)
      console.log(this.imgurl2)
      console.log(this.imgurl3)

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
    /* height:44rpx ; */
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
