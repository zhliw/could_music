//搜索
import React from 'react'
import '../../../assets/css/Find/SearchHot.css'
class Search extends React.Component{
    constructor(){
        super()
        this.state={
            num:1,
            search:[],
            searchHot:[],
            isShow:true,
            keyword:'',
            isTrue:true
        }
    }
    componentDidMount(){
        //热搜榜
        this.axios('/search/hot/detail').then(data=>{
            console.log(data)
            this.setState({
                searchHot:data.data
            })
        })
    }
    search(e){
        if(e.target.value!==''){
            this.setState({
                [e.target.name]:e.target.value,
                isShow:false
            })
        }else {
            this.setState({
                isShow:true
            })
            
        }
        if(e.target.value!==''){
            this.axios(`/search/suggest?keywords=${e.target.value}&type=mobile`).then(data=>{
                console.log(1111,data)
                if(data.result.allMatch){
                    this.setState({
                        search:data.result.allMatch,
                        isTrue:true
                    })
                }else{
                    this.setState({
                        isTrue:false
                    })
                }
            })
        }
    }
    //热搜
    searchHot(){
        this.axios('/search/hot/detail').then(data=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div>
                 <this.MyNav></this.MyNav>
            <div className={'search'}>
                    <input name={'keyword'} onChange={this.search.bind(this)} onKeyUp={(e)=>{
                        if(e.keyCode===13){
                            this.props.history.push({
                                pathname:'/Search_To',
                                state:{
                                    searchWord:e.target.value
                                }
                            })
                            
                        }
                    }} className={'search_search_wn'} type='text' placeholder='大家都在搜 陈奕迅' />
                        <span onClick={()=>{
                            this.props.history.go(-1)
                         }}>
                         取消
                        </span>
                    <span className={'icon-geshou iconfont Singers'} onClick={()=>{
                        this.props.history.push('/Singer')
                    }}></span>
                    {
                        <div style={{display:!this.state.isShow?'block':'none'}} className={'searchList'}>
                            搜索 "{this.state.keyword}"
                            {
                               this.state.isTrue?this.state.search.map((v,i)=>{
                                   if(v.keyword){
                                       return <div onClick={()=>{
                                        this.props.history.push({
                                            pathname:'/Search_To',
                                            state:{
                                                searchWord:v.keyword
                                            }
                                        })
                                    }} key={i}>{v.keyword}</div>
                                   }
                                }):null
                            }
                            
                        </div>
                    }
                   <div className='historyAndHot' style={{display:this.state.isShow?'block':'none'}}>
                        <div>
                        <span>搜索历史</span>
                        <span className={'icon-icon-- iconfont'}></span>
                        </div>
                        <div>
                            <span>送别</span>
                        </div>
                                <div className={'SearchHot'}>
                                    <p>热搜榜</p>
                                    {
                                        this.state.searchHot.map((v,i)=>{
                                        return < div onClick={()=>{
                                            this.props.history.push({
                                                pathname:'/Search_To',
                                                state:{
                                                    searchWord:v.searchWord
                                                }
                                            })
                                        }}className={'SearchHotList'} key={i}>
                                            <span style={{color:i+1<=3?'red':'',lineHeight:'0.7rem'}}>{i+1}</span>
                                            <span className={'searchWord'}>{v.searchWord}</span>
                                            <span className={'score'}>{v.score}</span>
                                            {
                                                v.iconUrl?<img src={v.iconUrl} alt=""/>:null
                                            }
                                            <div className={'content'}>{v.content}</div>
                                        </ div>
                                        })
                                    }
                                    


                                </div>
                    </div>
                    
            </div>
            </div>
        )
    }
}
export default Search