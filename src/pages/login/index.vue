<template>
  <div class="container">
    <div class="choseuser">
        <van-field
          :value=" phone "
          label="手机号"
          required
          input-align="right"
          placeholder="请输入手机号"
          @input="phone=$event.mp.detail"
          @blur = "checkInp(phone,/^1[3456789]\d{9}$/,'电话号码')"
        />
        <van-field
          :value=" password "
          label="密码"
          required
          password
          input-align="right"
          placeholder="请输入密码"
          @input="password=$event.mp.detail"
          @blur = "checkInp(password,/^[\s\S]{6,12}/,'密码')"
        />
    </div>
    <div class="foot">
      <div class="finish" @click="login">登 录</div>
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
       password:'',
       id:"",
       lTime: "", // 最后一次登录的时间
       ctTime: "", //当前时间
       // tOut: 10*1000,   //超时时间30min
    }
  },
  mounted () {
    this.id=this.$root.$mp.query.id
    setInterval(this.tTime, 4*60*1000);
  },
  methods:{
    checkInp(value, reg,msg) {
    		if (!reg.test(value)) { // 符合
            wx.showToast({
              title:msg +'不正确！',
              icon:'none'
            })
    		}
    	},

    login(){
      let data = {
        "account": this.phone,
        "pwd": this.password,
        }
      if(this.phone!=''&&this.password!=''){
        this.$http.post({
              url:"/frontUser/login",
              data,
          }).then(
           res=>{
             if(res.code == 200) {
              this.lTime = new Date().getTime();
              wx.showToast({
                title: "登录成功",
                duration: 2000,
                mask: true,
              });
              //种token信息
               wx.setStorageSync(
                "token",res.data.token
              )
              setTimeout(()=>{
                if(this.id){
                  wx.navigateTo({
                    url:'../expertAnswer/main?id='+this.id
                   })
                }else{
                  wx.switchTab({
                    url:'../my/main'
                   })
                }
              },2000)


             }else{
               wx.showToast({
                 title: res.msg,
                 icon:'none',
               });
             }
           }
         )
      }else{
        wx.showToast({
          title:'请完善登录信息！',
          icon:'none'
        })
      }
    },
    tTime() {
      console.log(111)
      this.ctTime = new Date().getTime();
      if (this.ctTime - this.lTime > 27*60*1000) {
        if (wx.getStorageSync('token')) {
          // 退出登录
          wx.showToast({
            title:'登录超时',
            icon:'none',
            duration:2000
          })
          wx.removeStorageSync('token')
          setTimeout(()=>{
            wx.navigateTo({
              url:'../login/main'
            })
          },3000)
        }
      }
    },
    toreg(){
      mpvue.navigateTo({
        url:'../reg/main'
      })
    },

  }
}
</script>

<style scoped>
  .container{
    display: flex;
  }
  .choseuser{
    width: 100%;
    margin-top: 60rpx;
  }
  .footer{
    width: 600rpx;
    display: flex;
    justify-content: space-between;
  }
  .perfect{
    width: 120rpx;
    font-size: 26rpx;
    color: #00923f;
    margin-top: 28rpx;
  }
  .reg{
    width: 150rpx;
    font-size: 26rpx;
    color: #00923f;
     margin-top: 28rpx;
  }
  .finish{
    width: 605rpx;
    height: 88rpx;
    background:#00923f;
    color:#fff;
    text-align:center;
    line-height:88rpx;
    border-radius:44rpx;
    font-size:34rpx;
    margin:80rpx 0rpx 10rpx
  }
</style>
