import  React from  "react"

export default class Program extends React.Component{

    render() {

        console.log(this.props,55555555555)

        return(
            <div>
                    <div className={"programBox"}>
                        <span>共{this.props.djProgram.count}期</span>
                        <span>排序</span>
                        <span>多选</span>
                    </div>
                {/*{*/}
                {/*    this.props.djProgram*/}
                {/*}*/}
                <div>
                    <i></i>
                </div>
            </div>
        )
    }
}
