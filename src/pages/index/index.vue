<template>
  <div class="container">
   <div class="search">
      <van-search
        :value="value"
        shape="round"
        background="white"
        placeholder="请输入搜索关键词"
        @focus="gosearch"
      />
   </div>
   <div class="banner">
     <swiper class="swiper" indicator-active-color="#4fc08d" indicator-color="white" indicator-dots="true" autoplay="true" interval="4000" duration="1000" circular="true">
         <block>
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner01.png" class="slide-image" mode="aspectFill"/>
             </swiper-item >
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner01.png" class="slide-image" mode="aspectFill"/>
             </swiper-item>
             <swiper-item class="banner_item">
                 <img src="../../../static/images/banner01.png" class="slide-image" mode="aspectFill"/>
             </swiper-item>
         </block>
     </swiper>
     <!-- <img src="../../../static/images/banner01.png" alt=""> -->
   </div>
   <div class="pict">
     <div class="notice">
       <img src="../../../static/images/pic_tzgg.png" alt="">
       <div>
         <swiper class="swiper_com" vertical="true" autoplay="true" circular="true" interval="2000">
             <block
             v-for="(item,index) in msgList"
             :key="index">
               <navigator open-type="navigate">
                 <swiper-item>
                   <view class="swiper_item">{{item.title}}</view>
                 </swiper-item>
               </navigator>
             </block>
           </swiper>

       </div>
       <!-- <p>更多</p> -->
     </div>
     <div class="icon">
       <div class="com_buy" @click="goaction">
         <div class="img_icon">
           <img src="../../../static/images/icon_nldt.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>农林动态</p>
         </div>
       </div>
       <div class="com_buy" @click="gofruit">
         <div class="img_icon">
           <img src="../../../static/images/icon_gszl.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>果树种类</p>
         </div>
       </div>
       <div class="com_buy" @click="gomater">
         <div class="img_icon">
           <img src="../../../static/images/icon_xcl.png" alt="">
         </div>
         <div class="icon_buttom">
           <p>新材料</p>
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
      :key=index
      :id=item.id
      :imgurl=imgurl[index]
      :newtitle= item.title
      :newtime=time[index]
      :read=item.read_count
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
          msgList: [
            { url: "url", title: "公告：武威农林科技公告" },
            { url: "url", title: "公告：认真贯彻落实党中央通知" },
            { url: "url", title: "公告：威威林业局近日开展活动" },
          ],
          newlist:[],
          imgurl:[],
          time:[],
        }
      },

    components: {
      NewCell
    },

     mounted(){
        this.getNewList()

     },
    methods: {

      getNewList(){
        let that = this
        this.$http
          .get({
            url: "/hContent/allContent?pageNum=1&pageSize=10"
          })
          .then(res => {
            that.newlist=res.rows
            that.newlist.map(function(item,index,arr){
              var cont1 = 'http://172.10.162.112:20000'+item.image
              var oDate = new Date(item.operate_time)
              var oYear = oDate.getFullYear()
              var oMonth = oDate.getMonth()+1
              var oDay = oDate.getDate()
              var oTime = oYear +'-'+(oMonth) +'-'+(oDay)
             that.imgurl.push(cont1)
             that.time.push(oTime)

            })
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
    height: 254rpx;
    width: 750rpx;
    padding: 20rpx;
    background: #FFFFFF;
    border-bottom: 20rpx solid #F2F2F2;
  }
  .notice{
    width: 750rpx;
    height: 81rpx;
    font-size: 28rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #676767;
    /* padding: 20rpx; */
  }
  .notice img{
    width: 140rpx;
    height:   40rpx;
  }
  .swiper_com {
    height: 50rpx;
    width: 560rpx;
  }
  .swiper_item {
    font-size: 30rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    letter-spacing: 2px;
  }

  .icon{
    height: 140rpx;
    width: 750rpx;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .img_icon {
    width: 88rpx;
    height: 88rpx;
    margin: 20rpx 0 0 20rpx;
    border-radius: 50%;
  }
  .img_icon img{
    width: 88rpx;
    height: 88rpx;
  }

  .icon_buttom{
    width: 120rpx;
    margin-top: 20rpx;
  }

  .icon_buttom p{
     font-size: 30rpx;
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
