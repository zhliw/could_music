//搜索
import React from 'react'
import '../../../assets/css/Find/SearchHot.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
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
                // console.log(1111, data)
                if (data.result.allMatch) {
                    this.setState({
                        search: data.result.allMatch,
                        isTrue: true,
                        searchArr:[]
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
        this.axios('/search/hot').then(data => {
            console.log(data)
        })
    }
    getHistory(theKey) {
        let searchArr = []
        let searchText = localStorage.searchWord
        if (searchText) {
            searchArr = JSON.parse(searchText)
            this.setState({
                searchArr
            })
        }
        searchArr.unshift(theKey)
        localStorage.searchWord = JSON.stringify(searchArr)
    }
    render() {
        return (
            <div>
                <this.MyNav></this.MyNav>
                <div className={'search'}>
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
                    }} className={'search_search_wn iconfont'} type='text' placeholder='' />
                    <span style={{marginLeft:"0.24rem",marginRight:'0.30rem',fontSize:'0.26rem',fontWeight:'600'}} onClick={() => {
                        this.props.history.push('/')
                    }}>
                        取消
                        </span>
                    <span style={{fontSize:'0.34rem'}} className={'icon-geshou iconfont Singers'} onClick={() => {
                        this.props.history.push('/Singer')
                    }}></span>
                    {
                        <div style={{ display: !this.state.isShow ? 'block' : 'none' }} className={'searchList'}>
                            <div style={{height:'0.7rem',fontSize:'0.21rem',marginLeft:'0.27rem',color:"#5e88a6",lineHeight:'0.7rem'}}>搜索 "{this.state.keyword}"</div>
                            <div className={'searchSong'}></div>
                            {
                                this.state.isTrue ? this.state.search.map((v, i) => {
                                    if (v.keyword) {
                                        return <div>
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
                            }

                        </div>
                    }
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
                                            return <div key={i} style={{background:'#f7f7f7',height:'0.5rem',textAlign:'center',lineHeight:'0.5rem',borderRadius:'0.2rem',padding:'0,0.24rem',marginLeft:'0.14rem'}} className="swiper-slide">{v}</div> 
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
                            return < div style={{marginTop:' 0.05rem'}} onClick={() => {
                                        this.props.history.push({
                                            pathname: '/Search_To',
                                            state: {
                                                searchWord: v.searchWord
                                            }
                                        })
                                        this.getHistory(v.searchWord)

                                    }} className={'SearchHotList'} key={i}>
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