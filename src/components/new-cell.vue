<template>
  <div class="cell"  @click="getDetail">
    <div class="newimg">
      <!-- <img :src="imgurl" alt=""> -->
      <img :src="imgurl" alt="">
    </div>
    <div class="newtitle">
      <p class="content">{{newtitle}}</p>
      <div class="mess">
        <p>{{newtime}}</p>
        <p>{{read}}次阅读</p>
        <p>{{className}}</p>
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
      newtitle:{
        type:String,
        default:null
      },
      newtime:{
        type:String,
        default:null
      },
      createdBy: {
        type: String,
        default: null
      },
      read: {
        type: String,
        default: null
      },
      id: {
        type: Number,
        default: null
      },
      className: {
        type: Number,
        default: null
      },
      isvideo: {
        type: Number,
        default: null
      },
    },
    mounted(){},
   methods: {
     getDetail() {
        let id = this.id
       //isvideo==0文档isvideo==1视频
       if(this.isvideo==0){

         mpvue.navigateTo({
           url: '../detail/main?id='+id
         })
       }else{
         mpvue.navigateTo({
           url: '../videoDetail/main?id='+id
         })
       }
     }
   }
  }
</script>

<style scoped>
  .cell{
    width: 100%;
    height: 160rpx;
    display: flex;
    padding: 20rpx;
    border-bottom: 2rpx solid #f5f5f5;
  }
  .cell img{
    width: 200rpx;
    height: 160rpx;
  }
  .newtitle{
    width: 450rpx;
    height: 160rpx;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20rpx;
  }
  .mess{
    display: flex;
    justify-content: space-between;
  }
  .mess p{
    font-size: 24rpx;
  }

  .content{
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    font-size: 30rpx;
    color: #000000;
  }
</style>
