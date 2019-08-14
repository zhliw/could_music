//搜索完跳转页面
import React from "react";
import {
    Route,
    NavLink,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreators from '../../../store/actionCreator/Find/Search'
import findNav from '../../../router/Find_Nav'
import '../../../assets/css/Find/Search_To.css'
class Search_To extends React.Component {
    constructor() {
        super()
        this.state = {
            findnav: [],
            searchWord: []

        }
    }
    componentWillMount() {
        this.props.history.push('/Search_To/All')
        let findnav = findNav.find(v => v.to === "/Search_To").children
        this.setState({
            findnav,
        })
    }
    componentDidMount() {
        if (this.props.location.state) {
            this.props.searchList(this.props.location.state.searchWord)
        }
    }
    componentWillReceiveProps(n) {
        // console.log(11123232323, n)
    }
    render() {
        return (
            <div>
                <this.MyNav></this.MyNav>
                <div style={{marginBottom:'0.34rem'}}>
                    <span style={{marginRight:'0.5rem',fontSize:'0.48rem',marginTop:'0.1rem'}} className={'icon-gouwuche iconfont'} onClick={() => {
                        this.props.history.push('/Search')
                    }}></span>

                    <input autoComplete="off" style={{outline:'none'}}   className={'search_search_wn'} type='text'
                    onClick={()=>{
                        
                    }} 
                    />
                </div>

                {this.state.findnav.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            <NavLink style={{fontSize:'0.28rem'}} activeStyle={{color:'red'}} to={v.to}>{v.context} </NavLink>
                        </React.Fragment>
                    )
                })}
                {this.state.findnav.map((v, i) => {
                    return (
                        <Route key={i} path={v.path} component={v.component}></Route>
                    )
                })}
            </div>
        )
    }
}

export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(Search_To)