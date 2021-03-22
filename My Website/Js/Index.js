// jQuery(document).ready(function() {

//   var mouseX = 0, mouseY = 0;
//   var xp = 0, yp = 0;
   
//   $(document).mousemove(function(e){
//     mouseX = e.pageX - 15;
//     mouseY = e.pageY - 15; 
//   });
    
//   setInterval(function(){
//     xp += ((mouseX - xp)/3);
//     yp += ((mouseY - yp)/3);
//     $("#circle").css({left: xp +'px', top: yp +'px'});
//   }, 20);

// });

function myFunction(x) {
  x.classList.toggle("change");
}


const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];
var b = document.getElementById('test');
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  //document.body.append(ball);
  b.appendChild(ball);
 
  
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


