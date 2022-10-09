let a=0;//to track the player
let canvas=document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var l = canvas.getContext('2d');//so that we can manipulate the canvas and draw on it
let bottom=document.getElementById('bottom');
let rect=bottom.getBoundingClientRect();
let upper=document.getElementById('top');
let b=(rect.left+rect.right)/2;//getting x coordinate of ball initially
let c=rect.top;//getting y coordinate of ball initially
var radius=20;
var x=b;
var y=c+4;
l.beginPath();
let abcd=1;
l.strokeStyle = "black";//drawing the ball initially
l.arc(x, y, radius, 0, Math.PI * 2, false);
l.stroke();
var data=0;//margin left tracker
var score=0;//score tracker
let player=-1;//player with maximum score tracker 
let max=-1;//max score till now tracker
function reset(){
    //again setting margin left to 0
    upper.style.marginLeft=data+"px";
    bottom.style.marginLeft=data+"px";
    l.clearRect(0, 0,innerWidth,innerHeight);
    l.beginPath();
    l.strokeStyle = "black";//again drawing the ball at original place
    l.arc(b, c+4, radius, 0, Math.PI * 2, false);
    l.stroke();
    x=b;//again setting the coordinates of the ball
    y=c+4;
    abcd=1;//boolean type of variable so that we can end the function move
    let scr=score-10;
    if(scr>max){
        max=scr;
        player=a;
        //checking condition of the new max score
    }
    score=0;
    //again setting the score as 0
    let str=scr.toString();
    let str2=a.toString();
    let ans="Player"+str2;
    localStorage.setItem(ans,str);//storing the key value pairs
}
const width=Math.max(document.documentElement.clientWidth, window.innerWidth || 0);//getting the width of the screen
var check=0;
document.addEventListener('keydown',function(event){
    let name=event.key;
    let code=event.code;
    console.log(name,code);
    if(name=="Enter"){
        check=1;
    }
    if(name=="Enter"){
        console.log("enter i m enter");
        if(a==0){
            window.alert("Hey! This is your first time!!");//display of messages
        }else{
            let s=player.toString();
            let ans2="Player"+s;
            window.alert("Till Now maximum score is made  by Player"+player.toString()+":"+localStorage.getItem(ans2)+"!!!!!");//display of highest score till now
        }
        console.log(score);
        a++;//signifying player
        // console.log("enter pressed");
        let vx=6;//velocity in x
        let vy=7;//velocity in y
        
        move();
        function move(){
            //animation function
            // console.log("hiiii");
            if(abcd==0){
                reset();
                console.log(abcd);
                console.log("return");
                check=0;
                return;
            }
            //inbuilt function to execute animation smoothly
            requestAnimationFrame(move);
            l.clearRect(0, 0,innerWidth,innerHeight);
            l.beginPath();
            l.strokeStyle = "black";//again drawing the ball again and again after clearing
            l.arc(x, y, radius, 0, Math.PI * 2, false);
            l.stroke();
            //checking collisions with the walls or the screen
            if (radius + x > innerWidth){
                vx = 0 - vx;
                
            }
            if (x - radius < 0){
            vx = 0 - vx;
            
            }
            if (y + radius > innerHeight){
            vy = 0 - vy;
            console.log(x,y);
            console.log(bottom.offsetLeft,bottom.offsetLeft+bottom.offsetWidth);
            console.log(score);
            //checking if the ball hit the rod or not
            if(x>=bottom.offsetLeft&&x<=bottom.offsetLeft+bottom.offsetWidth){
                score=score+10;
                console.log(score);
            }else{
                let sc=score-10;
                window.alert("Game over, your score is "+sc+"!!!!");
                abcd=0;
                data=0;
                check=0;
                return;
            }
            console.log("heyyy");
            }
            if (y - radius < 0){
            vy = 0 - vy;
            console.log(score);
            // console.log(upper.offsetLeft,upper.offsetLeft+upper.offsetWidth);
            //checking if the ball hit the rod or not
            if(x>=upper.offsetLeft&&x<=upper.offsetLeft+upper.offsetWidth){
                score=score+10;
                console.log(score);
            }else{
                let sc=score-10;
                window.alert("Game over, your score is "+sc+"!!!!");
                abcd=0;
                data=0;
                check=0;
                return;
            }
            console.log("hellllo")
            }
            x = x + vx;//changing the x coordinate of ball
            y = y + vy;//changing the y coordinate of ball
        }
    }
    });
    document.addEventListener('keydown',function(even){
        if(check==1){
            let nam=even.key;
        console.log("i am executing");
        // console.log(nam);
        if(nam=="a"){
            console.log("a pressed");
            var posLeft=data;
            //initiall
            // console.log(bottom.offsetLeft);
            console.log(data);
            if(bottom.offsetLeft>=0){
                //decreasing margin accordingly
                
            upper.style.marginLeft=(posLeft-20)+"px";
            bottom.style.marginLeft=(posLeft-20)+"px";
            console.log(upper.style.marginLeft);
            console.log(bottom.style.marginLeft);
            data=data-20;
            }
            
        }else if(nam=="d"){
            console.log("d pressed");
            var posLeft=data;
            // console.log(bottom.offsetLeft+bottom.offsetWidth);
            // console.log(width);
            console.log(data);
            if(bottom.offsetLeft+bottom.offsetWidth<width){
                //increasing margin accordingly
                upper.style.marginLeft=(posLeft+20)+"px";
                bottom.style.marginLeft=(posLeft+20)+"px";
                console.log(upper.style.marginLeft);
                console.log(bottom.style.marginLeft);
                data=data+20; 
            }
            
        }
        }
        
    });