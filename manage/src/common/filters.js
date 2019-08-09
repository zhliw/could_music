
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
    return num>10?num+'':('0'+num)
}
export const timeToData=(num)=>{
        const newNum=Math.round(num)
        if(newNum<60){
            return '00:'+num
        }else if (newNum>60&& newNum<3600){
            return myNum(Math.floor(newNum/60))+':'+myNum(newNum%60)
        } else if (newNum>3600){
            return myNum(Math.floor(newNum/3600))+':'+myNum(Math.floor((newNum%3600)/60))+':'+myNum(Math.floor((newNum%60)))
        }
}

export const myLyric=(str)=>{
    let arr=str.split('\n')
    let arrNew=[]
    arr.map((v,i)=>{
        arrNew.push([arr[i].substring(0,arr[i].indexOf(']')+1),arr[i].substring(arr[i].indexOf(']')+1)])
    })
    return arrNew
}