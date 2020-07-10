<template>
  <div class="container">
    <div class="top">
      <img class="newimg" src="../../../static/images/user.jpg"></img>
      <div class="mess">
        <h1 class="content">13112345678</h1>
        <p>普通用户</p>
      </div>
    </div>
    <div class="mylist" @click="goMyAnswer">
      <img class="icon_1" src="../../../static/images/anwer.png"></img>
      <h1 class="title_1">我的提问</h1>
    </div>
    <div class="mylist" @click="outlogin">
      <img class="icon_1" src="../../../static/images/out.png"></img>
      <h1 class="title_1">退出登录</h1>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {

    }
  },

  methods:{
   //查询sn码
    search(){
      this.$http.post({
          url:"/",
          data:{

          },
       }).then(res =>{
        if(res.code==200){

        }else{

        }

      });
    },
    goMyAnswer(){
      wx.navigateTo({
        url:'../myAnswer/main'
      })
    },
    outlogin(){
      this.$http.post({
          url:"/frontUser/loginOut",

       }).then(res =>{
        if(res.code==200){
          setTimeout(()=>{
            wx.showToast({
              title:'退出成功！',
              icon:'none'
            })
            mpvue.navigateTo({
              url:'../index/main'
            })
          },2000)
        }else{

        }

      });
    }
  }
}
</script>

<style scoped>
  .top{
    display: flex;
    width: 100%;
    height: 180rpx;
    align-items: center;
    border-bottom: 5px solid #F2F2F2;
  }
 .newimg{
   width: 85rpx;
   height: 85rpx;
   border-radius: 50%;
   margin-left: 30rpx;
 }
  .content{
    font-size: 30rpx;
  }
  .mess{
    margin-left: 30rpx;
  }
  .mess p{
    font-size: 20rpx;
    width: 90rpx;
    height: 40rpx;
    color: #FFFFFF;
    background-color: #00923f;
    text-align: center;
    line-height: 40rpx;
    border-radius:  30rpx
  }
  .mylist{
    width: 100%;
    height: 80rpx;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F2F2F2;
  }
  .icon_1{
    width: 30rpx;
    height: 30rpx;
    margin:0 30rpx 0 40rpx;
  }
  .title_1{
    font-size: 30rpx;
  }
</style>
