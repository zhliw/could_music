//歌手分类
import React from 'react'
import { Spin } from 'antd';
class Singer extends React.Component{
    constructor(){
        super()
        this.state = {
            singerList:[],
        }
        this.pageIndex=0
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
        if(document.documentElement.scrollTop+window.innerHeight-spin.offsetHeight>spin.offsetTop-20){
            this.getSinger(++this.pageIndex)
            console.log(111111,this.pageIndex)
        }
    }
    async getSinger(pageIndex=0){
        const {artists} = await this.axios.get(`/top/artists?offset=${pageIndex*20}&limit=20`)
        this.setState({
            singerList:[...this.state.singerList,...artists]
        })
    }
    render(){
        return(
             <div>  <this.Return />   
            歌手分类
           <span onClick={()=>{
               this.props.history.push('/Play')
           }}>播放</span>
                    <div>
                        <span>华语</span>
                        <span>华语</span>
                        <span>欧美</span>
                        <span>日本</span>
                        <span>韩国</span>
                        <span>其他</span>
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