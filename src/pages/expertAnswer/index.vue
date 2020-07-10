<template>
  <div class="container">
    <div class="main">
       <van-cell-group>
         <van-field
           :value="name "
           label="姓名"
           required
           placeholder="请输入您的姓名"
           input-align="right"
            @input="name=$event.mp.detail"
         />
         <van-field
           :value="phone "
           label="联系电话"
           required
           placeholder="请输入您的联系电话"
           input-align="right"
            @input="phone=$event.mp.detail"
            @blur = "checkInp(phone,/^1[3456789]\d{9}$/,'电话号码')"
         />
         <van-field
           :value=" type "
           label="问题类型"
            is-link
            required
           input-align="right"
           @click="showPopup"
         />
         <van-popup
           :show="show "
           @close="onClose">
           <div class="pick">
             <van-picker title="问题类型" show-toolbar :columns="columns" @cancel="show = false" @confirm="onConfirm"/>
           </div>
         </van-popup>
         <van-field
           :value=" title "
           label="问题标题"
           required
           placeholder="请描述您的问题"
           input-align="right"
            @input="title=$event.mp.detail"
         />
         <van-field
           :value="detail "
           label="问题详情"
           required
           type="textarea"
           autosize
           placeholder="请输入问题内容"
           input-align="right"
            @input="detail=$event.mp.detail"
         />
         <van-field
             label="上传图片(最多3张)"
             required
            readonly
           />
         </van-cell-group>

         <div class="crad">
           <div class="crad_left">
             <van-uploader
              deletable
               max-count="3"
               :file-list="filelist"
               @afterread="afterZm"
               @delete="del">
             </van-uploader>
           </div>
         </div>

    </div>
		<div class="foot">
		  <div class="finish" @click="answer">提 问</div>
		</div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      type:'',
      name:'',
      phone:'',
      title:'',
      detail:'',
      fileName1:'',
      imgurl:[],
      filelist:[],
      id:'',
      show: false,
      columns:[],
    }
  },
  mounted() {
    this.id=this.$root.$mp.query.id
    this.getLei()
  },
  methods:{
    showPopup(){
      this.show= true
    },
    onClose() {
      this.show=false
    },
    onConfirm(e) {
     // this.type = e.target.index
     this.type = e.target.value
     console.log(e.target.value)
     this.show=false
    },
    //获取问题类型
    getLei(){
      this.$http.get({
          url:"/hChild/1275625813865136128",
       }).then(res =>{
          let cont = res.data
          cont.map((item,index)=>{
            this.columns.push(item.name)
          })
       })
    },
    //删除所选图片
    del(event){
      this.filelist.splice(event.mp.detail.index, 1)
      this.imgurl.splice(event.mp.detail.index, 1)
    },
    //上传图片
    afterZm(event) {
      let that = this
      const { file } = event.target;
      mpvue.uploadFile({
        url: process.env.api+'/common/upload',
        filePath: file.path,
        name: 'file',
        formData: {  },
        success(res) {
          let data = JSON.parse(res.data).data
          let file1 = data.enclosure_path
          that.imgurl.push({"url":file1})
          that.fileName1 = data.enclosure_path
          let url = process.env.VUE_IMAGES+that.fileName1
          that.filelist.push({"url":url})

          that.zmimg= process.env.VUE_IMAGES+that.fileName1

        },
      });
    },
    //电话验证
    checkInp(value, reg,msg) {
      console.log(value)
      console.log(reg.test(value))
    		if (!reg.test(value)) { // 符合
        wx.showToast({
          title:'手机号码格式不正确！',
          duration: 2000,
          icon:'none'
        })
    		}
    	},
      //提交
      answer(){
        let token = wx.getStorageSync("token")
        this.$http.post({
            url:"/pro/add",

            data:{
              "cate_id":this.type,
              "title":this.title,
              "content":this.detail,
              "enclosure_id":this.imgurl.map((item,index)=>{
                return item.url
              }),
              "link_name":this.name,
              "expert_id":this.id,
              "link_phone":this.phone,
            }

         }).then(res =>{
              if(res.code==200){
                wx.showToast({
                  title:'提交成功！',
                  icon:'none'
                })
                setTimeout(()=>{
                  wx.switchTab({
                    url:'../answer/main'
                  })
                },2000)
              }
        });
      }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
  }
  .main{
    width: 100%;
    margin-top: 20rpx;
  }
  .crad{
    width: 100%;
  }
  .zm_crad{
    width: 330rpx;
    height: 210rpx;
    position: relative;
    background: url();
    background-size: 330rpx 210rpx;
  }
  .zm_crad img{
    width: 320rpx;
    height: 210rpx;
    position: absolute;
  }
  .pick{
    width: 700rpx;
    height: 620rpx;
  }
  .finish{
    width: 605rpx;
    height: 88rpx;
    background:#00923f;
    color:#fff;
    text-align:center;
    line-height:88rpx;
    border-radius:44rpx;
    font-size:34rpx;
    margin:80rpx 0rpx 10rpx
  }
</style>
