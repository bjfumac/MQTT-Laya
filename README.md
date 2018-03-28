# MQTT-Laya
A MQTT client over WebSocket for LayaAir(LayaBox). 
# 说明
&emsp;&emsp;MQTT-Laya是一款用LayaAir引擎实现的基于MQTT通讯协议的客户端库。
&emsp;&emsp;结合本人的[mqant-docker分布式后端服务器](https://github.com/bjfumac/mqant-docker)和[Porobuf-Laya前后端通讯协议](https://github.com/bjfumac/Protobuf-Laya)可构建一套完整的HTML5游戏解决方案。
# 特点
1. 底层基于WebSocket协议，兼容各种浏览器和移动设备。
2. 针对LayaAir的TypeScript框架开发。具有完整的代码提示和类型检测机制。
3. 利用mqtt协议的多倍发包特点可实现比LayaAir自带WebSocket更低的网络延迟。在手机这种网络不稳定的环境中效果提升明显。
# 使用
1. 新建LayaAir TypeScript项目。
2. 将d.ts文件夹中的文件拷贝到项目的libs文件夹中。
3. 将js文件夹中的文件拷贝到项目的bin\libs。
4. 修改bin\index.html，在其它\<script\>标签之前添加如下代码：
```html
    <script type="text/javascript" src="libs/mqtt.js"></script>
```

