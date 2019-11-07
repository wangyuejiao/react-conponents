import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div className='login1'>
                <div className='login2'>
                    <Link to={{
                            pathname:'/',
                            state:200
                          }}>主页</Link><span>/ 登录</span>
                </div>
                <div>
                    <div className='login3'>
                        <label for='name'>用&nbsp;户&nbsp;名&nbsp;</label>
                        <input type='text' size='30' name='name' ></input>
                    </div>
                    <div className='login4'>
                        <label for='name'>密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;&nbsp;</label>
                        <input type='password'  size='30' name='password'></input>
                    </div>
                    <div className='login5'>
                          <Link to='/home/all'>
                              <input value='登录' type="submit" style={{backgroundColor:"#08c",color:'#fff',width:150,borderRadius:5}}></input>
                          </Link>

                    </div>
                </div>
            </div>
        )
    }
}

        //     return(
        //         <div>   
        //             <input type="text"/>
        //             <input type="password"/>
        //             <Button log={props.newLog}/>
        //         </div>
        //     )
        // }
        // let mapStateToProps = (state)=>{}
        // let mapDispatchToProps = (dispatch)=>{
        //     return {
        //         newLog:bindActionCreators(logFetch,dispatch)
        //     }
        // }
        // export default connect(
        //     mapStateToProps,
        //     mapDispatchToProps
        // )(Login);