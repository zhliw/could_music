//搜索
import React from 'react'
class Search extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <input onKeyUp={(e)=>{
                        if(e.keyCode===13){
                            this.props.history.push('./Search_To')
                        }
                    }} className={'search_search_wn'} type='text' placeholder='大家都在搜 陈奕迅' />
                        <span onClick={()=>{
                            this.props.history.go(-1)
                         }}>
                         取消
                        </span>
                    <span className={'icon-geshou iconfont'} onClick={()=>{
                        this.props.history.push('./Singer')
                    }}></span>
                    <div>
                        <div>
                        <span>搜索历史</span> <span className={'icon-icon-- iconfont'}></span>
                        </div>
                        <div>
                            <span>送别</span>
                        </div>
                                <div>
                                    <p>热搜榜</p>
                                    <div>
                                        <span>1</span>
                                        <span>娜扎</span>
                                        <span>33333</span>
                                        <span>娜扎棒棒打</span>
                                        </div>


                                </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search