# materials_new

> A Vue.js project

## Build Setup

``` bash
# install dependencies  安装项目依赖，npm或者yarn都可以
npm install  /  yarn install

# serve with hot reload at localhost:8080
# 启动本地服务，在本地访问该项目
# 注意 clerp/config/dev.env.js文件中的API_ROOT为本地环境访问的服务器接口域名，注意调整
npm run dev

# build for production with minification
#打包项目，在web目录生成打包完成之后的文件，用户发布
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

``` bash
# 本地服务打开端口号没有默认页面,打开页面请输入以下链接，其中pagename为页面名称  如pages/applylist/applylist.html下面页面直接访问
http://localhost:2222/applylist.html

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 目录结构

```sh
├── dist                构建后的内容
├── static              第三方库不需要打包的
├── src
|  ├── api              服务层(与后台数据交互，核心业务逻辑处理)
|  ├── static           静态依赖
|  |  ├── fonts
|  |  └── images
|  ├── components       组件库
|  ├── page             页面
|  ├── utils            工具类

```