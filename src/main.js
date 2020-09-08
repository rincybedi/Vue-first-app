import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import FontColor from "./directives/fontColor";
import Store from "./store-vuex";

Vue.config.productionTip = false;
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.use(Store);
Vue.directive("fontcolor", FontColor.fontColor);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
