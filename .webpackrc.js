export default {
  "entry": "src/index.js",
  "publicPath": "/",
  "theme": {
    "@base-info": "#5bc0de",
    "@base-primary": "darken(#428bca, 6.5%)",
    "@base-warning": "#f0ad4e",
    "@base-success": "#5cb85c",
    "@base-danger": "#d9534f",
  },
  "extraBabelPlugins": [
    [
      "import", 
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": ["dva-hmr"]
    }
  },
  "proxy": {
    "/api": {
      "target": '',
      "pathRewrite": { "^/api" : "" }
    }
  }
}