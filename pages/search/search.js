// pages/search/search.js
var url = "https://api.douban.com/v2/movie/search";
Page({
  data:{
    movies:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  search:function(event){
    var that = this;
    var s = event.detail.value;
        if(!event.detail.value){
          return;
        }else{
          wx.request({
            url: url+'?q='+s,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
               "content-type":"Application/json"
           }, 
            success: function(res){
              that.setData({
                movies:res.data.subjects
              })
            },
            fail: function(res) {
              // fail
            },
            complete: function(res) {
              // complete
            }
          })
        }
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