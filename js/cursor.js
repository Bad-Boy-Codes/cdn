function bubbleCursor(t){let e,i,n=t&&t.element,o=n||document.body,s=window.innerWidth,h=window.innerHeight,l={x:s/2,y:s/2},a=[],c=[];function d(t){if(t.touches.length>0)for(let e=0;e<t.touches.length;e++)r(t.touches[e].clientX,t.touches[e].clientY,c[Math.floor(Math.random()*c.length)])}function r(t,e,i){a.push(new u(t,e,i))}function u(t,e,i){const n=Math.floor(60*Math.random()+60);this.initialLifeSpan=n,this.lifeSpan=n,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/10),y:-1*Math.random()-.4},this.position={x:t,y:e},this.canv=i,this.baseDimension=4,this.update=function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.x+=2*(Math.random()<.5?-1:1)/75,this.velocity.y-=Math.random()/600,this.lifeSpan--;const e=.2+(this.initialLifeSpan-this.lifeSpan)/this.initialLifeSpan;t.fillStyle="#e6f1f7",t.strokeStyle="#3a92c5",t.beginPath(),t.arc(this.position.x-this.baseDimension/2*e,this.position.y-this.baseDimension/2,this.baseDimension*e,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()}}e=document.createElement("canvas"),i=e.getContext("2d"),e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",n?(e.style.position="absolute",o.appendChild(e),e.width=o.clientWidth,e.height=o.clientHeight):(e.style.position="fixed",document.body.appendChild(e),e.width=s,e.height=h),o.addEventListener("mousemove",function(t){if(n){const e=o.getBoundingClientRect();l.x=t.clientX-e.left,l.y=t.clientY-e.top}else l.x=t.clientX,l.y=t.clientY;r(l.x,l.y)}),o.addEventListener("touchmove",d,{passive:!0}),o.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("resize",function(t){s=window.innerWidth,h=window.innerHeight,n?(e.width=o.clientWidth,e.height=o.clientHeight):(e.width=s,e.height=h)}),function t(){!function(){i.clearRect(0,0,s,h);for(let t=0;t<a.length;t++)a[t].update(i);for(let t=a.length-1;t>=0;t--)a[t].lifeSpan<0&&a.splice(t,1)}(),requestAnimationFrame(t)}()}new bubbleCursor({element:document.querySelector("body")});