import { createRouter, createWebHashHistory } from 'vue-router';
import Form from './components/Form.vue';
import Photo from './components/Photo.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: "/form",
    component: Form
  },{
    path: "/photo",
    component: Photo,
    alias: "/"
  }]
})

export default router