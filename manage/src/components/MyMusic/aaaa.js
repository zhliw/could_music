if (!!audio){
    // audio.autoplay = true;
    audio.controls = true;
    setTimeout(function () {
        console.log(22222)
        console.log("media duration: " + audio.duration);
        console.log("media currentTime: " + audio.currentTime);//从何处播放
        console.log("media playbackrate: " + audio.playbackRate);
        console.log("media isAutoplay: " + audio.autoplay);//加载完成自动播放
        console.log("media volume: " + audio.volume);
        console.log("media muted: " + audio.muted);//静音
        console.log("media readystate: "+2123131+"lalala" + audio.readyState);  //0 = HAVE_NOTHING - 没有关于音频是否就绪的信息
        //1 = HAVE_METADATA - 关于音频就绪的元数据
        //2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
        //3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
        //4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
        // audio.muted = true;
        // audio.currentTime = 5;  //从5秒开始播放
        audio.play();

    }, 5000);


    audio.addEventListener("loadstart", function () {     //当浏览器开始寻找指定的音频/视频时，会发生 loadstart 事件。即当加载过程开始时
        console.log("event loadstart: " + (new Date()).getTime())
    });
    audio.addEventListener("loadedmetadata", function () {   //当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。
        console.log("event loadedmetadata: " + (new Date()).getTime());
    });
    audio.addEventListener("suspend", function () {    //该事件在媒体数据被阻止加载时触发。 可以是完成加载后触发，或者因为被暂停的原因。
        console.log("event suspend: " + (new Date()).getTime());
    });
    audio.addEventListener("loadeddata", function () {   //当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时，会发生 loadeddata 事件
        console.log("event loadeddata: " + (new Date()).getTime());
    });
    audio.addEventListener("canplay", function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
        console.log("event canplay: " + (new Date()).getTime());
    });
    audio.addEventListener("canplaythrough", function () {   //当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件。
        console.log("event canplaythrough: " + (new Date()).getTime());
    });
    audio.addEventListener("play", function () {   //开始播放时触发
        console.log("event play: " + (new Date()).getTime());
    });
    audio.addEventListener("pause", function () {   // 暂停时会触发，当播放完一首歌曲时也会触发
        console.log("event pause: " + (new Date()).getTime());
    });
    audio.addEventListener("ended", function () {   //当播放完一首歌曲时也会触发
        console.log("event ended: " + (new Date()).getTime());
    });

    audio.addEventListener("error", function () {   //请求数据时遇到错误
        console.log("event error: " + (new Date()).getTime());
    });
    audio.addEventListener("stalled", function () {   //网速失速
        console.log("event stalled: " + (new Date()).getTime());
    });
    audio.addEventListener("waiting", function () {   //等待数据，并非错误
        console.log("event waiting: " + (new Date()).getTime());
    });
    audio.addEventListener("seeking", function () {  //寻找中
        console.log("event seeking: " + (new Date()).getTime());
    });
    audio.addEventListener("seeked", function () { //寻找完毕
        console.log("event seeked: " + (new Date()).getTime());
    });
    audio.addEventListener("volumechange", function () {    //音量改变
        console.log("event volumechange: " + (new Date()).getTime());
    });
}
console.log(audio.duration)




if (!!audio){
    // audio.autoplay = true;
    audio.controls = true;
    setTimeout(function () {
        console.log(22222)
        console.log("media duration: " + audio.duration);
        console.log("media currentTime: " + audio.currentTime);
        console.log("media playbackrate: " + audio.playbackRate);
        console.log("media isAutoplay: " + audio.autoplay);
        console.log("media volume: " + audio.volume);
        console.log("media muted: " + audio.muted);
        console.log("media readystate: " + audio.readyState);  //0 = HAVE_NOTHING - 没有关于音频是否就绪的信息
                                                               //1 = HAVE_METADATA - 关于音频就绪的元数据
                                                               //2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
                                                               //3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
                                                               //4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
        // audio.muted = true;
        // audio.currentTime = 5;  //从5秒开始播放
        audio.play();

    }, 5000);


    audio.addEventListener("loadstart", function () {     //当浏览器开始寻找指定的音频/视频时，会发生 loadstart 事件。即当加载过程开始时
        console.log("event loadstart: " + (new Date()).getTime())
    });
    audio.addEventListener("loadedmetadata", function () {   //当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。
        console.log("event loadedmetadata: " + (new Date()).getTime());
    });
    audio.addEventListener("progress", function () {   //当浏览器正在下载指定的音频/视频时，会发生 progress 事件。
        console.log("event progress: " + (new Date()).getTime());
    });
    audio.addEventListener("suspend", function () {    //该事件在媒体数据被阻止加载时触发。 可以是完成加载后触发，或者因为被暂停的原因。
        console.log("event suspend: " + (new Date()).getTime());
    });
    audio.addEventListener("loadeddata", function () {   //当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时，会发生 loadeddata 事件
        console.log("event loadeddata: " + (new Date()).getTime());
    });
    audio.addEventListener("canplay", function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
        console.log("event canplay: " + (new Date()).getTime());
    });
    audio.addEventListener("canplaythrough", function () {   //当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件。
        console.log("event canplaythrough: " + (new Date()).getTime());
    });
    audio.addEventListener("play", function () {   //开始播放时触发
        console.log("event play: " + (new Date()).getTime());
    });
    audio.addEventListener("pause", function () {   // 暂停时会触发，当播放完一首歌曲时也会触发
        console.log("event pause: " + (new Date()).getTime());
    });
    audio.addEventListener("ended", function () {   //当播放完一首歌曲时也会触发
        console.log("event ended: " + (new Date()).getTime());
    });

    audio.addEventListener("error", function () {   //请求数据时遇到错误
        console.log("event error: " + (new Date()).getTime());
    });
    audio.addEventListener("stalled", function () {   //网速失速
        console.log("event stalled: " + (new Date()).getTime());
    });
    audio.addEventListener("waiting", function () {   //等待数据，并非错误
        console.log("event waiting: " + (new Date()).getTime());
    });
    audio.addEventListener("seeking", function () {  //寻找中
        console.log("event seeking: " + (new Date()).getTime());
    });
    audio.addEventListener("seeked", function () { //寻找完毕
        console.log("event seeked: " + (new Date()).getTime());
    });
    audio.addEventListener("volumechange", function () {    //音量改变
        console.log("event volumechange: " + (new Date()).getTime());
    });
}




if (!!audio){
    // audio.autoplay = true;
    audio.controls = true;
    setTimeout(function () {
        console.log("media duration: " + audio.duration);
        console.log("media currentTime: " + audio.currentTime);
        console.log("media playbackrate: " + audio.playbackRate);
        console.log("media isAutoplay: " + audio.autoplay);
        console.log("media volume: " + audio.volume);
        console.log("media muted: " + audio.muted);
        console.log("media readystate: " + audio.readyState);  //0 = HAVE_NOTHING - 没有关于音频是否就绪的信息
                                                               //1 = HAVE_METADATA - 关于音频就绪的元数据
                                                               //2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
                                                               //3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
                                                               //4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
        // audio.muted = true;
        // audio.currentTime = 5;  //从5秒开始播放
        audio.play();

    }, 5000);


    audio.addEventListener("loadstart", function () {     //当浏览器开始寻找指定的音频/视频时，会发生 loadstart 事件。即当加载过程开始时
        console.log("event loadstart: " + (new Date()).getTime());
    });
    audio.addEventListener("durationchange", function () {   //当指定音频/视频的时长数据发生变化时，发生 durationchange 事件。
        console.log("event durationchange: " + (new Date()).getTime());
    });
    audio.addEventListener("loadedmetadata", function () {   //当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。
        console.log("event loadedmetadata: " + (new Date()).getTime());
    });
    audio.addEventListener("progress", function () {   //当浏览器正在下载指定的音频/视频时，会发生 progress 事件。
        console.log("event progress: " + (new Date()).getTime());
    });
    audio.addEventListener("suspend", function () {    //该事件在媒体数据被阻止加载时触发。 可以是完成加载后触发，或者因为被暂停的原因。
        console.log("event suspend: " + (new Date()).getTime());
    });
    audio.addEventListener("loadeddata", function () {   //当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时，会发生 loadeddata 事件
        console.log("event loadeddata: " + (new Date()).getTime());
    });
    audio.addEventListener("canplay", function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
        console.log("event canplay: " + (new Date()).getTime());
    });
    audio.addEventListener("canplaythrough", function () {   //当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件。
        console.log("event canplaythrough: " + (new Date()).getTime());
    });
    audio.addEventListener("play", function () {   //开始播放时触发
        console.log("event play: " + (new Date()).getTime());
    });
    audio.addEventListener("playing", function () {   // 开始回放
        console.log("event playing: " + (new Date()).getTime());
    });
    audio.addEventListener("timeupdate", function () { //播放时间改变   这个会一直打印
        // console.log("event timeupdate: " + (new Date()).getTime());
    });
    audio.addEventListener("pause", function () {   // 暂停时会触发，当播放完一首歌曲时也会触发
        console.log("event pause: " + (new Date()).getTime());
    });
    audio.addEventListener("ended", function () {   //当播放完一首歌曲时也会触发
        console.log("event ended: " + (new Date()).getTime());
    });



    audio.addEventListener("abort", function () {     //客户端主动终止下载（不是因为错误引起）
        console.log("event abort: " + (new Date()).getTime()) ;
    });
    audio.addEventListener("error", function () {   //请求数据时遇到错误
        console.log("event error: " + (new Date()).getTime());
    });
    audio.addEventListener("stalled", function () {   //网速失速
        console.log("event stalled: " + (new Date()).getTime());
    });
    audio.addEventListener("waiting", function () {   //等待数据，并非错误
        console.log("event waiting: " + (new Date()).getTime());
    });
    audio.addEventListener("seeking", function () {  //寻找中
        console.log("event seeking: " + (new Date()).getTime());
    });
    audio.addEventListener("seeked", function () { //寻找完毕
        console.log("event seeked: " + (new Date()).getTime());
    });
    audio.addEventListener("ratechange", function () {  //播放速率改变
        console.log("event ratechange: " + (new Date()).getTime());
    });
    audio.addEventListener("volumechange", function () {    //音量改变
        console.log("event volumechange: " + (new Date()).getTime());
    });
}