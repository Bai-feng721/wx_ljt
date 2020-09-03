<template>
  <div class="container">
    <div class="notice">
      <van-tabs :active="active" color="#00923f " @change="onChange" type="card" swipeable>
        <van-tab title="问答">
          <div class="notice_left">
            <person-cell v-for="(item,index) in allList" :key='index' :id="item.id" :name='item.operate' :newtime="$parseTime(item.operate_time,'{y}-{m}-{d}')"
              :title='item.title' :count='item.replay_count' />
            <div class="btn"></div>
            <div class="foot">
              <div class="finish" @click="goAnswer">在线提问</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="专家">
          <div class="notice_right">
            <expert-cell v-for="(item,index) in expertList" :key='index' :id="item.user_id" :name='item.name' :post='item.post'
              :remark='item.remark' :expertise='item.expertise' :imgurl="url+item.avator" />

          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
  import PersonCell from '@/components/person-cell.vue'
  import ExpertCell from '@/components/expert-cell.vue'
  export default {

    components: {
      PersonCell,
      ExpertCell
    },
    data() {
      return {
        active: 0,
        listtotal:'',
        listtotal1:'',
        expertList: [],
        allList: [],
        pageNum: 1,
        pageNum1: 1,
        url: process.env.VUE_IMAGES
      }
    },
    mounted() {
      this.search()
    },
    onShow() {
      this.allAnswer()
    },
    onReachBottom() {
      console.log('上拉')
      if(this.pageNum<=this.listtotal){
         this.allAnswer()
      }
      if(this.pageNum1<=this.listtotal1){
         this.search()
      }

    },
    methods: {

      search() {
        this.$http.post({
          url: "/expe/list?pageSize=10&pageNum=" + this.pageNum1++,

        }).then(res => {
          res.rows.map(item => {
            this.expertList.push(item)
          })
           this.listtotal1=Math.ceil(res.total/10)
        });
      },
      allAnswer() {
        let data = {
          "is_invitation": 0
        }
        this.$http.post({
          url: "/pro/list?pageSize=10&pageNum=" + this.pageNum++,
          data,
        }).then(res => {
          res.rows.reverse().map(item => {
            this.allList.push(item)
          })
          this.listtotal=Math.ceil(res.total/10)
        });
      },
      goAnswer() {
        if (wx.getStorageSync('token')) {
          wx.navigateTo({
            url: '../onlineAnswer/main'
          })
        } else {
          wx.showToast({
            title: '请登录后提问！',
            icon: 'none',
          });
          // setTimeout(()=>{
          //   wx.navigateTo({
          //     url:'../login/main'
          //    })
          // },2000)
        }

      }
    }
  }
</script>

<style scoped>
  .notice {
    width: 100%;
    height: 100%;
    font-size: 28rpx;
  }

  .notice_left,
  .notice_right {
    height: 100%rpx;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .btn {
    height: 110rpx;
  }

  .foot {
    position: fixed;
    width: 100%;
    left: 0rpx;
    bottom: 0rpx;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }

  .finish {
    width: 300rpx;
    height: 70rpx;
    background: #00923f;
    color: #fff;
    text-align: center;
    line-height: 70rpx;
    border-radius: 35rpx;
    font-size: 34rpx;
    margin: 20rpx 0rpx
  }
</style>
