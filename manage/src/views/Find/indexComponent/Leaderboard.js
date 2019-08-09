//排行榜
import React from 'react'
class Leaderboard extends React.Component{
    constructor(){
        super()
        this.state={
            boardlist:[],
            tracks:[]
        }
    }
    componentDidMount(){
        this.getLeaderboard()
        if(this.state.boardlist){
            this.setState({
                tracks:this.state.boardlist.tracks
            })
        }
    }
    async getLeaderboard(){
        const data=await this.axios('/toplist/detail')
        console.log(data)
        this.setState({
            boardlist:data.list
        })
        
    }
    render(){
        console.log(this)
        return(
            <div> <this.MyNav /><this.Return />排行榜
            <div>
                <div>官方榜</div> 
                 {
                     this.state.boardlist.map((v,i)=>{
                         return <div key={i} onClick={()=>{
                             this.props.history.push({
                                 pathname:'/Song',
                                 state:{
                                     id:v.id
                                 }
                             })
                         }}><img style={{width:'1.66rem'}} src={v.coverImgUrl} alt=""/>
                           
                    </div>
                     })

                 }
            </div>
          
            
            </div>
           
        )
    }
}
export default Leaderboard