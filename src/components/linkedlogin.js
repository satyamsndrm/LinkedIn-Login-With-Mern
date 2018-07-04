import React from 'react';
import axios from 'axios';
import './login.css'
import './home.css'


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false,
            user:{}
        }

    }
    componentWillMount(){
        axios.get('/auth/user').then((res)=>{
            //console.log(res);
            if(res.data.status){
                this.setState({
                    isLoggedin:true,
                    user:res.data.user
                })
            }else{
                this.setState({
                    isLoggedin:false
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        if(!this.state.isLoggedin){
            return(
                <div className="loginForm">
                    <a href="auth/linkedin" className="btn btn-primary btn-lg">Signin with LinkedIn</a>
                </div>
            )
        }else{
            return(
                <div className='container'>
                    <div className="postContainer">
                        <div className="postBox">
                            <div className="postHeader">
                                <img className="leftSide img img-thumbnail" src={this.state.user.photo} alt='profile pic' />
                                <div className='rightSide'>
                                    {this.state.user.name}
                                    <small className="headline">{this.state.user.headline}</small>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="postMiddle">
                                <table className="table">
                                    <tr scope='col'>
                                        <td><b>Email</b></td>
                                        <td>{this.state.user.email}</td>
                                    </tr>
                                    <tr scope='col'>
                                        <td><b>Address</b></td>
                                        <td>{this.state.user.location}</td>
                                    </tr>
                                    <tr scope='col'>
                                        <td><b>Connections</b></td>
                                        <td>{this.state.user.connections}</td>
                                    </tr>
                                    <tr scope='col'>
                                        <td><b>Industry</b></td>
                                        <td>{this.state.user.industry}</td>
                                    </tr>
                                    <tr scope='col'>
                                        <td><b>PublicProfileUrl</b></td>
                                        <td>{this.state.user.publicProfileUrl}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }
    }

}
