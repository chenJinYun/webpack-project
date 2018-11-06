# 项目技术架构：
    1、node.js环境
    2、npm 管理包
    3、git 版本控制管理
    4、fiddler 捉包工具

### fiddler 捉包工具的使用：
    1、如果chrome的代理不是默认的需要设置为端口8888，因为fiddler的默认设置端口号是8888,当然也可以自定义
    2、一些大网站不允许劫持，比如说baidu.com这些
   ### 代理的原理
    request-->fiddler--->设置好的网址内容或者是正常的网址内容，也就是劫持了请求的网址并且返回自定义设置的网址内容

### 项目搭建：
    1、初始化项目：src--源代码目录
    2、npm 配置成cnpm
    3、webpack的使用

### Webpack
    1、 全局安装，版本为1.，不用2.的原因是ie8不支持webpack打包后的一个Object.default的属性
    2、 entry:入口文件
    3、externals:外部依赖声明
    4、output:目标文件
    5、resolve:配置别名
    6、modules:loader
    7、plugin:插件
    命令： webpack \webpack -p \
        webpack-dev-server:自动更新

#### 解决 WEBPACK 全局安装路径和环境变量的解决方法：
    https://blog.csdn.net/tongshuo_11/article/details/62428076

### 获取jquery的线上的包可以在：https://www.bootcdn.cn/jquery/这个网址获取各个版本的包，

### 配置图片加载loader时，需要注意版本号，如果版本太高的话需要下载对应的依赖！！！

### 热更新使用webpack-dev-server

### 用户功能模块
    1、登录功能--用户名&密码登录接口
    2、注册功能--判断用户名是否存在
    3、找回密码--根据用户名或者密码提示问题--根据用户名和问题和答案获取token--根据用户名和认证token重置密码
    4、个人中心页面--获取用户信息-修改用户信息
    5、修改密码--更新密码接口

    账户名：kim 密码：123456


### 商品信息
    1、购物车
    2、商品列表
    3、轮播图
    4、搜索
    5、分页（通用化）
### 分页是思想：抽取成为组件，在组件做好分页，只需要外层传入参数进行分页，


### 购物车
    1、购物车列表
    2、修改购物车数量
    3、选中、取消选中
    4、全选、取消全选
    5、删除，支持批量操作



### 支付模块
    1、支付宝沙箱模块的对接
        return_url:同步
        notify_url:异步

    2、请求支付获取二维码
    3、轮询检查订单状态，支付成功跳转页面

    4、请求支付信息，检查订单状态接口


### 生产
    适配
    favicon
    dns-perfetch

### util
	1、获取url参数
	2、分页工具
	3、ajax请求封装

### 采用分层结构：view -> page -> service

### webpack.config.js 和 util的东西比较重要

### SEo优化：
    1、搜索引擎的排名规则
    2、衡量指标：关键词，收录量
    3、技巧：增加页面数量、减少页面层级、关键词密度、高质量友链、分析竞对、SEO数据监控
    4、关键词：高频词

### 访问数据统计：https://tongji.baidu.com/sc-web/26716511/home/site/getjs?siteId=12749873
    1、访问量：pv/uv/vv
    2、数据来源
    3、搜索关键字
    4、设备信息
