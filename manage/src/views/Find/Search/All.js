//综合
import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../../store/actionCreator/Find/Search'
class All extends React.Component {
    constructor() {
        super()
        this.state = {
            search: [],
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                search: nextProps.state.find.search[nextProps.state.find.search.length-1]
            })
            this.setState({
                num:nextProps.state.find.search.length-1
            })
        }
    }
    render() {
        console.log(12332, this.props.state.find.search)
        return (
            <div>
                <this.MyNav></this.MyNav>
                <p>
                    <span>单曲</span>
                    <span>播放全部</span>
                </p>
                {
                    this.state.search.map((v, i) => {
                        return <div key={i} className={'searchMassage'}>
                            <div>
                                <span onClick={() => {
                                    this.props.history.push({
                                        pathname:'/Play',
                                        state:{
                                            massage:v
                                        }
                                    })
                                }}>{v.name}</span>
                                <span></span>
                            </div>

                        </div>
                    })

                }
            </div>
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(All)