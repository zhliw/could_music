export default function (audio) {
    audio.addEventListener("error", function () {   //请求数据时遇到错误
        console.log("event error: " + 'zuishuai');
    });
    audio.addEventListener("canplay",function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
        console.log(audio.duration)
        // audio.currentTime//当前播放时间
        console.log(audio.currentTime)
        // audio.autoplay=true
        // audio.controls=true
        console.log(audio)
            audio.play()

    });
    audio.addEventListener("ended", function () {   //当播放完一首歌曲时也会触发
        audio.src='http://m8.music.126.net/20190809164615/16c410c442e7896af4121d7c75242c13/ymusic/d395/7daf/f34d/5dc580bb410cc8d34b83bd3fe9a66ae4.mp3'
    });
}