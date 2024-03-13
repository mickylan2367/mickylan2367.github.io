var unit =100,
    canvasList, //キャンバスリストの配列
    info = {},
    colorList;

// Init function
// Initialize variables and begin the animation

function init(){
    info.seconds=0;
    info.t = 0;
    canvasList = [];
    colorList=[];
    // canvas1コメの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(["#0ff", "#ff0", "#f00", "#00f", "#f0f"]);

    // canvas2コメの色指定
    canvasList.push(document.getElementById("waveCanvas2"));
    colorList.push(['#43c0e4']);

    // canvas3コメの色指定
    canvasList.push(document.getElementById("waveCanvas3"));
    colorList.push(['#666', '#888']);

    // 各キャンバスの初期化
    for(var canvasIndex in canvasList){
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; /*Canvasのwidthをウィンドウ幅に合わせる*/
        canvas.height=200;
        canvas.contextCache = canvas.getContext("2d");
    }

    update();
}


function update(){
    for(var canvasIndex in canvasList){
        var canvas = canvasList[canvasIndex];

        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);

        // 共通の描画が情報の更新
        info.seconds = info.seconds + .014;
        info.t = info.seconds*Math.PI;

        // 自身の再起呼び出し
        setTimeout(update, 35);
    }
}


// Draw animation function
// This function draws one frame of the animation, waits 20ms, and then calls itself again
function draw(canvas, color){
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawWave(canvas, color[0], 0.8, 3, 0);
    drawWave(canvas, color[1], 0.5, 4, 0);
    drawWave(canvas, color[2], 0.3, 1.6, 0);
    drawWave(canvas, color[3], 0.2, 3, 100);
    drawWave(canvas, color[4], 0.8, 2, 0);
}

// sine を書く関数
function drawSine(canvas, t, zoom, delay){
    var xAxis = Math.floor(canvas.height/2);
    var yAxis=0;

    var context = canvas.cotextCache;
    // Set the initial x and y,starting at 0, 0 and translating to the origin on the canvas.

    var x=t;
    var y =Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y + xAxis);

    for(i=yAxis;i<=canvas.width+10;i+=10){
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x-delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}


init();