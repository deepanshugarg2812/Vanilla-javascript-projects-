window.onload = function(){
    var interval = null;

    //Get the DOM objects by id
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("restart");
    const timer = document.getElementById("timer");

    start.addEventListener("click",startFun);
    stop.addEventListener("click",stopFun);
    reset.addEventListener("click",resetFun);
}

function startFun(){
    var count = 0;
    var second = 0;
    var minute = 0;
    interval = setInterval(() => {
        count += 1;
        
        if(count>=60){
            count = 0;
            minute += 1;
            second = "00";
        }
        else{
            second = count;
        }


        //Update
        document.getElementById("timer").innerText = `${minute}:${second}`;
    },1000);
}

function stopFun(){
    clearInterval(interval);
}

function resetFun(){
    clearInterval(interval);
    document.getElementById("timer").innerText = `${"00"}:${"00"}`;
}