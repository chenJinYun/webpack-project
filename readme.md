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