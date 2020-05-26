# UmiJS and Storybook Example

A repo showing how to configure Storybook to work with UmiJS, antd, antd-mobile and TypeScript

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

Start storybook,

```bash
$ yarn storybook
```

## Step By Step

1. Install Storybook

```bash
npx -p @storybook/cli sb init --type react
```

2. Install babel preset

```bash
yarn add babel-preset-react-app --dev
```

3. Edit tsconfig.json

```json
{
  "compilerOptions": {
    ...
  },
  "include": [
    ...
    "stories/**/*"
  ]
}
```

4. storybook.main.js

```javascript
const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
        plugins: [
          ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
          [
            'import',
            { libraryName: 'antd-mobile', style: 'css' },
            'antd-mobile',
          ],
        ],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
        {
          loader: 'less-loader',
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};

```

For more information, please view git commits.
