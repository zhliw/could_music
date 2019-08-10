import React from 'react';
import Mesg from './mesg'
import { Collapse } from 'antd';
import Mydian from "./Mydian";
const { Panel } = Collapse;


export default class Fold extends React.Component{
    render() {
        // console.log(80233333,this.props.children)
        return(
            <div>
                <Collapse >
                    <Panel header={this.props.children} key="1" extra={<Mydian></Mydian>}>

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
