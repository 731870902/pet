<template>
  <div class="index">
    <!-- 容器开始 -->
    <el-container>
      <!-- 侧边栏开始 -->
      <el-aside :width="widthFlag ? '200px' : '80px'">
        <!-- <el-radio-group v-model="isCollapse" style="margin: 0 50px;">
          <el-radio-button :label="false">
            <i class="el-icon-d-arrow-left"></i>
          </el-radio-button>
          <el-radio-button :label="true">
            <i class="el-icon-d-arrow-right"></i>
          </el-radio-button>
        </el-radio-group> -->
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <i class="el-icon-shouye"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-liebiao"></i>
            <span slot="title">顺序练习</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-icon-test"></i>
            <span slot="title">随机练习</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-cuoti"></i>
            <span slot="title">错题练习</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-cuotiku"></i>
            <span slot="title">错题集</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-ceshishenqing"></i>
            <span slot="title">随堂测试</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-icon-kaoshijilu"></i>
            <span slot="title">考试记录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 侧边栏结束 -->
      <el-container>
        <!-- 头部开始 -->
        <el-header style="text-align: right; font-size: 18px;  ">
          <!-- <div class="my-logo-t">
            <img src="../assets/img/common/logo.jpg" alt="" />
          </div> -->
          <div class="header-left">
            <i
              :class="widthFlag ? 'el-icon-caret-left' : 'el-icon-caret-right'"
              @click="openLift"
            ></i>
          </div>
          <el-dropdown>
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>1</el-dropdown-item>
              <el-dropdown-item>2</el-dropdown-item>
              <el-dropdown-item>3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>4545</span>
        </el-header>
        <!-- 头部结束 -->
        <!-- 主体开始 -->
        <el-main>
          <div class="iframe-div">
            <iframe
              :src="thisPage.key"
              frameborder="0"
              width="100%"
              height="100%"
              seamless
            ></iframe>
          </div>
        </el-main>
        <!-- 主体结束 -->
        <!-- 底部开始 -->
        <el-footer>Footer</el-footer>
        <!-- 底部结束 -->
      </el-container>
    </el-container>
    <!-- 容器结束 -->
  </div>
</template>
<style>
.index .el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.index .el-menu-vertical {
  width: 200px;
  min-height: 800px;
  text-align: left;
  margin: 60px -2px;
  /* overflow: hidden; */
}
/* .index .el-submenu__title {
  text-align: left;
} */
.index .my-logo-t {
  /* display: inline-block; */
  height: 60px;
  position: relative;
  float: left;
  left: -180px;
}
.index .my-logo {
  /* display: inline-block; */
  height: 60px;
  position: relative;
  float: left;
}
.index .my-logo img {
  width: 100px;
  height: 60px;
  margin-left: -20px;
}
.index .header-left {
  float: left;
  font-size: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      thisPage: { id: 0, key: "welcome.html", name: "首页" }, //页面
      isCollapse: false,
      widthFlag: true,
    };
  },
  methods: {
    openLift() {
      this.widthFlag = !this.widthFlag;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
