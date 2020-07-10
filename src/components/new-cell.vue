<template>
  <div class="cell"  @click="getDetail">
    <div class="newimg">
      <!-- <img :src="imgurl" alt=""> -->
      <img :src="imgurl" alt="">
    </div>
    <div class="newtitle">
      <h1 class="content">{{newtitle}}</h1>
      <div class="mess">
        <p>{{newtime}}</p>
        <p>{{read}}次阅读</p>
        <p>类别</p>
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
    },
    mounted(){},
   methods: {
     getDetail() {
       let id = this.id
       mpvue.navigateTo({
         url: '../detail/main?id='+id
       })
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
  .newtitle h1{
    font-size: 30rpx;
    font-weight: 600;
  }
  .mess{
    display: flex;
    justify-content: space-between;
  }
  .mess p{
    font-size: 24rpx;
    color: #676767;
  }

  .content{
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    font-size: 26rpx;
  }
</style>
