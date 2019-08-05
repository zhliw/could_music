import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import User from './User'
import All from './All'
import AllSinger from './AllSinger'
import AllSonlist from './Search_To'
import AnchorRadio from './AnchorRadio'
import Vedio from './Vedio'
import SingleSong from './SingleSong'
export default class SearchNav extends React.Component{
    render(){
        return (
            <div>
                        <Link to={'/find/All'}>综合</Link>
                        <Link to={'/find/SingleSong'}>单曲</Link>
                        <Link to={'/find/Vedio'}>视频</Link>
                        <Link to={'/find/AllSinger'}>歌手</Link>
                        <Link to={'/find/AllSonlist'}>歌单</Link>
                        <Link to={'/find/AnchorRadio'}>主播电台</Link>
                        <Link to={'/find/User'}>用户</Link>

                        <Route path={'/find/All'} component={All}></Route>
                        <Route path={'/find/SingleSong'} component={SingleSong}></Route>
                        <Route path={'/find/Vedio'} component={Vedio}></Route>
                        <Route path={'/find/AllSinger'} component={AllSinger}></Route>
                        <Route path={'/find/AllSonlist'} component={AllSonlist}></Route>
                        <Route path={'/find/AnchorRadio'} component={AnchorRadio}></Route>
                        <Route path={'/find/User'} component={User}></Route>
            </div>
        )
    }
} 