<template>
  <div id="cesiumContainer"></div>
  <button class="open-button" @click="loadIframe = true; showIframe = true">打开弹窗</button>
  <div v-if="loadIframe" v-show="showIframe" class="iframe-popup">
    <button @click="showIframe = false">关闭</button>
    <iframe src="/系统一/demo/index.html" width="300" height="100"></iframe>
    <!-- <iframe src="http://localhost:8080/#/test" width="600" height="400"></iframe> -->
  </div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted, ref } from 'vue'
import { Viewer } from 'cesium' // OR  /* import * as Cesium from 'cesium' */

import * as Cesium from 'cesium'
export default {
  name: 'CesiumContainer',
  setup() {
    const loadIframe = ref(false);
    const showIframe = ref(true);

    onMounted(() => {
      /* eslint no-new: */
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMjA3MDk1Ni05YTUxLTQ1YTItYTgxNS1iZTQwODM4NDVmOTciLCJpZCI6MjI1NjE0LCJpYXQiOjE3MTk4MjYxNDR9.nMeglmI4UqBSGUtKT2g6oegxXgBYvR1ATaZ34rrN5OI'
      window.viewer = new Cesium.Viewer('cesiumContainer')
      console.log(window.viewer)
    })


    return { loadIframe, showIframe };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}

.open-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1001;
  /* 确保按钮在最上层 */
}

.open-button:hover {
  background-color: #0056b3;
  /* 鼠标悬停效果 */
}

.iframe-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
}
</style>
