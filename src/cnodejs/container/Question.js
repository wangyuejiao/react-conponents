
import React, { Component } from 'react'
import "../index.css" 
import {Link,Route} from 'react-router-dom'
import Infor from './Infor'
export default class Question extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props);
        let page=this.props.match.params.id
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+1)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps.match.params.id)
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }

    }
    
    render() {
        console.log(this.state.data)
        let {url} = this.props.match
        return (
            
            <div>
            {
                this.state.data.map((item)=>(
                  
                   <div key={item.id} style={{width:900,height:50,backgroundColor:'#fff',borderBottom:'1px solid red',paddingTop:5}}>
                         {console.log(item.author.avatar_url)}
                       {/* <p>{item.visit_count}</p> */}
                       <img className='allimg' src={item.author.avatar_url} />
                       <sapn className='reply_count pull-left' >
                           <span className='count_of_replies' title='回复数' >{item.reply_count}</span>
                           <span className='count_seperator'>/</span>
                           <span className='count_of_visits' title='点击数'>{item.visit_count}</span>
                        </sapn>
                        <span className='top'>置顶</span>
                        <Link className='title_top' to={`/home/Infor/`+item.id}>{item.title}</Link>
                        
                        <span className='righ'>
                            <sapn className='righ1'>
                                <img src='https://avatars3.githubusercontent.com/u/56661717?v=4&s=120'></img>
                            </sapn>
                            <sapn className='righ2'>3天前</sapn>
                        </span>
                   </div>
                  
                   
                  
               
                ))
            }
            
            </div>
        )
    }
}
