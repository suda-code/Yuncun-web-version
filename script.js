var theme = "none"
function xuanzhong(obj, objname){
    for(let i = 0; i < document.querySelectorAll('.option').length; i++) {
        document.querySelectorAll('.option')[i].innerHTML = document.querySelectorAll('.option')[i].innerHTML.replace('<b>', '').replace('</b>', '')
        document.querySelectorAll('.option')[i].className = "option"
    }
    if (objname == "发现音乐"){
        obj.innerHTML = `<b>发现音乐</b>`;
        obj.className = "option on-option"
        document.querySelector(".maincontent .content").innerHTML = `
        <div class="stacked-cards">
        <ul>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        </ul>
    </div>
    <script class="javascript">
	var stackedCard = new stackedCards({
	 	selector: '.stacked-cards',
	 	layout: "slide",
	 	transformOrigin: "center",
	});

	stackedCard.init();

</script>
        `
    }
    if (objname == "设置"){
        obj.innerHTML = `<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M34.0003 41L44 24L34.0003 7H14.0002L4 24L14.0002 41H34.0003Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><path d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/></svg> <b>设置</b>`;
        obj.className = "option on-option"
        document.querySelector(".maincontent .content").innerHTML = `
            <h2>设置</h2>
            <form id="shezhi" name="shezhi">
            <div class="sshuoming">主题</div>
                <label class="lradio" onclick="var nonetheme = document.getElementById('nonetheme');if (nonetheme.checked) {qtheme('none');} else{qtheme('none');}">
                    <input type="radio" id="nonetheme" name="themei" value="默认主题" checked>
                    <span class="radio"></span>
                    <span class="text">网易红<span>
                </label>
                <label class="lradio" onclick="var bilibilitheme = document.getElementById('bilibilitheme');if (bilibilitheme.checked) {qtheme('bilibili');} else{qtheme('none');}">
                    <input type="radio" id="bilibilitheme" name="themei" value="哔哩哔哩粉主题">
                    <span class="radio"></span>
                    <span class="text">哔哩哔哩粉<span>
                </label>
                <label class="lradio" onclick="var feishubluetheme = document.getElementById('feishubluetheme');if (feishubluetheme.checked) {qtheme('feishublue');} else{qtheme('none');}">
                <input type="radio" id="feishubluetheme" name="themei" value="哔哩哔哩粉主题">
                <span class="radio"></span>
                <span class="text">飞书蓝<span>
            </label>
            </form>
            <script>
                // 备用代码区
            </script>
            `
                document.getElementById(theme + 'theme').checked = true
        }
    if (objname == "本地与下载"){
        obj.innerHTML = `<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><path d="M30 28L23.9933 34L18 28.0134" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 20V34" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> <b>本地与下载</b>`;
        obj.className = "option on-option"
        document.querySelector(".maincontent .content").innerHTML = `
            <h2>本地与下载</h2>
            <div class="sshuoming">共有 4 首歌</div>
            <div class="dwcontent">
                <div class="music-dw-card" onclick="qhmusicdw('Dream It Possible')">
                    Dream It Possible
                </div>
                <div class="music-dw-card" onclick="qhmusicdw('Voyager 1')">
                    Voyager 1 (Julochiel N Remix)
                </div>
                <div class="music-dw-card" onclick="qhmusicdw('打上花火')">
                    打上花火
                </div>
                <div class="music-dw-card" onclick="qhmusicdw('いつも何度でも')">
                    いつも何度でも
                </div>
                <!--<div class="music-dw-card" onclick="qhmusicdw('起风了')">
                    起风了(需要网络)
                </div>-->
            <div>
        `
    }
}
function qhmusicdw(music_name){
    ap.pause()
    if (music_name == "Dream It Possible"){
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,                //是否附着页面底部，否为false
            autoplay: false,             //是否自动播放，否为false,移动端不能生效
            volume: 0.6,                //初始音量（0~1）
            lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
            mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
            preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
            listFolded: false,          //列表默认折叠，开启为true
            theme: '#ec4141',           //主题颜色
            audio: [{
                name: 'Dream It Possible',           //歌曲名称
                artist: 'Delacey',       //歌曲作者
                url: './audio/Delacey - Dream It Possible.flac',         //歌曲源文件地址
                cover: './images/music img/Delacey - Dream It Possible.jpg',     //歌曲封面地址
                lrc:  './audio/lrc/Delacey - Dream It Possible.lrc',        //歌曲的歌词文件
                theme: '#ec4141'        //主题颜色（优先）
            }]
        });
    }
    if (music_name == "Voyager 1"){
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,                //是否附着页面底部，否为false
            autoplay: false,             //是否自动播放，否为false,移动端不能生效
            volume: 0.6,                //初始音量（0~1）
            lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
            mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
            preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
            listFolded: false,          //列表默认折叠，开启为true
            theme: '#ec4141',           //主题颜色
            audio: [{
                name: 'Dream It Possible',           //歌曲名称
                artist: 'Julochiel N/John Tasoulas',       //歌曲作者
                url: './audio/Voyager 1 (Julochiel N Remix).mp3',         //歌曲源文件地址
                cover: './images/music img/Voyager 1.jpg',     //歌曲封面地址
                lrc:  './audio/lrc/Voyager 1 (Julochiel N Remix).lrc',        //歌曲的歌词文件
                theme: '#ec4141'        //主题颜色（优先）
            }]
        });
    }
    if (music_name == "打上花火"){
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,                //是否附着页面底部，否为false
            autoplay: false,             //是否自动播放，否为false,移动端不能生效
            volume: 0.6,                //初始音量（0~1）
            lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
            mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
            preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
            listFolded: false,          //列表默认折叠，开启为true
            theme: '#ec4141',           //主题颜色
            audio: [{
                name: '打上花火',           //歌曲名称
                artist: 'Daoko,米津玄師',       //歌曲作者
                url: './audio/Daoko,米津玄師 - 打上花火.mp3',         //歌曲源文件地址
                cover: './images/music img/Daoko,米津玄師 - 打上花火.jpg',     //歌曲封面地址
                lrc:  './audio/lrc/Daoko,米津玄師 - 打上花火.lyc',        //歌曲的歌词文件
                theme: '#ec4141'        //主题颜色（优先）
            }]
        });
    }
    if (music_name == "いつも何度でも"){
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,                //是否附着页面底部，否为false
            autoplay: false,             //是否自动播放，否为false,移动端不能生效
            volume: 0.6,                //初始音量（0~1）
            lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
            mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
            preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
            listFolded: false,          //列表默认折叠，开启为true
            theme: '#ec4141',           //主题颜色
            audio: [{
                name: 'いつも何度でも',           //歌曲名称
                artist: '伊藤サチコ',       //歌曲作者
                url: './audio/伊藤サチコ - いつも何度でも.flac',         //歌曲源文件地址
                cover: './images/music img/伊藤サチコ - いつも何度でも.jpg',     //歌曲封面地址
                lrc:  './audio/lrc/伊藤サチコ - いつも何度でも.lrc',        //歌曲的歌词文件
                theme: '#ec4141'        //主题颜色（优先）
            }]
        });
    }
    if (music_name == "起风了"){
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,                //是否附着页面底部，否为false
            autoplay: false,             //是否自动播放，否为false,移动端不能生效
            volume: 0.6,                //初始音量（0~1）
            // lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
            mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
            preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
            listFolded: false,          //列表默认折叠，开启为true
            theme: '#ec4141',           //主题颜色
            audio: [{
                name: '起风了',           //歌曲名称
                artist: '周深',       //歌曲作者
                url: 'https://music.163.com/song/media/outer/url?id=1475596788',         //歌曲源文件地址
                cover: 'https://p1.music.126.net/LpFu9pWQ3tzldjhkLwh4Vw==/109951165291444752.jpg',     //歌曲封面地址
                // lrc:  './audio/lrc/伊藤サチコ - いつも何度でも.lrc',        //歌曲的歌词文件
                theme: '#ec4141'        //主题颜色（优先）
            }]
        });
    }
    ap.play()
}
function qtheme(themename){
    if (themename == "bilibili") {
        theme = "bilibili";
        document.getElementById('roots').innerHTML += `
            .window-main .window-header{
                background-color: #fb7299;
            }
            .lcheckbox input:checked+.checkbox{
                border-color: #fb7299 ;
                background: #fb7299;
            }
            .lradio input:checked+.radio{
                border-color: #fb7299 ;
                /*background: #fb7299;*/
            }
            .aplayer-played,.aplayer-thumb,.aplayer-volume{
                background: #fb7299 !important;
            }
            .window-header .big-window-button:hover{
                background-color: #fc8bab;
            }
            .lradio input:checked + .radio::after {
                background: #fc8bab;
            }
        `
    }
    else if (themename == "feishublue") {
        theme = "feishublue";
        document.getElementById('roots').innerHTML += `
            .window-main .window-header{
                background-color: #4d74e2;
            }
            .lcheckbox input:checked+.checkbox{
                border-color: #4d74e2 ;
                background: #4d74e2;
            }
            .lradio input:checked+.radio{
                border-color: #4d74e2 ;
                /*background: #4d74e2;*/
            }
            .aplayer-played,.aplayer-thumb,.aplayer-volume{
                background: #4d74e2 !important;
            }
            .window-header .big-window-button:hover{
                background-color: #6185e0;
            }
            .lradio input:checked + .radio::after {
                background: #4d74e2;
            }
        `
    }
    else {
        theme = "none";
        document.getElementById('roots').innerHTML = "";
    }
}