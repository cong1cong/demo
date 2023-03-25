<template>
  <div class="control">
    <div class="top">
      <div class="show-message">
        <span class="select">当前选择：</span>
        <div class="show-value">
          <span>{{ inputVal }}</span>
          <img src="../../assets/image/组 48.png" alt="->" />
          <span>{{ outputVal }}</span>
        </div>
      </div>

      <!-- <div class="setNewName">
        <span>更换信息:</span>
        <el-input v-model="reName"></el-input>
        <el-switch
          v-model="switchValue"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div> -->
    </div>

    <div class="content">
      <div class="input-box" @wheel="moveMouse($event, 1)">
        <div class="Port">输入端口</div>
        <div class="input-btn-wrapper">
          <div
            :class="['input-btn', i == inputVal ? 'active' : '']"
            v-for="i in 48"
            :key="i"
          >
            <div @click="handleInputVal(i)">
              <div class="inputBtnDiv textStyClass">输入{{ i }}</div>
              <!-- <img src="../../assets/image/组 49(1).png" alt="" /> -->
            </div>
          </div>
        </div>
      </div>

      <div style="width: 26px"></div>

      <div class="output-box" @wheel="moveMouse($event, 2)">
        <div class="Port">输入端口</div>
        <div class="putput-btn-wrapper">
          <div
            :class="['output-btn', outputArr.includes(n) ? 'active' : '']"
            v-for="n in 48"
            :key="n"
          >
            <div @click="handleOutputVal($event, n)">
              <div class="outputBtnBox textStyClass" :ref="`outBtn${n}`">
                输出{{ n }}
                <div v-if="outputArr.includes(n)" class="bottomShow">
                  输入{{ inputVal }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "7",
      outputVal: "4",
      outputArr: [],
      switchValue: false,
      reName: "",
      user: JSON.parse(sessionStorage.getItem("user")) || {},
    };
  },
  methods: {
    handleInputVal(i) {
      if (!this.user.curd) return;
      this.outputArr = [];
      this.inputVal = i;
      this.outputVal = "";
    },

    handleOutputVal($event, n) {
      if (!this.user.curd) return;
      if (!this.switchValue) {
        this.outputVal = n;
        this.outputArr.push(n);
      } else {
        this.$refs[`outBtn${n}`][0].innerHTML = this.reName;
      }
    },

    // 滚动条触发事件
    moveMouse() {
      // console.log(event.target.scrollTop);
      // // console.log(out);
      // out.scrollTop = event.target.scrollTop;
      // console.log(event.wheelDelta);
      // let obj;
      // if (type == 1) {
      //   obj = window.document.querySelector(".putput-btn-wrapper");
      // } else {
      //   obj = window.document.querySelector(".input-btn-wrapper");
      // }
      // obj.scrollTop = event.target.scrollTop;
    },
  },
};
</script>

<style scoped lang="less">
.control {
  /*里面的代码可以根据自己需求去进行更改*/
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 12px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  // ::-webkit-scrollbar-thumb:window-inactive {
  //   background: rgba(255, 0, 0, 0.4);
  // }

  // background-color: #141518;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .setNewName {
      display: flex;
      align-items: center;
      padding: 15px;
      border-bottom: 1px black dotted;
      span {
        padding: 5px;
        font-weight: 600;
      }
      .el-input {
        width: 250px;
        margin: 0 10px;
      }
    }
  }

  .show-message {
    width: 500px;
    display: flex;
    // justify-content: space-between;
    font-size: 32px;
    font-weight: 400;
    color: #ccc;
    padding: 8px 25px 25px 25px;
    position: sticky;
    z-index: 11;
    .select {
      margin-right: 40px;
    }

    .show-value {
      display: flex;
      align-items: center;
      // justify-content: center;
      span {
        display: block;
        text-align: center;
        width: 100px;
        font-weight: 600;
        font-size: 64px;
        font-family: DIN Pro-Medium, DIN Pro;
        font-weight: 500;
        color: #fa6400;
        line-height: 0px;
      }
    }
  }

  .content {
    display: flex;
    height: calc(100vh - 250px);
    overflow: hidden;
    border-radius: 20px;

    .common {
      height: 655px;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      // justify-content: space-around;
      // border: 1px solid #606266;
      // overflow: hidden;

      position: relative;
      padding-top: 70px;
      background: #1e1f25;
      border-radius: 20px;
      opacity: 1;

      padding-left: 28px;
    }
    .input-box {
      .common();

      .input-btn-wrapper {
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        display: flex;
        overflow-y: scroll;

        .input-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          margin-right: 30px;
          margin-bottom: 38px;

          .inputBtnDiv {
            // background: url("../../assets/image/组\ 49\(1\).png");
            width: 115px;
            height: 39px;
            text-align: center;

            background: linear-gradient(180deg, #dedfe3 0%, #ffffff 100%);
            border-radius: 8px 8px 8px 8px;
            opacity: 1;
            cursor: pointer;

            font-size: 18px;
            line-height: 39px;
            font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
            font-weight: normal;
            color: #e02020;
          }
        }
      }
    }
    .Port {
      position: absolute;
      top: 26px;
      font-size: 24px;
      font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
      font-weight: normal;
      color: #ffffff;
    }
    .output-box {
      .common();

      .putput-btn-wrapper {
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        display: flex;
        overflow-y: scroll;
        .output-btn {
          // background: linear-gradient(180deg, #dedfe3 0%, #ffffff 100%);
          border-radius: 8px;
          margin-right: 30px;
          margin-bottom: 38px;
          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;

          .outputBtnBox {
            width: 115px;
            height: 39px;
            line-height: 39px;
            text-align: center;
            background: linear-gradient(180deg, #dedfe3 0%, #ffffff 100%);
            border-radius: 8px;
            opacity: 1;
            cursor: pointer;

            font-size: 18px;
            font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
            font-weight: normal;
            color: #3c4254;

            .bottomShow {
              width: 118px;
              height: 26px;
              // background: #00f829;
              background: url("../../assets/image/矩形\ 13.png");
              border-radius: 10px 10px 10px 10px;
              // opacity: 0.3;

              font-size: 16px;
              font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
              font-weight: normal;
              color: rgba(0, 248, 41, 1);
              line-height: 26px;
            }
          }
        }
      }
    }
  }

  .active {
    .textStyClass {
      font-size: 20px !important;
      color: #246cf9 !important;
    }
  }
}
</style>
