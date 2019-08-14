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
        let search=nextProps.state.find.search[nextProps.state.find.search.length-1]||[]
        if (nextProps) {
            this.setState({
                search
            })
            this.setState({
                num:nextProps.state.find.search.length-1
            })
        }
    }
    render() {
        return (
            <div>
                <this.MyNav></this.MyNav>
                <div style={{marginTop:'0.57rem',display:'flex',justifyContent:"space-between",padding:"0 0.32rem",marginBottom:'0.12rem'}}>
                    <span style={{fontSize:'0.35rem',fontWeight:'600'}}>单曲</span>
                    <span style={{display:'inlineblock',fontSize:'0.25rem',height:'0.5rem',borderRadius:"0.3rem",lineHeight:"0.5rem",width:'1.53rem',border:"0.01rem solid #e9e9e9"}}>播放全部</span>
                </div>
                    <div style={{width:'6.84rem',height:'0.02rem',background:'#e6e6e6',marginLeft:'0.32rem'}}></div>
                {
                    this.state.search.map((v, i) => {
                        return <div key={i}>
                            <div style={{textAlign:'left',height:'1.2rem',padding:'0 0.32rem',lineHeight:'0.6rem'}} key={i} className={'searchMassage'}>
                                <span style={{fontSize:'0.29rem'}} onClick={() => {
                                    this.props.history.push(
                                        '/SongPlay',
                                        {
                                            songid:v.id
                                        }
                                    )
                                }}>{v.name}</span>
                                <div style={{fontSize:'0.22rem'}}>{v.artists[0].name}</div>
                            </div>
                            <div style={{width:'6.84rem',height:'0.02rem',background:'#e6e6e6',marginLeft:'0.32rem'}}></div>
                        </div>
                    })

                }
            </div>
        )
    }
}
export default connect((state) => ({ state }), (dispatch) => bindActionCreators(actionCreators, dispatch))(All)