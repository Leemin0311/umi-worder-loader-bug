import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack(config) {
    config.module
      .rule('worker')
      .test(/.*worker.[t|j]s/)
      .use('workder-loader')
      .loader('worker-loader');
  },
});
