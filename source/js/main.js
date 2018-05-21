import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import App from './components/App.vue';
import Index from './components/Index.vue';
import Story from './components/Story.vue';
import StoryItem from './components/StoryItem.vue';
import Footer from './components/Footer.vue';

Vue.component("story-item", StoryItem);
Vue.component("app-footer", Footer);

const router = new VueRouter({
  routes: [
    {
      name: "index",
      path: "/",
      component: Index
    },
    {
      name: "story",
      path: "/:id",
      component: Story,
      props: true
    }
  ],
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  el: "#global-wrapper",
  router,
  render: (h) => h(App)
});
