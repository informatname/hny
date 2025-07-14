
function Ball(id, // id шарика
              PL  // Список воспроизведения
              ){
  this.ID= id;
  if( PL===undefined ) this.PL= Videos;
  else this.PL = PL;
  this.X=  Math.random()*400;
  this.Y=  Math.random()*400;
  this.Dx= Math.random()*9-4;
  this.Dy= Math.random()*9-5;
  this.Stop=0;
  this.Sim = 0;
  this.Tinterval;
  this.Npick = 0;
  this.FPC= 60;

this.Start = function() {
  var Pic = this.ID;
  Pic.style.position = "absolute";
  var self = this;
  this.ID.addEventListener('click', function() { self.Pause() } );
  this.Sim = 0;
  var self = this
  this.Tinterval= requestAnimationFrame (function() { self.Go() })
}


this.Go = function() {
  if (this.Sim) return;
  this.Sim = 1;
  var Pic = this.ID;
  var W = window.innerWidth*0.99-100;
  var H = window.innerHeight*0.9-100;

    this.X+=this.Dx;
    if(this.X>W) this.Dx=-9+Math.random()*5;
    if(this.X<0) this.Dx=9-Math.random()*4;
    this.Y+=this.Dy;
    if(this.Y>H) this.Dy=-9+Math.random()*4;
    if(this.Y<0) this.Dy=9-Math.random()*5;

    Pic.style.left = this.X+"px";
    Pic.style.top = this.Y+"px";
    var self = this;
   	setTimeout( function() {requestAnimationFrame(function() { self.Go() })}, 1000/this.FPC);
    
  this.Sim = 0;
}
 
this.Pause = function() {
    var P= document.getElementById('ShowPict');
    P.style.left ="0px";
    P.style.top = "0px";
    //var k=Math.floor(Math.random()*( (this.PL).length ));
	this.Npick = (this.Npick+1) % ((this.PL).length );
    P.innerHTML="<div class='PlayVideo'>"+
	      this.PL[this.Npick]+
		  "</div>";
    P.style.width= window.innerWidth+"px";
    P.style.height= window.innerHeight+"px";
    P.zIndex='999';
    if( this.FPC > 10) this.FPC-=1;
    this.Dx = (Math.random()*2-1)*100;
    this.Dy = (Math.random()*2-1)*100;
}
}



function Start() {
   B1 = new Ball(document.getElementById('move_pic'), Picts);
   B1.Start();
   B2 = new Ball(document.getElementById('move_pic1'), Videos);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic2'), Videos);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic3'), Videos);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic4'), Videos);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic5'), Mult);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic6'), Humor);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic7'), Clip);
   B2.Start();
   B2 = new Ball(document.getElementById('move_pic8'), Eralash);
   B2.Start();
}


document.addEventListener("DOMContentLoaded", 
 function (){
   Start();
 
    var P = document.getElementById('olen');
    P.addEventListener("click", HelpOpen );

}
);

function DivClose(ID){
  var P = document.getElementById(ID);
  P.innerHTML="<IMG src='pic.jpg' style='width:0%'/>";
  P.zIndex='-999';
  P.style.width= 0;
  P.style.height= 0;

}

function HelpClose(ID){
  var P = document.getElementById(ID);
  P.innerHTML="";
  P.zIndex='-999';
  P.style.width= 0;
  P.style.height= 0;
}

function HelpOpen(){
  var P = document.getElementById('HelpScreen');
    P.style.left ="20px";
    P.style.top = "20px";
    P.style.width= window.innerWidth*0.95-5+"px";
    P.style.height= window.innerHeight*0.95-5+"px";
	P.zIndex='999';
	P.innerHTML="<div width='400' id='DivInHelp'>"+
            "Поймай картинку - посмотри новогодний подарок.<br><br>"+
            "Возврат к ловле картинок - нажатие на фон. <br><br>"+
            "Нажатие любой кнопки - помощь. <br>"+
			"</div>";	
}

document.onkeydown = HelpOpen;

window.onresize = HelpOpen;

/*document.onkeydown = function(){
	HelpOpen();
}*/

document.addEventListener("mousemove", 
 function(e){
    var X = (e.clientX/30)+20;
    var Y = (e.clientY/70)+20;
    setTimeout( function() {requestAnimationFrame(function() { 
       document.body.style.backgroundPosition = X+"%"+Y+"%";
     })}, 1000/this.FPC);
}
);

/*
document.addEventListener("mousemove", 
 function(e){
    var P = document.getElementById('olen');
    var X = (e.clientX/50)-10;
    P.style.left = X+"%";  
}
);
*/


function noselect() { return false; }

document.ondragstart = noselect; // запрет на перетаскивание
document.onselectstart = noselect; // запрет на выделение элементов страницы
document.oncontextmenu = noselect; // запрет на выведение контекстного меню
document.onscroll = noselect; // 
document.onmousewheel = noselect; // 
