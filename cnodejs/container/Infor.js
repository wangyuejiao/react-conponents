
import React, { Component } from 'react'
import "../index.css" 
import {Link,Route} from 'react-router-dom'
export default class Infor extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props);
        let page=this.props.match.params.id
        fetch('https://cnodejs.org/api/v1/topic/'+page)
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
            fetch('https://cnodejs.org/api/v1/topic/'+page)
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
                   <div  dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                      
                   </div>
                  
                   
                
            }
            
            </div>
        )
    }
}
