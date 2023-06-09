/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.tsx'
  },
  builtins: {
    html: [
      {
        template: './public/index.html'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset'
      },
      {
        test: /\.pcss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: './postcss.config.js'
              }
            }
          }
        ],
        type: 'css'
      }
    ]
  },
  devServer: {
    open: true
  }
};
