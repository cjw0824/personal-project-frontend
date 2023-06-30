import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import naver from "vue-naver-maps";

Vue.config.productionTip = false;
Vue.use(naver, {
  clientID: "pkbukhzw12",
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  subModules: "", // 서브모듈 (선택)
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
