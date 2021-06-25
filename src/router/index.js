import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: "/module-wrap",
    component: () => import('@/views/layout'),
    meta: { title: "非常常见业务组件" },
    children: [
        {
            path: "module-wrap",
            name: "module-wrap",
            component: () => import("@/views/base/module-wrap"),
            meta: { title: "模块外壳（module-wrap）" }
        },
        {
            path: "info-text",
            name: "info-text",
            component: () => import("@/views/base/info-text"),
            meta: { title: "文本列表（info-text）" }
        },
        {
            path: "card-shell",
            name: "card-shell",
            component: () => import("@/views/base/card-shell"),
            meta: { title: "卡片外壳（card-shell）" }
        },
        {
            path: "info-screen",
            name: "info-screen",
            component: () => import("@/views/base/info-screen"),
            meta: { title: "信息筛选（info-screen）" }
        },
        {
            path: "page-nav",
            name: "page-nav",
            component: () => import("@/views/base/page-nav"),
            meta: { title: "锚点导航（page-nav）" }
        }
    ]
  },

//   {
//     path: '/chart',
//     component: () => import('@/views/layout'),
//     meta: { title: "图表类"},
//     children: [
//         {
//             path: "/multi-pie-chart",
//             name: "multi-pie-chart",
//             component: () => import("@/views/chart/multi-pie-chart"),
//             meta: {title: "线柱状图混合"}
//         },
//         {
//             path: "/bar-line-chart",
//             name: "bar-line-chart",
//             component: () => import("@/views/chart/bar-line-chart"),
//             meta: {title: "线柱状图混合"}
//         },
//     ]
// },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
