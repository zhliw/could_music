//每日推荐
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../store/actionCreator/Find/Search'
class RecommendedDaily extends React.Component {
    constructor() {
        super()
        this.state = {
            RecommendedDaily:[]
        }
    }
    async componentDidMount() {
        const data = await this.axios('/recommend/songs')
        console.log(data)
        this.setState({
            RecommendedDaily: data
        })
        console.log(this.state.RecommendedDaily.recommend)
    }
    render() {
        return (
            <div> <this.MyNav /> <this.Return />
                每日推荐
            {this.state.RecommendedDaily.recommend?this.state.RecommendedDaily.recommend.map((v, i) => {
                    return (
                        <div key={i} onClick={()=>{
                            this.props.history.push({
                                pathname:'/Play',
                                state:{
                                    id:v.id
                                }
                            })
                        }}>
                            <input type="radio"/>
                            <img style={{width:'0.8rem',height:'0.8rem'}} src={v.album.blurPicUrl} alt="" />
                            <span>{v.name}</span>
                            <div></div>
                        </div>
                    )

                }):''
                }

            </div>
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(RecommendedDaily)