import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import '../index.css'
import All from './All'
import Share from './Share'
import Jinghua from './Jinghua'
import Question from './Question'
import Zhaopin from './Zhaopin'
import Test from './Test'
import Infor from './Infor'
export default class Home extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className="home">
                    <Link className="home-title" to={`${url}/all`}>全部</Link>
                    <Link className="home-title" to={`${url}/jinghua`}>精华</Link>
                    <Link className="home-title" to={`${url}/share`}>分享</Link>
                    <Link className="home-title" to={`${url}/question`}>问答</Link>
                    <Link className="home-title" to={`${url}/zhaopin`}>招聘</Link>
                    <Link className="home-title" to={`${url}/test`}>客户端测试</Link>

                </div>
                <div>
                    <Route exact path={url+'/all'} component={All}/>
                    <Route path={url+'/share'} component={Share}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/question'} component={Question}/>
                    <Route path={url+'/zhaopin'} component={Zhaopin}/>
                    <Route path={url+'/test'} component={Test}/>
                    <Route path={url+'/all/:id'} component={All} />
                   <Route path={url+'/Infor/:id'} component={Infor}/>
                    
          
                </div>
            </div>
        )
    }
}