<template>
<div class="am-index">
  <div class="am-index-all-page">
    <div>
      <img @click="goBack" class="return-last" src="../../public/img/index/return.png" alt="">
    </div>
    <div class="title-page">
      <img class="title-page-img" src="../../public/img/index/biaoti.png" alt="">
      <img class="page-content" src="../../public/img/index/content.png" alt="">
    </div>
    <div class="card-detail">
      <div class="detail-content">
        <div class="content-all">
          <img style="margin-top: 7px" src="../../public/img/index/bigAll.png" alt="">
          <img @click="getCard" class="content-now" src="../../public/img/index/test.png" alt="">
        </div>
        <div class="content-all">
          <img src="../../public/img/index/smallAll.png" alt="">
          <img @click="getCard" class="content-now" src="../../public/img/index/test.png" alt="">
        </div>
      </div>
    </div>
    <!-- 领取道具 -->
    <div class="lingqu-btn">
      <img @click="lingquDaoju" class="img-btn-lingqu" src="../../public/img/index/btnDaoju.png" alt="">
    </div>
    <div class="card-list">
      <img src="../../public/img/index/zifei.png" alt="">
    </div>
  </div>
  <!-- 登陆手机号 -->
  <div class="dialog-bac" v-show="idShowDialog">
    <div class="all-dialog">
      <div class="close-btn"><img @click="closeLoginPhone" src="../../public/img/dialog/close.png" alt=""></div>
      <div class="input-phone input-phone-bac">
        <div class="bac-two">
          <img class="title-img" src="../../public/img/dialog/titles.png" alt="">
          <!-- <img src="../../public/img/dialog/title.png" alt=""> -->
          <div class="phont-ipt">
            <input type="text" v-model="numPhone" class="ipt-phone" placeholder="输入手机号">
          </div>
          <div class="flex-get-number">
            <input type="text" v-model="numPassword" class="ipt-password">
            <img class="img-get-number" @click="codeVerification" src="../../public/img/dialog/getNUmber.png" alt="">
          </div>
        </div>
      </div>
      <img class="btn-login" @click="loginPhone" src="../../public/img/dialog/btnLogin.png" alt="">
    </div>
  </div>
  <!-- 卡密码领取 -->
  <div class="dialog-bac" v-show="isShowPassword">
    <div class="dialog-all-bac">
      <div class="close-btn"><img @click="closePassword" src="../../public/img/dialog/close.png" alt=""></div>
      <!-- 道具内容 -->
      <div class="input-phone phone-password">
        <div class="password-bac2">
          <img class="title-img" src="../../public/img/dialog/password.png" alt="">
          <p class="my-phone">您的手机号：{{13812345678}}</p>
          <div class="daoju-bac">
            <div class="daoju-content">
              <div class="content-pic">
                <img src="../../public/img/dialog/jindou.png" alt="">
                <span>400000</span>
              </div>
              <img class="content-jiahao" src="../../public/img/dialog/jiahao.png" alt="">
              <div class="content-pic">
                <img src="../../public/img/dialog/fangka.png" alt="">
                <span>20张</span>
              </div>
              <img class="content-jiahao" src="../../public/img/dialog/jiahao.png" alt="">
              <div class="content-pic">
                <img src="../../public/img/dialog/jipaiqi.png" alt="">
                <span>20天</span>
              </div>
            </div>
            <img class="lingqudaoju-content" src="../../public/img/dialog/lingqudaoju.png" alt="">
          </div>
          <!-- 扫描二维码 -->
          <div class="dialog-erweima">
            <div>
              <img class="erweima-pic" src="../../public/img/dialog/erweima.png" alt="">
            </div>
            <div>
              <p>（一）每个派卡用户只可领取一次。</p>
              <p>（二）领取卡密后，将以短信的方式发送至您的手机上，请注意查收。</p>
              <p>（三）收到卡密后请前往“官网--账户充值--道具卡”输入账号以及卡密进行兑换。兑换成功后请在游戏中进行查收哦。</p>
              <p>（四）如有疑问，请截图以下二维码，并使用微信端进行扫码关注，询问在线客服</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="is-show-prompt" v-if="isShowPrompt">请填写正确派卡手机号</div>
</div>
</template>
<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      numPhone: '',
      numPassword: '',
      idShowDialog: false, // 道具领取是否展示
      isShowPassword: false, // 卡密领取是否展示
      isShowPrompt: false, // 显示提示
      times: null
    }
  },
  computed: {},
  created() {
    this.imgLOad()
  },
  methods: {
    imgLOad() {
      new Promise((resolve, reject) => {
        const img = new Image()
        img.src = `${window.location.origin}/img/bacAll.png`
        img.onload = () => {
          resolve(img)
        }
      }).then(res => {
        alert(1111)
      })
    },
    getCard() {
      this.$router.push({ path: './goToDianXin' })
    },
    goBack() {
      history.go(-1)
    },
    lingquDaoju() {
      // this.idShowDialog = true
    },
    loginPhone() {
      this.$http.post('', {

      })
      this.idShowDialog = false
    },
    closePassword() {
      this.isShowPassword = false
    },
    closeLoginPhone() {
      this.idShowDialog = false
    },
    codeVerification() {
      this.isShowPrompt = false
      const myreg = /^[1][9][1, 9][0-9]{8}$/
      if (this.times) {
        clearTimeout(this.times)
      }
      if (myreg.test(this.numPhone)) {
        console.log(999)
      } else {
        this.isShowPrompt = true
        this.times = setTimeout(() => {
          this.isShowPrompt = false
        }, 2000)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.am-index-all-page {
  width: 100%;
  // height: 100vh;
  background: url('../../public/img/index/bacAll.png');
  background-size: 100% 100%;
}
.return-last {
  width: 21vw;
  position: absolute;
  top: 0px;
  left: 0px;
}
// .title-page {
//   position: absolute;
//   top: 0px;
// }
.title-page-img {
  width: 100vw;
}
.page-content {
  width: 90vw;
  margin-left: 5vw;
}
.detail-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.content-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 40vw;
  }
  .content-now {
    width: 45vw;
    margin-top: -20px;
  }
}
.lingqu-btn {
  margin-top: 8px;
}
.img-btn-lingqu {
  width: 90vw;
  margin-left: 5vw;
}
.card-list {
  width: 100vw;
  padding: 20px;
  img {
    width: 100%;
  }
}
.dialog-bac {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.9);
  // z-index: 9999;
}
.input-phone-bac {
  background: url('../../public/img/dialog/di.png');
  padding: 20px 20px 50px;
}
.phone-password {
  background: url('../../public/img/dialog/WechatIMG9.jpeg');
  background-size: 100%;
  border-radius: 18px;
}
.password-bac2 {
  background: url('../../public/img/dialog/bacsDi.png');
  background-size: 100% 100%;
  padding: 20px 20px 30px;
}
.input-phone {
  width: calc(100vw - 40px);
  margin-left: 20px;
  background-size: 100% 100%;
  z-index: -1;
  // margin-top: -18px;
}
.close-btn {
  img {
    width: 30px;
    height: 30px;
    float: right;
    z-index: 9999;
    margin-right: 10px;
    margin-top: -10px;
  }
}
input {
  border: none;
  padding: 10px;
  background: rgba(0,0,0,0.5);
  padding: 5px 10px;
  outline: none;
}
input:focus{ outline:none; }
.ipt-phone {
  color: white;
  width: 100%;
}
.phont-ipt {
  margin-bottom: 20px;
}
.ipt-phone {
  border: 1px solid rgba(233, 201, 83, 0.4);
  margin-top: 25px;
}

.ipt-password {
  border: 1px solid rgba(233, 201, 83, 0.4);
  width: calc(100% - 138px);
}
.all-dialog {
  margin-top: 35vh;
}
.title-img {
  width: 50%;
  margin-left: 25%;
}
.img-get-number {
  width: 133.48px;
}
.flex-get-number {
  display: flex;
  flex-direction: row;
}
.btn-login {
  width: 60vw;
  margin-left: 20vw;
  margin-top: -22px;
}
.dialog-all-bac {
  margin-top: 14vh;
  // background: url('../../public/img/dialog/bacsDi.png');
}
.my-phone {
  color: white;
  font-weight: 400;
  text-align: center;
  font-family: initial;
}
.daoju-bac {
  background: url('../../public/img/dialog/bac.png');
  width: 100%;
  // margin-left: 20px;
  background-size: 100% 100%;
  position: relative;
}
.content-pic {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    width: 60px;
  }
  span {
    margin-left: -5px;
  }
}
.daoju-content {
  padding: 20px 10px 30px 0px ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .content-jiahao {
    width: 15px;
  }
}
.lingqudaoju-content {
  position: absolute;
  width: 70%;
  left: 15%;
  bottom: -10px;
  bottom: -27px;
}
.dialog-erweima {
  display: flex;
  flex-direction: row;
  margin-top: 42px;
  p {
    font-size: 10px;
    margin: 0px;
    font-weight: 500;
    color: white;
  }
}
.erweima-pic {
  width: 100px;
  margin-right: 5px;
}
.is-show-prompt {
  width: 90vw;
  height: 30px;
  left: 5vw;
  // top: 0px;
  background-color: #f8aba6ed;
  position: fixed;
  z-index: 9999;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  animation-name: example;
  animation-duration: 2s;
}
@keyframes example {
  0%   {top: 0px;}
  50%  {top: 10px;}
  75%  {top: 10px;}
  100% {top: -30px;}
}
</style>
