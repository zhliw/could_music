import React from 'react'
import { withRouter } from 'react-router-dom'
class SeachList extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return (
            <>
                <div style={{ display: !this.props.isShow ? 'block' : 'none' }} className={'searchList'}>
                        <div style={{height:'0.7rem',fontSize:'0.21rem',marginLeft:'0.27rem',color:"#5e88a6",lineHeight:'0.7rem'}}>搜索 "{this.state.keyword}"</div>
                            <div className={'searchSong'}></div>
                            {
                             this.props.search.map((v, i) => {
                                    if (v.keyword) {
                                        return <div key={i}>
                                            <div style={{height:'0.7rem',marginLeft:'0.25rem',lineHeight:'0.7rem',color:'#5c6978'}} onClick={() => {
                                            this.props.history.push({
                                                pathname: '/Search_To',
                                                state: {
                                                    searchWord: v.keyword
                                                }
                                            })
                                            this.props.getHistory(v.keyword)
                                        }} key={i}><span style={{fontSize:'0.23rem',marginRight:'0.13rem'}} className={'icon-magnifier iconfont'}></span>{v.keyword}</div>
                                        <div className={'searchSong'}></div>
                                        </div>
                                    
                                    }
                                }) 
                            }

                    </div>
            </>
        )
    }
}

export default withRouter(SeachList)