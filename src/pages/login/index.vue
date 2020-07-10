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
    <div class="footer">
      <div class="reg " @click="toreg">注册</div>
      <div class="perfect" @click="forget">忘记密码?</div>
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
    }
  },
  mounted () {
    this.id=this.$root.$mp.query.id
    console.log("1111",this.id)
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
                wx.navigateTo({
                  url:'../expertAnswer/main?id='+this.id
                 })
              })

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
    toreg(){
      mpvue.navigateTo({
        url:'../reg/main'
      })
    },

    forget(){
      mpvue.navigateTo({
        url:''
      })
    }
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
