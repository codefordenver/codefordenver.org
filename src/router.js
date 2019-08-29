import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: function () { 
        return import(/* webpackChunkName: "contact" */ './views/Contact.vue')
      }
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: function () { 
        return import(/* webpackChunkName: "volunteer" */ './views/Volunteer.vue')
      }
    },
    {
      path: '/project/:name',
      name: 'project',
      component: function () { 
        return import(/* webpackChunkName: "project" */ './views/ProjectPage.vue')
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: function () {
        return import(/* webpackChunkName: "projects" */ './views/ProjectPage.vue')
      }
    },
    {
      path: '/resources',
      name: 'resources',
      component: function () {
        return import(/* webpackChunkName: "resources" */ './views/ProjectPage.vue')
      }
    }, {
      path: '/about',
      name: 'about',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: function () {
    //     return import(/* webpackChunkName: "login" */ './views/login.vue')
    //   }
    // }
  ]
})
