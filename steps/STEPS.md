# React Development ENV

### TL-DR

#### Installation of NodeJS and NPM

### Install NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
#### Export NVM variable on your terminal profile like `~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc.`
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### Check NVM installation 
```
command -v nvm
```

### Install latest LTS Node version
```
nvm install 12.13.1
```
### Or current Node version
```
nvm install node # "node" is an alias for the latest version
```
___



## 1. Tools for project standards

  - ### ESlint
  - ### Prettier

  ## Installation

  ### ESLint
  
  ```npx eslint --init```

  Obs: Accept all config to set Airbnb Standards

  ### Prettier

  ```npm install --save-dev --save-exact prettier```

  ### Create Prettier file (.prettierrc) with the following config:
  
```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true  
}
```

## 2. Loaders and Plugin

  ### Loaders
  
  *-* Babel  
  *-* Style Loaders \
  *-* File Loader

## Installation

### Babel

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime babel-eslint
```

### Style Loaders

```
npm install --save-dev css-loader sass-loader node-sass style-loader
```

### File Loader

```
npm install --save-dev file-loader
```

## 3. Webpack
  ### Packages

  *-* Webpack  
  *-* Webpack CLI \
  *-* Webpack Dev Server

  ### Plugin

  *-* HTML Webpack

  ## Installation
  
  ### Webpack

  ```
  npm install --save-dev webpack webpack-dev-server webpack-cli
  ```

  ### HTML Plugin

  ```
  npm install --save-dev html-webpack-plugin
  ```

# Configuration

## Babel

### 1. Create babel file (.babelrc) 

```touch .babelrc```

  With the following config
  ```
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-transform-runtime"]
  }
  ```


## Webpack

### 1. Create the `webpack.config` file

```touch webpack.config.js```

### 2. Import libs that we previously installed

``` 
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
```

### 3. Start the configuration itself

```
  module.exports = ({ mode }) => ({
  mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  devServer: {
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      filename: 'index.html',
    }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      ducks: path.resolve(__dirname, 'src/ducks/'),
      static: path.resolve(__dirname, 'src/static/'),
    },
  },
});
```

# Scripts

## Add Webpack Scripts
```
"scripts": {
  "webpack": "webpack",
  "webpack-dev-server": "webpack-dev-server",
}
```

## Add ENV Scripts
```
"scripts": {
  "build": "npm run webpack -- --env.mode production",
  "dev": "npm run webpack-dev-server -- --env.mode development --open",
}
```


## Answers to possible questions, but you should explain right away

  - **Module.exports** - Same as `export default` from Javascript, you don't have to named and when you import in another file you can name whatever you want.
  - **Arrow Function** - Regular function, same as `function x() {}`
  - **Destructuring** - I can access attributes from the objects like
    
    ``` 
    const obj = {x: 12, y: 42};
    let { x, y} = obj
    
    console.log(x) // 12
    console.log(y) // 42
    ```
  - **Path** - Path is the the object thats NodeJS has to handle the our O.S dirs
  - **Implicit Return** - Mostly used in arrow functions situations
  ```
    const sum = (x, y) => x + y
  ```
