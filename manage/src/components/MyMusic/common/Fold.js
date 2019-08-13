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
        // console.log(this.props.message,232333)
        return(
            <div>
                <Collapse >
                    <Panel header={this.props.children} key="1" extra={<Mydian {...this.props.myDianObj}></Mydian>}>
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
