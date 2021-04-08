<template>
<div>
  <div class="am-all-page">
    <div class="am-page-title">
      <img src="../../public/img/title.png" alt="">
      <img src="../../public/img/min-length.png" alt="">
    </div>
    <!-- 逻辑都在这 -->
    <div class="am-page-message-tianxie">
      <div class="am-page-form-card">
        <div class="am-form-list">
          <div class="am-form-body">
            <div class="am-list-line">
              <div class="am-input-label">用户姓名</div>
              <div class="am-input-control">
                <input placeholder="请输入您的真实姓名" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">联系电话</div>
              <div class="am-input-control">
                <input placeholder="请输入您的联系电话" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">验证码</div>
              <div class="am-input-control">
                <input placeholder="请输入" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">选择号码</div>
              <div class="am-input-control" @click="choseNumber">
                <input placeholder="请输入您的真实姓名" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">身份证</div>
              <div class="am-input-control">
                <input placeholder="请输入您的身份证号" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">收货人地址</div>
              <div class="am-input-control">
                <input placeholder="请输入您的身份证号" maxlength="20" type="text">
              </div>
            </div>
            <div class="am-list-line">
              <div class="am-input-label">详细地址</div>
              <div class="am-input-control">
                <input placeholder="请输入您的身份证号" maxlength="20" type="text">
              </div>
            </div>
            <div class="immediately-apply">
              <div class="apply-white"></div>
              <img src="data:image/png;base64,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" alt="">
            </div>
            <div class="">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="am-page-buy-advance-deposit">
      <img src="../../public/img/png-buy.png" alt="">
      <img src="../../public/img/png-injoy.png" alt="">
      <img src="../../public/img/money-detail.png" alt="">
      <img src="../../public/img/png-business.png" alt="">
      <img src="../../public/img/business2.png" alt="">
    </div>
    <!-- 选择号码 -->
    <div class="dialog-chose-bac" v-if="choseNewNumber">
      <div class="dialog-chose-other">
        <div class="dialog-modal">
          <!-- 头 -->
          <div class="dialog-title">
            <div class="title-span">
              选择新号码
            </div>
            <div @click="choseNewPhone" class="dialog-close-img">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwBAMAAACh2TSJAAAAHlBMVEUAAAC0tre0tri0triztri1uLq4uLi0tbe0triztbfiORKTAAAACXRSTlMAkJSYixwG14U9idgwAAAAq0lEQVQ4y+XSPQ6DMAwFYJeWzqzdumbr2i1HYGJm4RBsXIEfCeW2KMjWs/TICfCUB/6ixIrcrAYfOrd+jxHhsfcIdZoRQmod+qTGllXuQj0RA5qQieADWghhW0J/EI9ACBGxO32J6FTSYoSREUYg9Ocnpd3WApmDIiJNpYiIyImYxDyI5WI4mw6CBxp1EFfEEBE7CBEcng5maBNUnRO6Wv96J4TX3pdf/M3qAJzkOMRbNddTAAAAAElFTkSuQmCC" alt="">
            </div>
          </div>
          <!-- 搜索 -->
          <div class="search-all">
            <div class="search-input">
              <input type="number" class="my-input" placeholder="请输入你的幸运数字，例如0507">
            </div>
            <div class="search-btn">搜索</div>
          </div>

          <!-- 号码 -->
          <div class="phone-num-all" >
            <div class="phone-num-list" v-for="(item, index) in phoneList" :key="index">
              <div class="phone-num-span">
                <span>{{item}}</span>
              </div>
            </div>
          </div>
          <!-- 换一批 -->
          <div class="change-next">换一批</div>
          <div class="sure-btn">
            <div class="btn-detail">确定</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 省市区接口 -->
  </div>
</div>
</template>

<script>
// import { Base64 } from 'js-base64'
import AES from '../boot/crypto'
export default {
  name: 'PageIndex',
  data() {
    return {
      change: '',
      phoneList: [1, 2, 2, 3, 4, 4, 4, 4, 4],
      choseNewNumber: false
    }
  },

  created() {
    this.setToken()
  },
  methods: {
    setToken() {
      document.cookie = 'collect_session_id=' + '1617873250657Md2kjEWnMdifwwfb'
      const num = JSON.stringify({ 'skuIds': ['639051'] })
      console.log(num, num)
      const encode = AES.encrypt(num)
      console.log(num)
      this.$http.post('/consumer/tms/cart-order-attr/qryCartGoodsBuyAgreementBySkuIds', encode).then(res => {
        console.log(res)
      })
    },
    choseNewPhone() {
      this.choseNewNumber = false
    },
    choseNumber() {
      this.choseNewNumber = true
      const req = '8cKA23VRJCX/a9d0o0+Wkv7HLJVXs2rBMDidAAIz/A9rnCcAMjMyiQ7jmZt6D5xgaRBo3w4kJYwrhJawmvwbWNTNyELRnxYYMd+Xf1KiiAP3Z0Wkze61RrB2IIEQIwHq4KM8Ch9fJUNydncvEZBCcQ=='
      // $http.post('')
      this.$http.post('/consumer/tms/cart/queryPhoneNumInfoForBilibili', req).then(res => {
        console.log(res, 'res')
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.am-all-page {
  img {
    width: 100vw;
    display: block;
  }
}
.am-page-message-tianxie {
  padding: 1.02rem 0.52rem;
  // width: 100%;
  background: url('../../public/img/bac-message.png');
  background-size: 100% 100%;
  background-repeat: repeat;
  // height: ;
}
.am-page-form-card {
  padding-left: .34rem;
  padding-right: .68rem;
}
.am-form-list {
  padding-left: 0.8rem;
  padding-right: 0.68rem;
  padding-top: 1.5rem;
}
.am-form-body {
  margin-left: 0.3rem;
  background-color: transparent;
  margin-top: 10px;
}
.am-list-line {
  border-bottom: 1px solid #999;
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 2.8rem;
  font-weight: 800;
  font-size: 0.9rem;
}
.am-input-label {
  width: 4rem;
  color: #000;
  // font-size: 0.7rem;
  margin-left: 0;
  margin-right: 0.3rem;
  overflow: hidden;
  padding: .04rem 0;
  line-height: 2.6rem;
}
.am-input-control {
  font-size: .9rem;
  flex: 1 1;
  line-height: 2.4rem;
  input {
    width: 100%;
    border: none;
    color: #000;
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
input::-moz-placeholder {   /* Mozilla Firefox 19+ */
  color: #999;
}
input:-moz-placeholder {    /* Mozilla Firefox 4 to 18 */
  color: #999;
}
input:-ms-input-placeholder {  /* Internet Explorer 10-11 */
  color: #999;
}
.dialog-chose-other {
  background: #fff;
  position: fixed;
  border: 0;
  background-clip: padding-box;
  border-radius: .64rem .64rem 0 0;
  width: 100vw;
  height: 70vh;
  bottom: 0px;
  padding: 1rem;
}
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  padding: 0 1rem;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  background: #2ca5ff;
  border-radius: 0 .12rem .12rem 0;;
  height: 2.9rem;
  border-radius: 0 .32rem .32rem 0;
}
.dialog-chose-bac {
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
}
.title-span {
  color: #041c1e;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  // margin-top: 1rem;
}
.dialog-close-img {
  position: absolute;
  right: 10px;
  top: 1rem;
  img {
    width: 1.8rem
  }
}
.search-input {
  flex: 1 1 0%;
  input {
    width: 100%;
    height: 2.9rem;
    font-size: 1rem;
    border: none;
    padding: 0.4rem;
    background: #f5f5f5;
  }
}
.search-all {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.phone-num-all {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.phone-num-list {
  padding: 0.6rem 0;
}
.phone-num-span {
  width: calc(50vw - 20px);
  font-size: 0.9rem;
  text-align: center;
  background: #f4f7f6;
  color: #041c1e;
  margin-right: 3px;
  padding: 0.4rem 0;
}
.change-next {
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem;
  color: gray;
}
.sure-btn {
  position: fixed;
  bottom: 0.5rem;
  width: calc(100% - 40px);
  padding: 0.5rem;
}
.btn-detail {
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  background: linear-gradient(90deg,#6db4ff,#187dfb);
  border-radius: .7rem;
  line-height: 1.5rem;
  padding-top: 4px;
  padding-bottom: 4px;
}
.immediately-apply {
  position: relative;
  margin-top: 10px;
  img {
    width: 100%;
  }
}
.apply-white {
  position: absolute;
  width: 100%;
  height: 3.9rem;
  background: #fff;
  top: 0px;
  opacity: .5;
}
</style>
