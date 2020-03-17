let base = 'http://xxx';

export default {
  publicPath: '/dist/',
  theme: {
    'primary-color': 'rgba(211, 149, 14, 1.000)',
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      // dynamicImport: {
      //   loadingComponent: './framework/loading',
      //   webpackChunkName: true,
      // },
      dll: {
        include: [
          'antd',
          'react',
          'react-dom',
        ]
      },
    }],
  ],
  proxy: {
    '/rest': {
      target: base + '/rest',
      pathRewrite: { '^/rest': '' },
      changeOrigin: true,
    },
    '/api': {
      target: base + '/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    },
  },

};
