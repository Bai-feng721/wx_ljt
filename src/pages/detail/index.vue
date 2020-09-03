<template>
  <div class="container">
    <div class="title">
      <h1>{{data.title}}</h1>
      <div class="mess">
        <h2>发布人:{{data.operate}}</h2>
        <p class="pcolor">{{data.operate_time}}</p>
        <p class="pcolor">{{data.read_count}}阅读</p>
      </div>
    </div>
    <div class="content">
      <p v-html="data.content"></p>
    </div>
    <div class="detailimg">
      <!-- <img v-if="data.image" :src="url + data.image" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      data: {},
      time:'',
      url: process.env.VUE_IMAGES
    };
  },
  mounted() {
    this.getData(this.$root.$mp.query.id);
  },
  methods: {
    getData(id) {
      if (id) {
        this.$http
          .get({
            url: "/hContent/detail/" + id
          })
          .then(res => {
            this.data = res.data
            this.data.operate_time= this.$parseTime(this.data.operate_time,'{y}-{m}-{d}')
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
