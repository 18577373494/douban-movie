// pages/index/index.js
//获取豆瓣数据接口
var api_url = 'http://api.douban.com/v2/movie/top250';
Page({
  data:{
    title:"加载中...",
    movies:[]
  },
  onLoad:function(options){
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    }),
    wx.request({
    url: api_url, //仅为示例，并非真实的接口地址
      data: { },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
          wx.hideLoading();
          var data = res.data;
          that.setData({
             title:data.title,
             movies:data.subjects
          })
      }
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