import React, { Component } from 'react'
import '../index.css'
import { generateKeyPair } from 'crypto'
export default class Sliderss extends Component {
    render() {
        return (
            <div className="sider3">
               <div style={{backgroundColor:'#f6f6f6',height:30}}>
                      <p style={{fontSize:15,paddingTop:10,}}> 无人回复的话题</p>
               </div>
               <div>
                    <ul style={{fontSize:13}}>
                        <li style={{paddingTop:12,listStyle:'none'}}>关于egg-logger的一个问题，是每个进程都...</li>
                        <li style={{paddingTop:12,listStyle:'none'}}>node安装完成后npm-v检查报错</li>
                        <li style={{paddingTop:12,listStyle:'none'}}>前端react window.location.href='下载路...</li>
                        <li style={{paddingTop:12,listStyle:'none'}}>一种支持插件式开发的命令行工具开发模式</li>
                        <li style={{paddingTop:12,listStyle:'none'}}>请问缓存的内存模型是什么呢</li>
                    </ul>
               </div>

        </div>
        )
    }
}
