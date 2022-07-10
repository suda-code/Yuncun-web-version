var bigwindowt = false

function moveBind(header, obj, evnt) {
    //获得元素坐标。
    var left = obj.offsetLeft;
    var top = obj.offsetTop;
    var width = obj.offsetWidth;
    var height = obj.offsetHeight;

    //计算出鼠标的位置与元素位置的差值。
    var cleft = evnt.clientX - left;
    var ctop = evnt.clientY - top;

    document.onmousemove = function (doc) {
        if (!bigwindowt) {
            obj.style.transition = "all 0s"
            //计算出移动后的坐标。
            var moveLeft = doc.clientX - cleft;
            var moveTop = doc.clientY - ctop;

            //设置成绝对定位，让元素可以移动。
            obj.style.position = "absolute";

            //当移动位置在范围内时，元素跟随鼠标移动。
            obj.style.left = moveLeft + "px";
            obj.style.top = moveTop + "px";

            // show("idShow", moveLeft, moveTop);
        }
    }

    // obj.style.-webkit-transition = "all 0.5s"
    obj.style.transition = "all 0.5s"

    document.onmouseup = function () {
        document.onmousemove = function () { }
    };
}

function bigwindow(){
    if (!bigwindowt) {
        bigwindowt = !bigwindowt
        var main_window = document.getElementById('main');
        main_window.style.transition = "all 0.5s"
        main_window.style.position = "absolute"
        main_window.style.minWidth = "100%"
        main_window.style.height = "100%"
        main_window.style.width = "100%"
        document.getElementById('mainheader').style.borderRadius = "0"
        document.getElementById('bigwindowbutton').style.borderRadius = "0"
        document.getElementById('musicplayer').style.bottom = "0px"
        document.getElementById('musicplayer').style.borderRadius = "0"
        main_window.style.borderRadius = "0"
        setTimeout(1000)
        main_window.style.left = "0"
        main_window.style.top = "0"
        var main_window_big = document.getElementById('bigwindow');
        main_window_big.style.height = "3px"
        main_window_big.style.backgroundColor = "#ffffff"
        main_window_big.style.border = "none"
    }
    else {
        bigwindowt = !bigwindowt
        var main_window = document.getElementById('main');
        main_window.style.transition = "all 0.5s"
        main_window.style.position = "absolute"
        main_window.style.minWidth = "707px"
        main_window.style.height = "82.5%"
        main_window.style.width = "85%"
        document.getElementById('mainheader').style.borderRadius = "15px 15px 0 0"
        document.getElementById('bigwindowbutton').style.borderRadius = "0 15px 0 0"
        document.getElementById('musicplayer').style.bottom = ""
        document.getElementById('musicplayer').style.borderRadius = "0 0 15px 15px"
        main_window.style.borderRadius = "15px 15px 0 0"
        setTimeout(1000)
        main_window.style.left = "7.5%"
        main_window.style.top = "4%"
        var main_window_big = document.getElementById('bigwindow');
        main_window_big.style.height = "8px"
        main_window_big.style.backgroundColor = ""
        main_window_big.style.border = "#ffffff 2px solid"
    }
}