// pages/play/play.js
Page({
  data:{
    url:null
  },
  onLoad:function(options){
    console.log(options.url)
     var that = this;
    // 页面初始化 options为页面跳转所带来的参数
   this.setData({
     url:options.url
   })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})