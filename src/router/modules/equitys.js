/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const equityRouter = {
  path: "/equity",
  component: Layout,
  redirect: "noRedirect",
  name: "equity",
  meta: {
    title: "企业家法学院",
    icon: "chart"
  },
  children: [
    {
      path: "myequity",
      component: () => import("@/views/equity/myequity"),
      name: "Icons",
      meta: { title: "我的企业邀请", icon: "people", noCache: true }
    },
    {
      path: "entrepreneurs",
      component: () => import("@/views/equity/entrepreneurs"),
      name: "Icons",
      meta: { title: "企业邀请", icon: "guide", noCache: true  }
    }
  ]
};

export default equityRouter;
