# aiyuemusic(爱乐音乐)

### 一.初始化环境配置

1.创建项目

```
vue create 项目名
```

2.初始化git

```
git init
```

首次提交git commit -m "初始化环境配置"

3.初始化src项目文件

​	1.api   用于存放与后端交互的接口

​	2.common  存放的通用组件(fonts,js,images,stylus)

​	3.router 存放路由内容

​	4.store 存放vuex的状态数据

4.安装插件

```
npm install stylus --save  //stylus编译器
npm install stylus-loader --save  //css编译器 stylus-loader
npm install vue-router --save  //vue的路由导航
npm install request --save //用于请求数据
npm install mongoose --save //用于与数据库进行连接
```

5.解决移动端300ms延迟的问题 

```
npm install fastclick --save
```

6.新建组件名

​	v-header

​	recommend

​	rank

​	singer

​	search

​	tab