import React from 'react'
import pubsub from 'pubsub-js'
export default class searchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isShow:this.props.isShow,
           isTrue:this.props.isTrue
        }
    }
    search(e) {
        if (e.target.value !== '') {
            console.log(22222)
            this.setState({
                [e.target.name]: e.target.value,
                isShow: false
            })
        } else {
            console.log(11111111)
            this.setState({
                isShow: true
            })
            
        }
        console.log(9999, this.props.isShow)
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
        pubsub.publish('is',{isShow:this.state.isShow,isTrue:this.state.isTrue})
    }
    render(){
        return(
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
        )
    }
}