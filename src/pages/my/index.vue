<template>
  <div class="container">
    <div class="top" @click="gologin">
      <img class="newimg" src="../../../static/images/user.jpg"></img>
      <div class="mess" >
        <h1 class="content" v-if="phone==''?true:false">未登录</h1>
        <h1 class="content" v-else>{{phone}}</h1>
      </div>
    </div>
    <div class="mylist" @click="goMyAnswer">
      <img class="icon_1" src="../../../static/images/anwer.png"></img>
      <h1 class="title_1">我的提问</h1>
    </div>
    <div class="mylist" @click="goreg">
      <img class="icon_1" src="../../../static/images/regist.png"></img>
      <h1 class="title_1">用户注册</h1>
    </div>
    <div class="mylist" @click="gorepass">
      <img class="icon_1" src="../../../static/images/repass.png"></img>
      <h1 class="title_1">修改密码</h1>
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
      phone:'',
    }
  },
  onShow() {
    this.getinfo()
  },

  methods:{
    gologin(){
      wx.navigateTo({
        url:'../login/main'
      })
    },
    goreg(){
      wx.navigateTo({
        url:'../reg/main'
      })
    },
    gorepass(){
      if(wx.getStorageSync('token')){
        wx.navigateTo({
          url:'../repassword/main'
        })
      }else{
        wx.showToast({
          title:'请登录后修改！',
          icon:"none"
        })

      }

    },
    getinfo(){
      this.phone=''
      this.$http.get({
          url:"/frontUser/userInfo"
       }).then(res =>{
          this.phone = res.data.operate
      });
    },
    goMyAnswer(){
      if (wx.getStorageSync('token')) {
          wx.navigateTo({
            url:'../myAnswer/main'
          })
      } else {
      				 wx.showToast({
      				   title: '请登录后查看！',
      				   icon:'none',
      				 });

      }

    },
    outlogin(){
      this.$http.post({
          url:"/frontUser/loginOut",

       }).then(res =>{
        if(res.code==200){
          wx.showToast({
            title:'退出成功！',
            icon:'none'
          })
           wx.removeStorageSync('token')
          setTimeout(()=>{
            mpvue.switchTab({
              url:'../index/main'
            })
          },2000)
        }else if(res.code==403){
          wx.showToast({
            title:'您还没有登录！',
            icon:'none'
          })
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
  .mess h1{
    font-size: 32rpx;
  }
  .mylist{
    width: 100%;
    height: 100rpx;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F2F2F2;
  }
  .icon_1{
    width: 50rpx;
    height: 50rpx;
    margin:0 30rpx 0 40rpx;
  }
  .title_1{
    font-size: 34rpx;
  }
</style>
