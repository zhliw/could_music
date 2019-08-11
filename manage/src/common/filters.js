
export const numDis=(num)=>{
        if (num<10000){
            return num
        } else if(num >10000&&num<100000000){
            return Math.round(num/1000)/10+'万'
        } else if (num>100000000){
            return Math.round(num/10000000)/10+'亿'
        }
}
export const timeToMillS =(num)=>{
    return num*1000
}
function myNum(num) {
    return num>=10?num+'':('0'+num)
}
export const timeToData=(num)=>{
        const newNum=Math.round(num)
        if(newNum<60){
            return '00:'+myNum(newNum)
        }else if (newNum>60&& newNum<3600){
            return myNum(Math.floor(newNum/60))+':'+myNum(newNum%60)
        } else if (newNum>3600){
            return myNum(Math.floor(newNum/3600))+':'+myNum(Math.floor((newNum%3600)/60))+':'+myNum(Math.floor((newNum%60)))
        }
}
function timeArr(str){
    let arr=str.split(':');
    if (arr.length<2){
        return Number(arr[0])
    } else if (arr.length===2){
        return Number(arr[0])*60+Number(arr[1])
    } else if(arr.length===3){
        return Number(arr[0])*60+Number(arr[0])*60+Number(arr[1])
    }
}
export const myLyric=(str)=> {
    let str2=JSON.stringify(str)
    let arr=str.split('\n')
    let arrNew = []
    arr.map((v, i) => {
        arrNew.push([timeArr(arr[i].substring(1, arr[i].indexOf(']'))), arr[i].substring(arr[i].indexOf(']') + 1)])
    })
    return arrNew
}
export default {
    currency(v, n = 2) {
        return "￥" + v.toFixed(n);
    },
    date(v) {
        let time = new Date(v);
        return time.getFullYear() + "年"
            + (time.getMonth() + 1).toString().padStart(2, "0") + "月"
            + (time.getDate()).toString().padStart(2, "0") + "日"
            + (time.getHours()).toString().padStart(2, "0") + ":"
            + (time.getMinutes()).toString().padStart(2, "0") + ":"
            + (time.getSeconds()).toString().padStart(2, "0");
    },
    date2(v){
        let time = new Date(v);
        return time.getFullYear() + "-"
            + (time.getMonth() + 1).toString().padStart(2, "0") + "-"
            + (time.getDate()).toString().padStart(2, "0")
    },
    imgUrl(v) {
        return '/ele/' + v;
    }
}