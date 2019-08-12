const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/wyy",proxy({
        target:"http://39.107.255.20:4000",
        changeOrigin:true,
        pathRewrite:{
            "^/wyy":""
        }
    }))
}