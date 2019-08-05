//搜索完跳转页面
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom'
import User from './User'
import Album from './Album'
import All from './All'
import AllSinger from './AllSinger'
import AllSonlist from './Search_To'
import AnchorRadio from './AnchorRadio'
import Vedio from './Vedio'
import SingleSong from './SingleSong'
export default class Search_To extends React.Component{
    render(){
        return(
            
            <div><this.Return />
                <input onKeyUp={(e)=>{
                    if(e.keyCode===13){
                        this.props.history.push('./Search_To')
                    }
                }} className={'search_search_wn'} type='text' />
                <div>你可能感兴趣</div>
                <div>
                    <span>单曲</span><span>播放全部</span>
                </div>

                <Router>
                        <NavLink to={'/find/All'}>综合</NavLink>
                        <NavLink to={'/find/SingleSong'}>单曲</NavLink>
                        <NavLink to={'/find/Vedio'}>视频</NavLink>
                        <NavLink to={'/find/AllSinger'}>歌手</NavLink>
                        <NavLink to={'/find/Album'}>专辑</NavLink>
                        <NavLink to={'/find/AllSonlist'}>歌单</NavLink>
                        <NavLink to={'/find/AnchorRadio'}>主播电台</NavLink>
                        <NavLink to={'/find/User'}>用户</NavLink>

                        <Route path={'/find/All'} component={All}></Route>
                        <Route path={'/find/SingleSong'} component={SingleSong}></Route>
                        <Route path={'/find/Vedio'} component={Vedio}></Route>
                        <Route path={'/find/AllSinger'} component={AllSinger}></Route>
                        <Route path={'/find/Album'} component={Album}></Route>
                        <Route path={'/find/AllSonlist'} component={AllSonlist}></Route>
                        <Route path={'/find/AnchorRadio'} component={AnchorRadio}></Route>
                        <Route path={'/find/User'} component={User}></Route>



                </Router>
            </div>
        )
    }
}