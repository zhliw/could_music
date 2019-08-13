import React from 'react'
class sl extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        // this.state = {
        //     isTrue:this.props.
        // }
    }
    render(){
        return(
            this.state.isTrue ? this.state.search.map((v, i) => {
                if (v.keyword) {
                    return <div key={i}>
                        <div style={{height:'0.7rem',marginLeft:'0.25rem',lineHeight:'0.7rem',color:'#5c6978'}} onClick={() => {
                        this.props.history.push({
                            pathname: '/Search_To',
                            state: {
                                searchWord: v.keyword
                            }
                        })
                        this.getHistory(v.keyword)
                    }} key={i}><span style={{fontSize:'0.23rem',marginRight:'0.13rem'}} className={'icon-magnifier iconfont'}></span>{v.keyword}</div>
                    <div className={'searchSong'}></div>
                    </div>
                
                }
            }) : null
        )
    }
}