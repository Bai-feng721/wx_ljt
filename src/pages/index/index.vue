<template>
  <div class="container">
   <div class="search">
      <van-search
        :value="value"
        shape="round"
        background="white"
        placeholder="请输入搜索关键词"
        @click="gosearch"
      />
   </div>
   <div class="banner">
     <swiper class="swiper" indicator-active-color="#4fc08d" indicator-color="white" indicator-dots="true" autoplay="true" interval="4000" duration="1000" circular="true">
         <block>
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner01.png" class="slide-image" mode="aspectFill"/>
             </swiper-item >
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner02.jpg" class="slide-image" mode="aspectFill"/>
             </swiper-item>
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner03.jpg" class="slide-image" mode="aspectFill"/>
             </swiper-item>
         </block>
     </swiper>
     <!-- <img src="../../../static/images/banner01.png" alt=""> -->
   </div>
   <div class="pict">

     <div class="icon">
       <div class="com_buy" @click="goaction">
         <div class="img_icon">
           <img src="../../../static/images/icon_nldt.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>林技动态</p>
         </div>
       </div>
       <div class="com_buy" @click="gofruit">
         <div class="img_icon">
           <img src="../../../static/images/icon_gszl.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>经济林栽培</p>
         </div>
       </div>
       <div class="com_buy" @click="gomater">
         <div class="img_icon">
           <img src="../../../static/images/icon_xcl.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>绿化树种</p>
         </div>
       </div>
       <div class="com_buy" @click="gotech">
         <div class="img_icon">
           <img src="../../../static/images/icon_jspx.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>技术培训</p>
         </div>
       </div>

     </div>
   </div>

   <div class="news">
    <new-cell
      v-for="(item,index) in newlist"
      :key="index"
      :id="item.id"
      :imgurl="url+item.image"
      :newtitle= "item.title"
      :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
      :read="item.read_count"
      :className="item.headerName"
      :isvideo="0"
    ></new-cell>

   </div>
  </div>
</template>

<script>
  import NewCell from '@/components/new-cell.vue'

  export default {
    data () {
      return {
          value: '',

          newlist:[],
          imgurl:[],
          time:[],
          url:process.env.VUE_IMAGES
        }
      },

    components: {
      NewCell
    },
    //真机调试
    //  onLoad: function() {
    // 	wx.setEnableDebug({
    // 	  enableDebug: true
    // 	})
    //   wx.setEnableDebug({
    //   	  enableDebug: false
    //   	})
    // },

     mounted(){
        this.getNewList()

     },
    methods: {

      getNewList(){
        let that = this
        this.$http
          .post({
            url: "/hContent/list?pageNum=1&pageSize=10",
            data:{
              //"is_content":1文档
               "is_content":1
            }
          })
          .then(res => {
            that.newlist=res.rows

          });
      },
      gosearch(){
        mpvue.navigateTo({
          url:'../search/main'
        })
      },
      goaction(){
        mpvue.navigateTo({
          url:'../agraction/main'
        })
      },
      gofruit(){
        mpvue.navigateTo({
          url:'../fruit/main'
        })
      },
      gomater(){
        mpvue.navigateTo({
          url:'../material/main'
        })
      },
      gotech(){
        mpvue.navigateTo({
          url:'../tech/main'
        })
      },

    },


  }
</script>


<style scoped>
  .search{
    width: 750rpx;
    height:100%;
  }
  .banner{
    width: 750rpx;
    height:100%;
    background: #FFFFFF;
  }

  .banner_item{
    width: 710rpx;
    height:100%;
  }

  .banner img{
    width: 710rpx;
    height:100%;
     margin: 0 20rpx;
     border-radius: 20rpx;
  }
  .pict{
    height: 154rpx;
    width: 100%;
    padding: 20rpx 0;
    background: #FFFFFF;
    border-bottom: 20rpx solid #F2F2F2;
  }

  .icon{
    height: 140rpx;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .img_icon {
    width: 88rpx;
    height: 88rpx;
    margin: 20rpx 18px 20rpx;
    border-radius: 50%;
  }
  .img_icon img{
    width: 88rpx;
    height: 88rpx;
  }

  .icon_buttom{
    width: 160rpx;
    margin-top: 20rpx;
  }

  .icon_buttom p{
     font-size: 26rpx;
     font-weight: 600;
     text-align: center;
     color: #676767;
     margin-top: 10rpx;
  }
  .news{
    width: 750rpx;
    height: 100%;
    margin:20rpx  0;
    background-color: #FFFFFF;
  }


</style>
