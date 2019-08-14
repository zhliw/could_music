//搜索
import React from 'react'
import '../../../assets/css/Find/SearchHot.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import pubsub from 'pubsub-js'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 1,
            search: [],
            searchHot: [],
            searchArr: [],
            isShow: true,
            keyword: '',
            isTrue: true
        }
    }
    componentWillMount(){
        pubsub.subscribe('is',(isShow,isTrue)=>{
            console.log(isShow)
        })
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            freeMode:true,
            observer: true,
            slidesPerView: 4,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: true,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',//这里是分页器设置
            },

        })
        //热搜榜
        this.axios('/search/hot/detail').then(data => {
            this.setState({
                searchHot: data.data
            })
        })
        this.searchHot()
        console.log(909909,this.state.isTrue)
    }
    search(e) {
        if (e.target.value !== '') {
            this.setState({
                [e.target.name]: e.target.value,
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })

        }
        if (e.target.value !== '') {
            this.axios(`/search/suggest?keywords=${e.target.value}&type=mobile`).then(data => {
                if (data.result.allMatch) {
                    this.setState({
                        search: data.result.allMatch,
                        isTrue: true,
                    })
                } else {
                    this.setState({
                        isTrue: false
                    })
                }
            })
        }
    }
    //热搜
    searchHot() {
        this.axios('/search/hot')
    }
    //获取搜索历史 判断存不存在，存在时是否重复
    getHistory(theKey) {
        let searchArr = []
        let searchText = localStorage.searchWord
        if (searchText) {
            searchArr = JSON.parse(searchText)
            if( searchArr.indexOf(theKey) > -1 ){
                return
            }
        }
        searchArr.unshift(theKey)
        localStorage.searchWord = JSON.stringify(searchArr)
        this.setState({
            searchArr
        }) 
    }

    render() {
        return (
            <div>
                <this.MyNav></this.MyNav>
                <div className={'search'}>
                    <span className={'search_search_wn iconfont'}>
                        <span className={'icon-magnifier iconfont'}></span>
                        <input autoComplete="off"  style={{outline:'none'}} autoFocus="autoFocus" name={'keyword'} onChange={this.search.bind(this)} onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            this.props.history.push({
                                pathname: '/Search_To/All',
                                state: {
                                    searchWord: e.target.value
                                }
                            })

                        }
                    }}  type='text' placeholder='' />
                    </span>
                    
                    <span style={{marginLeft:"0.24rem",marginRight:'0.30rem',fontSize:'0.26rem',fontWeight:'600'}} onClick={() => {
                        this.props.history.push('/')
                    }}>
                        取消
                        </span>
                    <span style={{fontSize:'0.34rem'}} className={'icon-geshou iconfont Singers'} onClick={() => {
                        this.props.history.push('/Singer')
                    }}></span>


                    <this.SearchList isShow={this.state.isShow} isTrue={this.state.isTrue} search={this.state.search} getHistory={this.getHistory.bind(this)}></this.SearchList>



                    <div className='historyAndHot' style={{ display: this.state.isShow ? 'block' : 'none' }}>
                    {localStorage.searchWord? <div>
                        <div className={'his'}>
                            <span style={{fontSize:'0.2rem',fontWeight:'600'}}>搜索历史</span>
                            <span onClick={()=>{
                                localStorage.removeItem('searchWord')
                                this.props.history.push('/Search')
                                }} style={{color:'#adadad'}} className={'icon-icon-- iconfont'}></span>
                         </div>
                         <div>
                             <div className="myFindBanner">
                                <div className="swiper-container" style={{height:'0.5rem',marginBottom:'0.86rem'}}>
                                    <div className="swiper-wrapper">
                                         {localStorage.searchWord?JSON.parse(localStorage.searchWord).map((v,i)=>{
                                            return <div onClick={()=>{
                                                this.props.history.push({
                                                    pathname:'/search_To/All',
                                                    state:{
                                                        searchWord:v
                                                    }
                                                })
                                            }} key={i} style={{background:'#f7f7f7',height:'0.5rem',textAlign:'center',lineHeight:'0.5rem',borderRadius:'0.2rem',padding:'0,0.24rem',marginLeft:'0.14rem'}} className="swiper-slide">{v}</div> 
                                         }):null
                                          }
                                    </div>
                             {/* <!-- 如果需要滚动条 --> */}
                                </div>
                            </div>
                                            
                        </div>
                    </div>:null}
                        <div className={'SearchHot'}>
                            <p style={{fontSize:'0.2rem',fontWeight:'600',marginTop:localStorage.searchWord?'':'0.5rem'}}>热搜榜</p>
                            {
                                this.state.searchHot.map((v, i) => {
                            return < div key={i} style={{marginTop:' 0.05rem'}} onClick={() => {
                                        this.getHistory(v.searchWord)
                                        this.props.history.push({
                                            pathname: '/Search_To',
                                            state: {
                                                searchWord: v.searchWord
                                            }
                                        })

                                    }} className={'SearchHotList'}>
                                        <span style={{ color: i + 1 <= 3 ? 'red' : '', lineHeight: '0.7rem' }}>{i + 1}</span>
                                        <span className={'searchWord'}>{v.searchWord}</span>
                                        <span className={'score'}>{v.score}</span>
                                        {
                                            v.iconUrl ? <img src={v.iconUrl} alt="" /> : null
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