//歌手分类
import React from 'react'
class Singer extends React.Component{
    
    render(){
        console.log(this.props)
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
                        <div><img src="" alt=""/>
                        歌手图片 陈奕迅
                        <span>收藏</span>
                    </div>
                 </div>
            </div>

            
        )
    }
}
export default Singer