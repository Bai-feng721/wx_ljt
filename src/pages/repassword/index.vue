<template>
  <div class="container">
    <div class="choseuser">
      <van-field
        :value=" password "
        label="旧密码"
        required
        password
        input-align="right"
        placeholder="请输入旧密码"
         @input="password=$event.mp.detail"
         @blur = "checkInp(password,/^[\s\S]{6,12}/,'密码')"
      />
      <van-field
        :value=" newpassword "
        label="新密码"
        required
        password
        input-align="right"
        placeholder="请输入6-12位密码"
         @input="newpassword=$event.mp.detail"
         @blur = "checkInp(newpassword,/^[\s\S]{6,12}/,'密码')"
      />
      <van-field
        :value=" repassword "
        label="确认密码"
        required
        password
        input-align="right"
        placeholder="请再次输入新密码"
         @input="repassword=$event.mp.detail"
         @blur = "repwd"
      />
    </div>
    <div class="foot">
      <div class="finish" @click="rereg">完 成</div>
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
       newpassword:'',
       qpassword:'',
    }
  },

  methods:{
    checkInp(value, reg,msg) {
    		if (!reg.test(value)) { // 符合
            wx.showToast({
              title:msg +'不正确！',
              icon:'none'
            })
    		} else {
    		}
    	},
      repwd(){
        if(this.newpassword!==this.repassword){
          wx.showToast({
            title:'密码不一致！',
            icon:'none'
          })
        }
      },
    rereg(){
      this.$http.post({
        url:'/frontUser/updatePwd',
        data:{
          pwd:this.password,
          oldPwd:this.newpassword
        }
      }).then(
        res=>{
          //跳转之前的页面
          wx.showToast({
            title:"修改成功！",
            icon:"none"
          })
          setTimeout(function() {
            mpvue.navigateTo({
              url:'../my/main'
            })
          }, 2000);
        }
      )
    }
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
    font-size: 34rpx;
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
