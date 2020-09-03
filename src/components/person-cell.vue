<template>
  <div class="cell" @click="getDetail">
    <div class="top">
      <div class="newimg">
        <img src="../../static/images/user.jpg" alt="">
      </div>
      <div class="mess">
        <h1 class="content">{{name}}</h1>
        <p>{{newtime}}</p>
      </div>
    </div>
    <div class="buttom">
      <h1>{{title}}</h1>
      <div class="mess1">
        <img src="../../static/images/mess.png" alt="">
        <p>{{count}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {

      },
      count: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      newtime: {
        type: String,
        default: null
      },
      createdBy: {
        type: String,
        default: null
      },
      id: {
        type: Number,
        default: null
      },
    },
    mounted() {},
    methods: {
      getDetail() {
        mpvue.navigateTo({
          url: '../answerDetail/main?id=' + this.id
        })
      }
    }
  }
</script>

<style scoped>
  .cell {
    /* height: 200rpx; */
    padding: 0 40rpx;
    border-bottom: 6px solid #f5f5f5;
  }

  .top {
    width: 300rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .newimg {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }

  .newimg img {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }

  .content {
    font-size: 30rpx;
  }

  .buttom h1 {
    /* height: 44rpx; */
    font-size: 30rpx;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .mess1 {
    display: flex;
    align-items: center;
  }

  .mess1 img {
    width: 24rpx;
    height: 24rpx;
    margin-right: 20rpx;
  }

  .mess p {
    color: #999999
  }

  .mess1 p {
    color: #999999
  }
</style>
