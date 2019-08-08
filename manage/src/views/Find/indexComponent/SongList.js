//歌单
import React from "react";
import '../../../assets/css/Find/find.css'
import{
    NavLink,
    Route
} from 'react-router-dom'
import findNav from '../../../router/Find_Nav'
export default class AllSonglist extends React.Component{
    constructor(){
        super()
        this.state={
            findnav:[]
        }
    }
    componentWillMount(){
        this.props.history.push('/SongList/RecommendSongList')
        let findnav=findNav.find(v=>v.to==='/SongList').children
        // console.log(1,findnav)
        this.setState({
            findnav
        })
    }
    
    render(){
        return(
            <div>
                <this.MyNav></this.MyNav>

                 <div>  
                <span onClick={()=>{
                    this.props.history.push('/')
                }}>返回</span>
                <span>歌单广场</span>  
                <span></span>
                </div>
                           {
                    this.state.findnav.map((v,i)=>{
                        return(
                            <React.Fragment key={i}>
                            <NavLink activeStyle={{color:'red'}} to={v.to}>{v.context}</NavLink>
                            </React.Fragment>
                        )
                    })
                }
                {
                    this.state.findnav.map((v,i)=>{
                        return(
                            <Route key={i} path={v.path} component={v.component}></Route>
                        )
                    })
                }
                

            </div>
        )
    }
}