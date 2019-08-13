//歌手分类
import React from 'react'
import { Spin } from 'antd';
class Singer extends React.Component{
    constructor(){
        super()
        this.state = {
            singerList:[],
            singerType:''
        }
        this.pageIndex = 1
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentWillMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
    componentDidMount(){
        this.getSinger()
    }
    handleScroll(){
        let spin = document.getElementById('spin')
        if(document.documentElement.scrollTop+window.innerHeight-spin.offsetHeight>spin.offsetTop-10){
            if(!this.state.singerType){
                this.getSinger(++this.pageIndex)
            }else if(this.state.singerType === '1001'){
                this.getTypeSinger(++this.pageIndex)
            }else if(this.state.singerType === '1002'){
                this.getTypeSinger(++this.pageIndex)
            }
        }
    }
    async getSinger(pageIndex=1){
        const {artists} = await this.axios.get(`/top/artists?offset=${(pageIndex-1)*20}&limit=20`)
        this.setState({
            singerList:[...this.state.singerList,...artists]
        })
    }
    async getTypeSinger(pageIndex=1){
        const {artists} = await this.axios.get(`/artist/list?cat=${this.state.singerType}&offset=${(pageIndex-1)*20}&limit=20`)
        this.setState({
            singerList:[...this.state.singerList,...artists],
        })
    }
    render(){
        return(
             <div>  <this.Return />   
            歌手分类
           <span onClick={()=>{
               this.props.history.push('/Play')
           }}>播放</span>
                    <div style={{marginTop:'1rem'}}>
                        <span onClick={()=>{
                            this.pageIndex = 1
                            this.state.singerList = []
                            this.state.singerType = '1001'
                            this.getTypeSinger()
                            }}>华语</span>
                        <span onClick={()=>{
                            this.pageIndex = 1
                            this.state.singerList = []
                            this.state.singerType = '2001'
                            this.getTypeSinger()
                        }}>欧美</span>
                        <span onClick={()=>{
                            this.pageIndex = 1
                            this.state.singerList = []
                            this.state.singerType = '6001'
                            this.getTypeSinger()    
                        }}>日本</span>
                        <span onClick={()=>{
                            this.pageIndex = 1
                            this.state.singerList = []
                            this.state.singerType = '7001'
                            this.getTypeSinger()   
                        }}>韩国</span>
                        <span onClick={()=>{
                            this.pageIndex = 1
                            this.state.singerList = []
                            this.state.singerType = '4001'
                            this.getTypeSinger()                                                                                                                                
                        }}>其他</span>
                    </div>
                     <div>
                        <span>男</span>
                        <span>女</span>
                        <span>乐队</span>
                    </div>
             <hr />
                    <div>
                        <div>热门歌手</div>
                        {
                            this.state.singerList.map((v,i)=>{
                                return (
                                    <div key={i}>
                                        <img src={v.picUrl} style={{width:'0.77rem',height:'0.77rem',borderRadius:'50%'}}/>
                                        {v.name}
                                    </div>
                                )
                            })
                        }
                        <Spin id='spin'/><span>加载中...</span>
                 </div>
            </div>

            
        )
    }
}
export default Singer