import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Bottom extends Component {
    constructor(){
        super();
        this.state={
            todos:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    render() {
        return (
            <div style={{margin:'10 0 0 10',height:40,width:900,display:'block',backgroundColor:'#fff',paddingTop:10}}>
                <ul style={{display:'inline-block',listStyle:'none',float:'left'}}>{
                    this.state.todos.map((item)=>(
                        <li key={item} style={{border:'1px solid grey',float:'left',width:34,height:30,color:'#999',fontSize:20,textAlign:'center'}}>
                            <Link  to={this.props.path+item}>{item}</Link>
                     </li>
                    ))
                }</ul>
            </div>
        )
    }
}
