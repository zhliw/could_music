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
    imgUrl(v) {
        return '/ele/' + v;
    }
}