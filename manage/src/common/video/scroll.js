export default {
    getScrollTop(id) {
        var scrollTop = 0;
        if (document.getElementById(id) && document.getElementById(id).scrollTop) {
            scrollTop = document.getElementById(id).scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    },

    getClientHeight(id) {
        var clientHeight = 0;
        if (document.body.clientHeight && document.getElementById(id).clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.getElementById(id).clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.getElementById(id).clientHeight);
        }
        return clientHeight;
    },

    getScrollHeight(id) {
        return Math.max(document.body.scrollHeight, document.getElementById(id).scrollHeight);
    }
}