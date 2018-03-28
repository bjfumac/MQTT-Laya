# MQTT-Laya
A MQTT client over WebSocket for LayaAir(LayaBox). 
# 说明
&emsp;&emsp;MQTT-Laya是一款用LayaAir引擎实现的基于MQTT通讯协议的客户端库。<br />
&emsp;&emsp;结合本人整合的[mqant-docker分布式服务器架构](https://github.com/bjfumac/mqant-docker)和[Porobuf-Laya前后端通讯协议](https://github.com/bjfumac/Protobuf-Laya)可构建一套完整的HTML5游戏解决方案。
# 特点
1. 底层基于WebSocket协议，兼容各种浏览器和移动设备。
2. 针对LayaAir的TypeScript框架开发。具有完整的代码提示和类型检测机制。
3. MQTT自带心跳和断线重连机制，简化前后端的网络模块设计。
4. MQTT自带QOS(Quality of Service)。在手机这种不稳定的网络环境中可以保证消息传输的可靠性。
4. MQTT自带路由机制，极易实现世界、频道、组队聊天功能，结合Protobuf可实现良好的消息分类功能。
# 使用
1. 新建LayaAir TypeScript项目。
2. 将d.ts文件夹中的文件拷贝到项目的libs文件夹中。
3. 将js文件夹中的文件拷贝到项目的bin\libs。
4. 修改bin\index.html，在其它\<script\>标签之前添加如下代码：
```html
    <script type="text/javascript" src="libs/mqtt.js"></script>
```

