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
        placeholder="请输入6-12位密码"
         @input="password=$event.mp.detail"
         @blur = "checkInp(password,/^[\s\S]{6,12}/,'密码')"
      />
      <van-field
        :value=" repassword "
        label="确认密码"
        required
        password
        input-align="right"
        placeholder="请再次输入密码"
         @input="repassword=$event.mp.detail"
         @blur = "repwd"
      />
      <van-field
          :value="inputCode "
          center
          required
          clearable
          label="验证码"
          placeholder="请输入验证码"
          @input="inputCode=$event.mp.detail"
          :border="false"
          use-button-slot
          @blur="validate"
        >
          <van-button
            custom-style="font-size:36rpx"
            slot="button"
            size="small"
            type="primary"
            @click="randomCode"
          >
            {{code}}
          </van-button
          >
        </van-field>

    </div>
    <div class="foot">
      <div class="finish" @click="reg">注 册</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      password:'',
      repassword:'',
      phone:'',
      code:'',
      arrCode:["1", "2", "3", "4","5", "6", "7", "8", "9", "0"],
      inputCode:''
    }
  },
  created () {
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
      repwd(){
        if(this.password!==this.repassword){
          wx.showToast({
            title:'密码不一致！',
            icon:'none'
          })
        }
      },
      //验证码
      randomCode(){
       if(this.code!=''){
         this.code=''
         let that = this
         var codeLength=4
         for(var i=0;i<4;i++){
         	var index=Math.floor(Math.random()*10);
         	that.code += that.arrCode[index];
         }
       }else{
         let that = this
         var codeLength=4
         for(var i=0;i<4;i++){
         	var index=Math.floor(Math.random()*10);
         	that.code += that.arrCode[index];
         }
       }
      },
      //校验验证码
      validate(){
        let that = this
        if(that.inputCode == '') { //若输入的验证码长度为0
           wx.showToast({
             title:'请输入验证码！',
             icon:'none'
           })
        }else if(that.inputCode == that.code ) {
            wx.showToast({
              title:'验证码正确',
              icon:'none'
            })
        }else {
            wx.showToast({
              title:'验证码错误！',
              icon:'none'
            })
           that.inputCode = "";//清空文本框
        }
      },
     //注册
      reg(){
        if(this.phone!=''&&this.password!=''&&this.inputCode!=''){
        let that =this
        this.$http.post({
              url:"/frontUser/register",
              data:{
                account: that.phone,
                passwd: that.password
              },
          }).then(res =>{
              if(res.code == 200) {
               wx.showToast({
                 title: "注册成功",
                 duration: 2000,
                 mask: true,
               });
               setTimeout(()=>{
                 wx.navigateTo({
                   url:'../login/main'
                  })
                  that.phone="",
                  that.password='',
                  that.inputCode='',
                  that.repassword=''
               },2000)
              } else if(res.code == 500){
                wx.showToast({
                  title: res.msg,
                  icon:'none',
                });
              }else if(res.code == 403){
                wx.showToast({
                  title: res.msg,
                  icon:'none',
                });
              }else {
                wx.showToast({
                title: '系统开小差',
                icon: 'loading',
                duration: 2000,
                mask: true,
              });
            }
          });
        }else{
          wx.showToast({
            title:'请完善信息！',
            icon:'none'
          })
        }
      }
  },
  mounted() {
    this.randomCode()
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
  }
  .choseuser{
    width: 100%;
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
    margin:80rpx 0rpx
  }
</style>
