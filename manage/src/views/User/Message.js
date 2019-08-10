import React from "react";
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type:this.props.match.params.type/1,
            uid:JSON.parse(localStorage.userInfo).account.id,
            privateLetter:[],
            comment:[],
            mine:[],
            inform:[]
        }
    }
    async componentDidMount(){
        const privateLetter = await this.axios.get('/msg/private?limit=10') //私信
        const comment = await this.axios.get('/msg/comments?uid='+this.state.uid) //评论
        const mine = await this.axios.get('/msg/forwards?limit=10') //@我
        const inform = await this.axios.get('/msg/notices?limit=20') //通知,
        this.setState({
            privateLetter:privateLetter.msgs,
            comment:comment.comments,
            mine:mine.forwards,
            inform:inform.notices

        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            type:nextProps.match.params.type/1
        })
    }
    render(){
        return (
            <div className={'ygz_message ygz'}>
                <header style={{marginBottom:'0.1rem',display:'flex'}}>
                    <i className={'icon-fanhui iconfont'} onClick={()=>{this.props.history.push('/user')}}></i>
                    <span style={{color:'#000',fontSize:'0.34rem'}}>我的消息</span>
                    <i className={'icon-yinle1 iconfont'} ></i>
                </header>
                <ul className={'myNav'} style={{margin:'0.6rem auto',width:'6.88rem',height:'0.54rem',border:'1px solid #c1dcd5',borderRadius:'22px'}}>
                    <li style={{background:this.state.type===1?'red':''}} onClick={()=>{this.props.history.push('/user/message/1')}}>私信</li>
                    <li style={{background:this.state.type===2?'red':''}} onClick={()=>{this.props.history.push('/user/message/2')}}>评论</li>
                    <li style={{background:this.state.type===3?'red':''}} onClick={()=>{this.props.history.push('/user/message/3')}}>@我</li>
                    <li style={{background:this.state.type===4?'red':''}} onClick={()=>{this.props.history.push('/user/message/4')}}>通知</li>
                </ul>
                <div className="privateLetter" style={{display:this.state.type===1?'block':'none'}}>
                    {
                        this.state.privateLetter.map((v,i)=>{
                            return (
                                <div key={i} style={{display:'flex',borderBottom:'1px solid #e5e5e5',paddingBottom:'0.26rem'}} className={'myMessage'}>
                                    <img src={v.fromUser.avatarUrl} alt="" style={{height:'1rem',width:'1rem'}}/>
                                    <div className={'messageInfo'} style={{textAlign:'left'}}>
                                        <p><span className={'name'}>{v.fromUser.nickname}</span><span className={'date'}>{this.filters.date(v.lastMsgTime)}</span></p>
                                        <p className={'describe'}>{JSON.parse(v.lastMsg).msg.substr(0,35)+'...'}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{display:this.state.type===2?'block':'none'}}>
                    {
                        false?<div>123</div>:'暂无消息...'
                    }
                </div>
                <div style={{display:this.state.type===3?'block':'none'}}>
                    {
                        false?<div>123</div>:'暂无消息...'
                    }
                </div>
                <div className="privateLetter" style={{display:this.state.type===4?'block':'none'}}>
                    {
                        this.state.inform.length>1?
                            this.state.inform.map((v,i)=>{
                                let info = JSON.parse(v.notice)
                                return (
                                    <div key={i} style={{display:'flex',borderBottom:'1px solid #e5e5e5',paddingBottom:'0.26rem'}} className={'myMessage'}>
                                        <img src={info.user.avatarUrl} alt="" style={{height:'1rem',width:'1rem'}}/>
                                        <div className={'messageInfo'} style={{textAlign:'left'}}>
                                            <p><span className={'name'} style={{fontSize:'0.2rem'}}><i style={{color:'pink'}}>{info.user.nickname}</i>赞了你的评论</span><span className={'date'}>{this.filters.date(v.time)}</span></p>
                                            <p className={'describe'}>{info.comment?info.comment.content:null}</p>
                                        </div>
                                    </div>
                                )
                            }):'暂无消息...'
                    }
                </div>
            </div>
        )
    }
}
export default Message