// pages/category/index.js
import detail from '../../data/kindsdata.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      { name: '推荐专区', id: 'tuijian' },
      { name: '夏季专区', id: 'xiaji' },
      { name: '个性专区', id: 'gexing' },
      { name: '居家', id: 'jujia' },
      { name: '配件', id: 'peijian' },
      { name: '服装', id: 'fuzhuang' },
      { name: '电器', id: 'dianqi' },
      { name: '洗护', id: 'xihu' },
      { name: '饮食', id: 'yinshi' },
      { name: '餐厨', id: 'canchu' },
      { name: '婴童', id: 'yingtong' },
      { name: '文体', id: 'wenti' },
      { name: '特色区', id: 'tese' }

    ],
    curIndex: 0,
    categoryDetail: detail[0],
  },
  changeCategory(e){
    console.log(e.target.dataset)
    let index = e.target.dataset.index;
    this.setData({
      curIndex: index,
      categoryDetail: detail[index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})