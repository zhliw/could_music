export const controlVideo = (_this,vid) => {
    var videL = document.getElementById(vid);
    if (videL.paused) {
        videL.play();
        _this.refs[vid].style.display = "none"
    } else {
        videL.pause();
        _this.refs[vid].style.display = "block"
    }
}
