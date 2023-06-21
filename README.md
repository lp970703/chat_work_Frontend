# Vue_login 

## 项目简介 

1、简介： 
*   使用Vue2 + AntDesgin + axios + Vue-i18n + Electron实现注册登录
*   Vue：前端框架
*   AntDesign：企业级UI设计模板
*   axios：是一个基于 promise 的网络请求库
*   Vue-i18n：中英文互换
*   Electron：是一个使用 JavaScript、HTML 和 CSS 构建跨平台的桌面应用程序。它基于 Node.js 和 Chromium，被 Atom 编辑器和许多其他应用程序使用。

2、场景：
*   该项目为一般网站项目中必备功能（即包含全套的登录、注册）可作为二次开发使用。

## 所需环境

1、安装node v16.20.0及以上     
*   node下载： [node下载](https://nodejs.cn/download/)  
*   注意需要设置环境变量在path中

## 相关配套前端项目

*   本项目只更新注册登录这一块逻辑，会搭配[Egg_demo](https://github.com/lp970703/egg-demo)项目一起更新。

## 相关学习文档

<!-- add docs here for user -->
*   node安装及官网：[node官网](https://nodejs.cn/) 

*   Vue官网快速开始：[Vue2 官网](https://v2.cn.vuejs.org/)

*   AntDesgin相关：[AntDesgin官网](https://1x.antdv.com/docs/vue/introduce-cn) 

*   Electron相关：[sequlize官网](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start)  

## 项目启动

1、Electron启动
```bash
# 安装依赖
$ npm install

# 用electron跑项目（确保package中有main字段，并将main字段指向的是electron的主入口js文件）
$ npm run electron:serve

```

2、Vue启动：

```bash
# 安装依赖
$ npm install  

# 启动项目
$ npm run serve

```
