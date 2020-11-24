const path = require('path')

module.exports = {
  reactOptions: {
    fastRefresh: true
  },
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  // https://storybook.js.org/docs/react/configure/webpack
  webpackFinal: async (config) => {
    // Add support for the @ symbol alias for root directory imports.
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../')
    }

    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })

    return config
  }
}
