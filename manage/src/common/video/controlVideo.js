export const controlVideo = (_this,vid,preVid) => {
    var videL = document.getElementById(vid);
    var preVidL = document.getElementById(preVid);
    if (videL.paused) {
        if(preVidL && preVidL.played){
            preVidL.pause();
            _this.refs[preVid].style.display = "block"
        }
        videL.play();
        _this.refs[vid].style.display = "none"
    } else {
        videL.pause();
        _this.refs[vid].style.display = "block"
    }
}
