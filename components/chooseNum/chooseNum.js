Component({
  properties: {
    num: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  methods: {

    addNum(e) {
      let newNum = this.data.num + 1;
      this.setData({
        num: newNum
      });
      this.triggerEvent('numChange', { newNum: this.data.num });
    },
    dropNum(e) {
      if (this.data.num > 1) {
        let newNum = this.data.num - 1;
        this.setData({
          num: newNum
        });
        this.triggerEvent('numChange', { newNum: this.data.num });
      }

    },
    updateInputNum(e) {
      let newNum;
      let val = parseInt(e.detail.value);
      if (this.data.num === val) {
        return;
      }
      if (val < 1) {
        newNum = 1;
      } else if (this.data.num != val) {
        newNum = val;
      }
      this.setData({
        num: newNum
      });
      this.triggerEvent('numChange', { newNum: this.data.num });
    }


  }
})