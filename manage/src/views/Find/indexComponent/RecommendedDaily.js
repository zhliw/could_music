//每日推荐
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Spin } from 'antd';
import actionCreators from '../../../store/actionCreator/Find/Search'
class RecommendedDaily extends React.Component {
    constructor() {
        super()
        this.state = {
            RecommendedDaily:[],
            isLoading:true
        }
    }
    async componentDidMount() {
        const data = await this.axios('/recommend/songs')
        console.log(data)
        this.setState({
            RecommendedDaily: data,
            isLoading:!this.state.isLoading
        })
        console.log(this.state.RecommendedDaily)
    }
    render() {
        return (
            <div> <this.MyNav />
                <div >
                    <span>
                    据你的音乐口味，为你推荐好音乐
                    </span>
                </div>

                <div>
                    <div style={{textAlign:'left',display:'flex',justifyContent:"space-between"}}>
                    <this.Return />
                    <span>?</span>
                    <span style={{ fontSize: '0.48rem' }} onClick={() => {
                        this.props.history.push('/Play')
                    }} className={'icon-yinle1 iconfont'}></span>
                    </div>
                
                    <div>
                        {new Date().toLocaleDateString()}
                    </div>
                </div>

                <div style={{textAlign:'left'}}>
                    <div style={{padding:'0 0.30rem,0.24rem',textAlign:"left",height:'0.76rem',display:'flex',justifyContent:'space-between',lineHeight:"0.76rem"}}>
                        <span></span>
                        <span>播放全部</span>
                        <span>多选按钮</span>
                        <span>多选</span>
                    </div>
                    {
                        this.state.isLoading?<Spin/>:this.state.RecommendedDaily.recommend?this.state.RecommendedDaily.recommend.map((v, i) => {
                            return (
                                <div style={{display:'flex',height:'0.91rem'}} key={i} onClick={()=>{
                                    this.props.history.push({
                                        pathname:'/Play',
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }}>
                                    <img style={{width:'0.8rem',height:'0.62rem',width:"0.62rem "}} src={v.album.blurPicUrl} alt="" />
                                    <div style={{marginLeft:'0.16rem'}} >
                                        <span style={{fontSize:'0.25rem'}}>{v.name}</span>
                                        <div style={{fontSize:'0.18rem',color:"#b9b9b9",marginTop:'0.2rem'}}>{v.artists[0].name}</div>
                                    </div>
                                        <span style={{fontSize:'0.29rem',marginLeft:'2.56rem',marginRight:'0.33rem'}} className={'icon-shipin iconfont'}></span>
                                        <span style={{marginRight:'0.35rem'}} className={'icon-dashujukeshihuaico- iconfont'}></span>
                                </div>
                            )

                        }):''
                    }
                </div>
            

            </div>
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(RecommendedDaily)