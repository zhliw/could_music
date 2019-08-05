//搜索完跳转页面
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom'
import findNav from '../../../router/Find_Nav'
import '../../../assets/css/Find/Search_To.css'
export default class Search_To extends React.Component{
    constructor(){
        super()
        this.state={
            findnav:[]
        }
        console.log(3333333)
    }
    componentWillMount(){
        let findnav=findNav.find(v=>v.to==="/Search_To").children
        console.log(1212)
        this.setState({
            findnav
        })
    }
    search(){
    }
    render(){
        return(
            <div><this.Return />
                <input defaultValue='' onKeyUp={this.search.bind(this)} className={'search_search_wn'} type='text' />
                <div>你可能感兴趣</div>
                <div>
                    <span>单曲</span><span>播放全部</span>
                </div>
                {this.state.findnav.map((v,i)=>{
                    return( 

                        <React.Fragment key={i}>
                        <NavLink to={v.to}>{v.context} </NavLink>
                        </React.Fragment>
                    )  
                })}
                {this.state.findnav.map((v,i)=>{
                    return( 
                        <Route path={v.path} component={v.component}></Route>
                    )  
                })}
              
               
                        

            </div>
        )
    }
}