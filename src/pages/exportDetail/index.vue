<template>
  <div class="container">
    <div class="cell">
      <div class="top">
        <img class="newimg" :src="url+exportDetailt.avator"></img>
        <div class="mess" @click="goExport">
          <div class="mess1">
            <h1>{{exportDetailt.name}}</h1>
            <p>{{exportDetailt.post}}</p>
          </div>
          <div class="mess1">
            <h2>{{exportDetailt.remark}}</h2>
          </div>
          <div class="mess1">
            <p>研究方向:</p>
            <p>{{exportDetailt.expertise}}</p>
          </div>
          <div class="mess1">
            <h1>电话号码:{{exportDetailt.phone}}</h1>
          </div>
        </div>
        <!-- <div class="btn"  @click="getDetail">
         提问
        </div> -->
      </div>

    </div>
    <div class="detail">
      <p>{{exportDetailt.remark}}</p>
    </div>
    <div class="foot">
      <div class="finish" @click="goPhone">拨打电话</div>
      <div class="finish" @click="getDetail">在线提问</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
       exportDetailt:'',
       id:'',
       phoneNumber:'',
       url:process.env.VUE_IMAGES
    }
  },
  mounted() {
    this.id=this.$root.$mp.query.id
    this.search(this.id)
  },
  methods:{
    search(id){
      this.$http.post({
          url:"/expe/detail/"+id

       }).then(res =>{
        this.exportDetailt=res.data
        this.phoneNumber=res.data.phone
      });
    },
    //拨号
    goPhone(){
      wx.makePhoneCall({
        phoneNumber: this.phoneNumber
      })
    },
    //提问
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
    height: 200rpx;
    padding: 0 40rpx;
    border-bottom: 6px solid #f5f5f5;
  }
  .top{
    width: 100%;
    height: 200rpx;
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
    height: 180rpx;
    width: 80%;
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
    font-size: 32rpx;
    letter-spacing: 5rpx;
  }
  .mess h2{
    font-size: 30rpx;
    width: 500rpx;
    color: #999999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    letter-spacing: 5rpx;
  }
  .mess1 p{
    color: #00923f;
    font-size: 30rpx;
		letter-spacing: 5rpx;
  }
  .detail{
    padding: 40rpx 30rpx;
  }
  .detail p{
    line-height: 60rpx;
    letter-spacing: 5rpx;
    color: #7b7b7b;
    font-size: 30rpx;
    text-indent: 50rpx;
  }
  .foot{
    position:fixed;
    width: 100%;
    left: 0rpx;
    bottom: 0rpx;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .finish{
    width: 300rpx;
    height: 88rpx;
    background:#00923f;
    color:#fff;
    text-align:center;
    line-height:88rpx;
    border-radius:44rpx;
    font-size:34rpx;
    margin:40rpx 0rpx
  }
</style>
