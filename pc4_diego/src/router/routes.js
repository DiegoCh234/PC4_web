const routes = [
  {
    path: "/dashboard",

    children: [
      { path: "apod", component: () => import("pages/ApodPage.vue") },

    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  {
    path: "/",
    component: () => import("components/Auth/chooseDate.vue"),
  },


]

export default routes
