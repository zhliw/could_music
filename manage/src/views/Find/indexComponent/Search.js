//搜索
import React from 'react'
class Search extends React.Component{
    render(){
        return(
            <div>
                <input type='text' placeholder='大家都在搜 陈奕迅' />
            <span onClick={()=>{
                this.props.history.go(-1)
            }}>
                取消
            </span>
            <span className={'icon-geshou iconfont'} onClick={()=>{
                this.props.history.push('./Singer')
            }}></span>

            </div>
        )
    }
}
export default Search