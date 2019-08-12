import  React from  "react"
import filters from "../../../../../../common/filters";

export default class Program extends React.Component{

    render() {

        console.log(this.props.djProgram,55555555555)

        return(
            <div className={"programCon"}>
                    <div className={"programBox"}>
                        <div className={"boxLeft"}>共{this.props.djProgram.count}期</div>
                        <div className={"boxRight"}>
                        <span onClick={()=>{

                            // this.props.djProgram.propgrams.reverse()
                        }}>排序</span>
                        <span>多选</span>
                        </div>
                    </div>
                {/*{*/}
                {/*    this.props.djProgram*/}
                {/*}*/}
                {
                    this.props.djProgram.programs.map((v,i)=>{
                        return(
                                <div key={i} className={"programList"}>
                                    <div className={"serialNum"}>{v.serialNum}</div>
                                    <div className={"programIntro"}>
                                        <div className={"programIntroName"}>{v.name}</div>
                                        <div className={"programInfro"}>
                                            <span>{filters.date2(v.createTime)}</span>
                                            <span>点击量{v.listenerCount}</span>
                                        </div>
                                    </div>
                                    <div className={"programDetail"}>详情</div>
                                </div>
                            )

                    })
                }

            </div>
        )
    }
}
