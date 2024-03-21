let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop2 = document.getElementById('stop');
let reset = document.getElementById('reset');
let adad =0;
let minute=0;
let x;
start.addEventListener('click',function(){
    timer.style.background = 'rgb(109, 109, 109)';
     x =setInterval(function(){        
        adad+=1;
        if(adad==60){
            adad=0;
            minute+=1;
            timer.innerHTML = '00:0'+minute+':0'+adad;
        }
        if(adad < 10 ){
            if(minute >= 10){
                timer.innerHTML ='00:'+minute+':0'+adad;
            }
            else{
                timer.innerHTML ='00:0'+minute+':0'+adad;
            }
        }else{
            if(minute >= 10){
                timer.innerHTML ='00:'+minute+':'+adad;
            }
            else{
                timer.innerHTML ='00:0'+minute+':'+adad;
            }
        }
        
    },1000)
})
stop2.addEventListener('click',function(){
    clearInterval(x)
})
reset.addEventListener('click',function(){
    adad=0;
    minute=0;
    clearInterval(x);
    timer.innerHTML = '00:00:00';
    timer.style.background = 'rgb(27, 27, 27)';
})