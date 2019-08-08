import React from "react";

export default class Waterfall extends React.Component{
    constructor(){
        super();
        this.state={

        }
        // this.locked=0;
        // this.start=0;
        // this.size=20;
        // this.container=document.getElementById("container");
        // this.columns=[];
        // this.init();
    }
    init(){
        let _width="3.45rem";//===1540+10
        let _size=Math.floor(_width/154);
        if(_size!==this.columns.length) {
            this.columns = new Array(_size);//计算出数组的长度
            for (let i = 0; i < this.columns.length; i++) {//动态初始化数组，让数组的每个元素的初始值==0
                this.columns[i] = 0;
            }
        }
        this.container.style.width=_size*154+"px";
    }

    render() {
        return (
            <div>

            </div>
        );
    }
    // create(_data){
    //     let _module,_fragment=document.createDocumentFragment();
    //     for(let i=0;i<_data.length;i++){
    //         _module=document.createElement("a");
    //         _module.className="module";
    //         _module.href=_data[i].url;
    //         _module.appendChild(document.createElement("img"));
    //         _module.children[0].src="../D18_Cart/"+_data[i].img;
    //         _module.appendChild(document.createElement("span"));
    //         _module.children[1].innerText="H51908WATERFALL";
    //         _fragment.appendChild(_module);
    //     }
    //     this.container.appendChild(_fragment);
    // }//修改start
    min(){
        let _index=0;
        for(let i=1;i<this.columns.length;i++){
            if(this.columns[_index]>this.columns[i]){
                _index=i;
            }
        }
        return _index;
    }
    max(){
        let _index=0;
        for(let i=1;i<this.columns.length;i++){
            if(this.columns[_index]<this.columns[i]){
                _index=i;
            }
        }
        return this.columns[_index];
    }
    reset(){//重置每一个className名称为module的div的位置
        let _index;
        for(let i=this.start;i<this.container.children.length;i++){
            //TODO:find min value from arry
            _index=this.min();//因为放下一张图之后原来的列的高度不一定是最小的了。
            this.container.children[i].style.left=154*_index+"px";
            this.container.children[i].style.top=this.columns[_index]+"px";
            this.columns[_index]+=this.container.children[i].offsetHeight;//作用是将新的小模块的高度保存到数组中
        }
        this.container.style.height=this.max()+"px";
        this.locked=0;
    }//修改start
    check(){
        let _me=this;
        let _timer=window.setInterval(function(){
            let _completed=true;//假设所有图片全部加载完成
            for(let i=_me.start;i<this.container.children.length;i++){
                if(!this.container.children[i].children[0].complete){
                    _completed=false;
                    break;
                }
            }
            if(_completed){
                window.clearInterval(_timer);
                _me.reset();
            }
        },100);

    }
    componentDidMount() {
        this.props.getNewMV();
    }

    //修改start
    // load(){
    //     let _me=this;
    //     Ajax.request({
    //         api:"http://localhost:8080/HTML5/D21_MySQL_PHP/API/waterfall.php",
    //         send:{
    //             start:this.start,
    //             size:this.size
    //         },
    //         success:function(_data){
    //             try{
    //                 _data=window.eval("("+_data+")");
    //                 // console.log(_data);
    //                 _me.create(_data);
    //                 _me.check();
    //             }catch (e) {
    //                 console.log(e);
    //             }
    //         }
    //     });
    // }
}
function main(){
    var _height=document.documentElement.clientHeight||document.body.clientHeight;
    let _wf=new Waterfall();
    _wf.locked=1;//做标记手法，在编程过程中会经常用。
    _wf.load();
    window.onscroll=function(){
        if(_height+(document.documentElement.scrollTop||document.body.scrollTop)+100>=_wf.max() && !_wf.locked){
            //为什么要+100
            _wf.locked=1;
            _wf.start+=_wf.size;
            _wf.load();
        }
    };
    window.onresize=function(){
        var _old=_wf.columns.length,_new,_fetch;
        _wf.init();
        _new=_wf.columns.length;
        if(_old!==_new){
            _fetch=_wf.start;//保存start值
            _wf.start=0;//因为当列的数量发生改变时，所有图片都要重新定位。
            _wf.reset();//当列的数量发生改变时，从第0张图片开始，到最后一张图，全部重新定位
            _wf.start=_fetch;//恢复原来start
        }
    }
}
