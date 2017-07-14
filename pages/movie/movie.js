// pages/movie/movie.js
var del_url = "https://api.douban.com/v2/movie/subject/";
Page({
  data:{
    movies_del:{}
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 5000
    }),
    wx.request({
      url: del_url+options.id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type':'Application/json'
      }, 
      success: function(res){
          wx.hideToast();
          that.setData({
            movies_del:res.data,
            pingfen:"评分：",
            daoyan:"导演：",
            zhuyan:"主演：",
            zhaiyao:"摘要"
          })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
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