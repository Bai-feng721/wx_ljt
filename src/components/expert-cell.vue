<template>
  <div class="cell" >
    <div class="top">
      <img class="newimg" :src="imgurl"></img>
      <div class="mess" @click="goExport">
        <div class="mess1">
          <h1>{{name}}</h1>
          <p>{{post}}</p>
        </div>
        <div class="mess1">
          <h2>{{remark}}</h2>
        </div>
        <div class="mess1">
          <p>研究方向:</p>
          <p>{{expertise}}</p>
        </div>
      </div>
      <div class="btn"  @click="getDetail">
       提问
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name:'NewCell',
    props:{
      data:{

      },
      imgurl:{
        type:String,
        default:null
      },
      name:{
        type:String,
        default:null
      },
      post:{
        type:String,
        default:null
      },
      remark:{
        type:String,
        default:null
      },
      expertise: {
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
     goExport(){
       wx.navigateTo({
         url: '../exportDetail/main?id='+this.id
       })
     },
     getDetail() {
       let that = this
       if (wx.getStorageSync('token')) {
           wx.navigateTo({
             url: '../expertAnswer/main?id='+that.id
           })
       } else {
				 wx.showToast({
				   title: '请登录后提问！',
				   icon:'none',
				 });
         setTimeout(()=>{
           wx.navigateTo({
             url:'../login/main?id='+that.id
            })
         },2000)
       }
     }
   }
  }
</script>

<style scoped>
  .cell{
    height: 160rpx;
    padding: 0 40rpx;
    border-bottom: 6px solid #f5f5f5;
  }
  .top{
    width: 100%;
    height: 160rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .newimg{
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
    margin-bottom: 30rpx;
  }
  .mess{
    height: 140rpx;
		width: 68%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .mess1{
    display: flex;
		height: 40rpx;
    align-items: center;
  }
  .mess1 h1{
    margin-right: 30rpx;
    font-size: 34rpx;
  }
  .mess h2{
    width: 500rpx;
    color: #999999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .mess1 p{
    color: #00923f;
  }
  .btn{
    width: 100rpx;
    height: 50rpx;
    color: #FFFFFF;
    background-color: #00923f;
    text-align: center;
    line-height: 50rpx;
    border-radius:  30rpx
  }
</style>
