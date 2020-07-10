<template>
  <div class="cell" @click="goDetail">
    <div class="newtitle">
      <h1>{{newtitle}}</h1>
      <div class="mess">
       <p>{{time}}</p>
       <p>{{read}}次阅读</p>
      </div>
    </div>
    <div class="newimg">
      <img :src="imgurl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnCell',
    props: {
      data: {

      },
      id: {
        type: String,
        default: null
      },
      time: {
        type: String,
        default: null
      },
      imgurl: {
        type: String,
        default: null
      },
      newtitle: {
        type: String,
        default: null
      },
      read: {
        type: String,
        default: null
      },
      newtime: {
        type: String,
        default: null
      },
      apiName: {
        type: String,
        default: null
      },
      createdBy: {
        type: String,
        default: null
      }
    },
    mounted() {},
    methods: {
      goDetail() {
        mpvue.navigateTo({
          url: '../detail/main?id='+this.id
        })
      }
    }
  }
</script>

<style scoped>
  .cell {
    width: 100%;
    height: 160rpx;
    display: flex;
    padding: 20rpx 0;
    border-bottom: 2rpx solid #f5f5f5;
  }

  .newimg img {
    width: 200rpx;
    height: 160rpx;
    border-radius:15rpx;
  }

  .content{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 26rpx;
  }
  .newtitle {
    width: 450rpx;
    height: 160rpx;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 40rpx 0 20rpx;
  }

  .newtitle h1 {
    font-size: 30rpx;
    font-weight: 600;
  }

  .mess {
    display: flex;
    justify-content: space-between;
  }

  .mess p {
    font-size: 26rpx;
  }
</style>
