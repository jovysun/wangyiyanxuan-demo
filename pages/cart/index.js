// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],
    totalChecked: true,
    selectedNum: 0,
    totalAmount: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    wx.request({
      url: 'http://192.168.31.233:8888/data/product3.json',
      success: (res) => {
        if (res.data.code == 10001) {
          // console.log(res.data.productList);
          this.setData({
            productList: res.data.productList
          });
        }

      }
    })

  },
  // addNum(e) {
  //   let index = e.currentTarget.dataset.index;
  //   let productList = this.data.productList;
  //   productList[index].num += 1;
  //   this.setData({
  //     productList
  //   });
  //   this.updateStatus();
  // },
  // dropNum(e) {
  //   let index = e.currentTarget.dataset.index;
  //   let productList = this.data.productList;
  //   if (productList[index].num > 1) {
  //     productList[index].num -= 1;
  //     this.setData({
  //       productList
  //     });
  //   }
  //   this.updateStatus();
  // },
  // updateInputNum(e){
  //   let index = e.currentTarget.dataset.index;
  //   let productList = this.data.productList;
  //   let val = parseInt(e.detail.value);
  //   if(val < 1){
  //     productList[index].num = 1;
  //   }
  //   else if (productList[index].num != val) {
  //     productList[index].num = val;
  //     this.setData({
  //       productList
  //     });
  //   }
  //   this.updateStatus();
  // },
  numChange(e){
    let index = e.currentTarget.dataset.index;
    let productList = this.data.productList;
    
    productList[index].num = e.detail.newNum;
    this.setData({
      productList
    });
    this.updateStatus();
  },
  chooseItem(e) {
    let index = e.currentTarget.dataset.index;
    let productList = this.data.productList;

    productList[index].checked = !productList[index].checked;
    this.setData({
      productList
    });
    this.updateStatus();
  },
  chooseAll(e){
    this.data.totalChecked = !this.data.totalChecked;

    let productList = this.data.productList;
    for (let i = 0; i < productList.length; i++) {
      let item = productList[i];  
      item.checked = this.data.totalChecked;
    }
    this.setData({
      productList,
      totalChecked: this.data.totalChecked
    });
    this.updateStatus();
  },
  getTotalNum(e) {
    let productList = this.data.productList;
    let total = 0;
    for (let i = 0; i < productList.length; i++) {
      let item = productList[i];
      if (item.checked) {
        total += item.num
      }

    }
    this.setData({
      selectedNum: total
    })
  },
  getTotalAmount(e){
    let productList = this.data.productList;
    let total = 0;
    for (let i = 0; i < productList.length; i++) {
      let item = productList[i];
      if (item.checked) {
        total += item.num * item.price
      }

    }
    this.setData({
      totalAmount: total
    })
  },
  getTotalChecked(e){
    let productList = this.data.productList;
    for (let i = 0; i < productList.length; i++) {
      let item = productList[i];
      if(!item.checked){
        this.data.totalChecked = false;
        break;
      }else{
        this.data.totalChecked = true;
      }
      
    }
    this.setData({
      productList,
      totalChecked: this.data.totalChecked
    });
  },
  updateStatus(){
    this.getTotalNum();
    this.getTotalAmount();
    this.getTotalChecked();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.updateStatus();
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