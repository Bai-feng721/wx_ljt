<template>
  <div class="container">
    <div class="title">
      <h1>{{data.title}}开发者编写代码，可发布到iOS，H5，以及各种小程序</h1>
      <div class="mess">
        <h2>发布人:adddd{{data.createdBy}}</h2>
        <p class="pcolor">2020-7-6{{data.createdTime}}</p>
        <p class="pcolor">166阅读</p>
      </div>
    </div>
    <div class="content">
      <p>{{data.content}}是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS，Android，H5，以及各种小程序（微信/支付宝/百度/头条/ QQ /钉钉/淘宝） ，快应用等多个平台。DCloud公司拥有500万开发者用户，数十万应用案例，10亿手机端月活用户，数十款uni-app插件，70 +微信/ qq群。阿里小程序工具官方内置uni-app（详见） ，，腾讯课堂官方为uni-app录制培训课程（详见），开发者可以放心选择。</p>
    </div>
    <div class="detailimg">
      <img v-if="data.images" :src="url + data.images" alt />
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      data: {},
      url: process.env.VUE_APP_IMAGES
    };
  },
  mounted() {
    this.getData(this.$root.$mp.query.id);
    console.log(this.$root.$mp)
  },
  methods: {
    getData(id) {
      if (id) {
        this.$http
          .get({
            url: "reservePlanController/" + id
          })
          .then(res => {
            this.data = res.data
            this.data.createdTime = this.$parseTime(this.data.createdTime,'{y}-{m}-{d}')
          });
      } else {
        console.log(id);
      }
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
}
.title {
    width: 100%;
    height: 160rpx;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
    padding: 30rpx;
  }
  .title h1 {
    font-size: 36rpx;
    font-weight: 600;
    margin: 0 30rpx;
  }
  .pcolor{
    font-size: 26rpx;
    color: #666666;
  }
  .mess {
   width: 92%;
   display: flex;
   justify-content: space-between;
  }
  .mess h2 {
    font-size: 30rpx;
    color: #666666;
  }
  .content {
    margin-bottom: 30rpx;
    padding: 30rpx;
  }
  .content p {
    font-size: 28rpx;
    text-indent: 50rpx;
    color: #666666;
    line-height: 50rpx;
    letter-spacing: 2rpx;
  }

.detailimg img {
  height: 550rpx;
}
</style>
