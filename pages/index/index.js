//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tuanData: [],
    blockTitleList: [
      {
        titleTxt: '免邮拼团',
        hasMore: true
      },
      {
        titleTxt: '品牌制造商直供',
        hasMore: true
      },
      {
        titleTxt: '限时购',
        hasMore: true
      },
      {
        titleTxt: '人气推荐',
        hasMore: true
      },
      {
        titleTxt: '类目热销榜',
        hasMore: false
      }
    ],
    productList:[]
  },
  onLoad: function () {
    // console.log(app);
    wx.request({
      url: 'http://192.168.31.233:8888/data/home.json',
      success: (res) => {
        if (res.data.code == 10001) {
          this.setData({
            tuanData: res.data.tuan,
            productList: res.data.productList
          });
        }

      }
    })
  },
  onPullDownRefresh(){
    console.log('pull down')
  },
  onReachBottom(e){
    if(this.data.productList.length > 30){
      wx.showToast({
        title: '到底了',
      })
      return false;
    }
    wx.request({
      url: 'http://192.168.31.233:8888/data/product2.json',
      success: (res) => {
        if (res.data.code == 10001) {
          this.setData({
            productList: this.data.productList.concat(res.data.productList)
          });
        }

      }
    })
  }
})
