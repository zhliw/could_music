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
            isShow:true
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
        let keyWords=this.refs.searchWords.value
        console.log(keyWords)
        this.axios(`/search/suggest?keywords=${keyWords}&type=mobile`).then(data=>{
            console.log(data)
            this.setState({
                search:data.result
            })
        })
        console.log()
    }
    //热搜
    searchHot(){
        this.axios('/search/hot/detail').then(data=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div className={'search'}>
                    <input ref={'searchWords'} defaultValue='' onChange={this.search.bind(this)} onKeyUp={(e)=>{
                        if(e.keyCode===13){
                            this.props.history.push('/Search_To')
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
                    <div className='historyAndHot'>
                        <div>
                        <span>搜索历史</span> <span className={'icon-icon-- iconfont'}></span>
                        </div>
                        <div>
                            <span>送别</span>
                        </div>
                                <div className={'SearchHot'}>
                                    <p>热搜榜</p>
                                    {
                                        this.state.searchHot.map((v,i)=>{
                                        return < React.Fragment key={i}>
                                            <span style={{color:this.state.num<=3?'red':''}}>{this.state.num++}</span>
                                            <span className={'searchWord'}>{v.searchWord}</span>
                                            <span>{v.score}</span>
                                            {
                                                v.iconUrl?<img src={v.iconUrl} alt=""/>:null
                                            }
                                            <div>{v.context}</div>
                                        </ React.Fragment>
                                        })
                                    }
                                    


                                </div>
                    </div>
            </div>
        )
    }
}
export default Search