import React from 'react';
import Mesg from './mesg'
import { Collapse } from 'antd';
import Mydian from "./Mydian";
const { Panel } = Collapse;


export default class Fold extends React.Component{
    constructor(){
        super()
    }
    render() {
<<<<<<< HEAD
        // console.log(80233333,this.props.children)
        return(
            <div>
                <Collapse >
                    <Panel header={this.props.children} key="1" extra={<Mydian></Mydian>}>

=======
        return(
            <div>
                <Collapse >
                    <Panel header={this.props.children} key="1" extra={<Mydian {...this.props.myDianObj}></Mydian>}>
>>>>>>> f562d8f59090a6d094c462ac7982c2b85455f38e
                        {
                            this.props.message.map((v,i)=>{
                                return (<Mesg key={i} {...v}></Mesg>)
                            })
                        }
                    </Panel>
                </Collapse>

            </div>
        )
    }
}

// export default class Fold extends React.Component{
//     render() {
//         return(

//         )
//     }
// }
