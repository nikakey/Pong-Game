!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" ",shift:"Shift"}},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.eot"},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(0),u=n(6),o=i(u),a=n(11),f=i(a),h=n(5),c=i(h),d=n(13),p=i(d),b=n(12),S=i(b),y=n(8),m=i(y),v=n(9),N=i(v),A=n(14),w=i(A),g=n(7),x=i(g),k=n(10),C=i(k),E=function(){function t(e,n,i){var l=this;r(this,t),this.element=e,this.width=n,this.height=i,this.gameElement=document.getElementById(this.element),this.board=new o.default(this.width,this.height),this.ball=new c.default(8,this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.player1=new f.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,s.KEYS.a,s.KEYS.z,"player1"),this.player2=new f.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,s.KEYS.up,s.KEYS.down,"player2"),document.addEventListener("keydown",function(t){switch(t.key){case s.KEYS.spaceBar:l.pause=!l.pause}}),this.score1=new p.default(this.width/2-50,30,30),this.score2=new p.default(this.width/2+30,30,30),this.pauseContent=new S.default,this.levels=[];for(var u=1;u<4;u++)this.levels.push(new m.default(2*u+6));this.currentLevel=0,this.winnerScreen=new w.default,this.levelScreen=new N.default,this.finalWinner=new x.default,this.gameWinner=0,this.openScreen=new C.default}return l(t,[{key:"render",value:function(){this.gameElement.innerHTML="";var t=document.createElementNS(s.SVG_NS,"svg");if(t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),!0!==this.openScreen.render(t,this.width,this.height)&&!0!==this.finalWinner.render(t,this.width,this.height,this.gameWinner)){var e="none",n=this.levels[this.currentLevel].getWinner();if(n>0){if(2===this.currentLevel){this.finalWinner.enabled=!0;for(var i=0,r=0,l=0;l<=2;l++)1===this.levels[l].getWinner()?i++:r++;return void(this.gameWinner=i>r?this.player1.player:this.player2.player)}!1===this.winnerScreen.wasShown&&(this.winnerScreen.enabled=!0),1===n&&(e=this.player1.player),2===n&&(e=this.player2.player),!1===this.winnerScreen.enabled&&(this.levelScreen.show(),this.currentLevel++,this.player1.score=0,this.player2.score=0)}if(!0===this.winnerScreen.render(t,this.width,this.height,this.currentLevel+1,e))return void(this.winnerScreen.wasShown=!0);if(this.winnerScreen.wasShown=!1,!0!==this.levelScreen.render(t,this.width,this.height,this.currentLevel+1))return this.ball.ballSpeed=this.levels[this.currentLevel].ballSpeed,this.board.render(t),this.player1.render(t,this.pause),this.player2.render(t,this.pause),this.ball.render(t,this.player1,this.player2,this.pause,this.levels[this.currentLevel]),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score),this.pause?void this.pauseContent.render(t,this.width,this.height):void 0}}}]),t}();e.default=E},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]);n(20)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";n(3);var i=n(2),r=function(t){return t&&t.__esModule?t:{default:t}}(i),l=new r.default("game",768,384);!function t(){l.render(),requestAnimationFrame(t)}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],i=!0,r=!1,l=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,l=t}finally{try{!i&&u.return&&u.return()}finally{if(r)throw l}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(0),u=function(){function t(e,n,r){i(this,t),this.radius=e,this.boardWidth=n,this.boardHeight=r,this.direction=1,this.ballSpeed=8,this.ping=new Audio("public/sounds/pong-03.wav"),this.reset()}return l(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(this.ballSpeed-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,n=this.y-this.radius<=0,i=this.y+this.radius>=this.boardHeight;n||i?this.vy=-this.vy:(t||e)&&(this.vx=-this.vx)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var n=e.coordinates(e.x,e.y,e.width,e.height),i=r(n,4),l=i[0],s=i[1],u=i[2],o=i[3];this.x+this.radius>=l&&this.x+this.radius<=s&&this.y>=u&&this.y<=o&&(this.vx=-this.vx,this.ping.play())}else{var a=t.coordinates(t.x,t.y,t.width,t.height),f=r(a,4),h=f[0],c=f[1],d=f[2],p=f[3];this.x-this.radius<=c&&this.x-this.radius>=h&&this.y>=d&&this.y<=p&&(this.vx=-this.vx,this.ping.play())}}},{key:"goal",value:function(t,e){t.score++,"player1"===t.player?e.score1++:e.score2++,this.reset()}},{key:"render",value:function(t,e,n,i,r){i||(this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,n));var l=document.createElementNS(s.SVG_NS,"circle");l.setAttributeNS(null,"fill","#ff1a1a"),l.setAttributeNS(null,"r",this.radius),l.setAttributeNS(null,"cx",this.x),l.setAttributeNS(null,"cy",this.y),t.appendChild(l);var u=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;u?(this.goal(e,r),this.direction=1):o&&(this.goal(n,r),this.direction=-1)}}]),t}();e.default=u},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n){i(this,t),this.width=e,this.height=n}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(l.SVG_NS,"rect");e.setAttributeNS(null,"fill","#353535"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height);var n=document.createElementNS(l.SVG_NS,"line");n.setAttributeNS(null,"x1",this.width/2),n.setAttributeNS(null,"y1",0),n.setAttributeNS(null,"x2",this.width/2),n.setAttributeNS(null,"y2",this.height),n.setAttributeNS(null,"stroke","#ffffff"),n.setAttributeNS(null,"stroke-width","4"),n.setAttributeNS(null,"stroke-dasharray","20, 15"),t.appendChild(e),t.appendChild(n)}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){i(this,t),this.x=e,this.y=n,this.size=r,this.enabled=!1}return r(t,[{key:"render",value:function(t,e,n,i){if(!1===this.enabled)return!1;var r=document.createElementNS(l.SVG_NS,"rect");r.setAttributeNS(null,"fill","#353535"),r.setAttributeNS(null,"width",e),r.setAttributeNS(null,"height",n);var s=document.createElementNS(l.SVG_NS,"text");s.setAttributeNS(null,"x",40),s.setAttributeNS(null,"y",n/2-70),s.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),s.setAttributeNS(null,"font-size",60),s.setAttributeNS(null,"fill","#ffffff"),s.textContent="The final winner is";var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",e/2-100),u.setAttributeNS(null,"y",n/2),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",40),u.setAttributeNS(null,"fill","#ff1a1a"),u.textContent=i;var o=document.createElementNS(l.SVG_NS,"text");return o.setAttributeNS(null,"x",90),o.setAttributeNS(null,"y",n/2+100),o.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),o.setAttributeNS(null,"font-size",50),o.setAttributeNS(null,"fill","#ffa31a"),o.textContent="Congratulations!!!",t.appendChild(r),t.appendChild(s),t.appendChild(u),t.appendChild(o),!0}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=function(){function t(e){i(this,t),this.ballSpeed=e,this.score1=0,this.score2=0}return r(t,[{key:"getWinner",value:function(){return 10===this.score1?1:10===this.score2?2:0}}]),t}();e.default=l},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){i(this,t),this.x=e,this.y=n,this.size=r,this.startTime=(new Date).getTime()}return r(t,[{key:"show",value:function(){this.startTime=(new Date).getTime()}},{key:"render",value:function(t,e,n,i){var r=Math.floor(((new Date).getTime()-this.startTime)/1e3);if(r>5)return!1;var s=document.createElementNS(l.SVG_NS,"rect");s.setAttributeNS(null,"fill","#353535"),s.setAttributeNS(null,"width",e),s.setAttributeNS(null,"height",n);var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",e/2-150),u.setAttributeNS(null,"y",n/2-70),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",70),u.setAttributeNS(null,"fill","#ffffff"),u.textContent="Level "+i;var o=document.createElementNS(l.SVG_NS,"text");o.setAttributeNS(null,"x",e/2-135),o.setAttributeNS(null,"y",n/2-20),o.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),o.setAttributeNS(null,"font-size",20),o.setAttributeNS(null,"fill","#ffffff"),o.textContent="The game will start in";var a=document.createElementNS(l.SVG_NS,"text");a.setAttributeNS(null,"x",e/2-25),a.setAttributeNS(null,"y",n/2+80),a.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),a.setAttributeNS(null,"font-size",70),a.setAttributeNS(null,"fill","#ff1a1a");for(var f=5,h=1;h<=5&&!(r<h);h++)f-=1;return a.textContent=f,t.appendChild(s),t.appendChild(u),t.appendChild(o),t.appendChild(a),!0}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){var l=this;i(this,t),this.x=e,this.y=n,this.size=r,this.enabled=!0,this.wasShown=!1,document.addEventListener("keydown",function(t){t.shiftKey&&(l.enabled=!1)}),this.keyState={},document.addEventListener("keydown",function(t){l.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){l.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"render",value:function(t,e,n){if(!1===this.enabled)return!1;var i=document.createElementNS(l.SVG_NS,"rect");i.setAttributeNS(null,"fill","#353535"),i.setAttributeNS(null,"width",e),i.setAttributeNS(null,"height",n);var r=document.createElementNS(l.SVG_NS,"text");r.setAttributeNS(null,"x",190),r.setAttributeNS(null,"y",50),r.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),r.setAttributeNS(null,"font-size",50),r.setAttributeNS(null,"fill","#ffffff"),r.textContent="Instructions";var s=document.createElementNS(l.SVG_NS,"text");s.setAttributeNS(null,"x",80),s.setAttributeNS(null,"y",110),s.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),s.setAttributeNS(null,"font-size",30),s.setAttributeNS(null,"fill","#ff1a1a"),s.textContent="Player 1";var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",530),u.setAttributeNS(null,"y",110),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",30),u.setAttributeNS(null,"fill","#ff1a1a"),u.textContent="Player 2";var o=document.createElementNS(l.SVG_NS,"text");o.setAttributeNS(null,"x",150),o.setAttributeNS(null,"y",150),o.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),o.setAttributeNS(null,"font-size",20),o.setAttributeNS(null,"fill","#ffffff"),o.textContent="To control the puddle, please press";var a=document.createElementNS(l.SVG_NS,"text");a.setAttributeNS(null,"x",120),a.setAttributeNS(null,"y",200),a.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),a.setAttributeNS(null,"font-size",30),a.setAttributeNS(null,"fill","#ffa31a"),a.textContent="a";var f=document.createElementNS(l.SVG_NS,"text");f.setAttributeNS(null,"x",120),f.setAttributeNS(null,"y",240),f.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),f.setAttributeNS(null,"font-size",30),f.setAttributeNS(null,"fill","#ffa31a"),f.textContent="z";var h=document.createElementNS(l.SVG_NS,"text");h.setAttributeNS(null,"x",530),h.setAttributeNS(null,"y",200),h.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),h.setAttributeNS(null,"font-size",30),h.setAttributeNS(null,"fill","#ffa31a"),h.textContent="Up Arrow";var c=document.createElementNS(l.SVG_NS,"text");c.setAttributeNS(null,"x",510),c.setAttributeNS(null,"y",240),c.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),c.setAttributeNS(null,"font-size",30),c.setAttributeNS(null,"fill","#ffa31a"),c.textContent="Down Arrow";var d=document.createElementNS(l.SVG_NS,"text");d.setAttributeNS(null,"x",180),d.setAttributeNS(null,"y",310),d.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),d.setAttributeNS(null,"font-size",20),d.setAttributeNS(null,"fill","#ffffff"),d.textContent="To start the game, please press";var p=document.createElementNS(l.SVG_NS,"text");return p.setAttributeNS(null,"x",340),p.setAttributeNS(null,"y",350),p.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),p.setAttributeNS(null,"font-size",30),p.setAttributeNS(null,"fill","#ffa31a"),p.textContent="Shift",t.appendChild(i),t.appendChild(r),t.appendChild(s),t.appendChild(u),t.appendChild(o),t.appendChild(a),t.appendChild(f),t.appendChild(h),t.appendChild(c),t.appendChild(d),t.appendChild(p),!0}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r,l,s,u,o,a){var f=this;i(this,t),this.boardHeight=e,this.width=n,this.height=r,this.x=l,this.y=s,this.speed=10,this.score=0,this.pausePaddle=!1,document.addEventListener("keydown",function(t){if(!f.pausePaddle)switch(t.key){case u:f.up();break;case o:f.down()}}),this.player=a,this.keyState={},document.addEventListener("keydown",function(t){f.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){f.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"up",value:function(){this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"coordinates",value:function(t,e,n,i){return[t,t+n,e,e+i]}},{key:"render",value:function(t,e){var n=document.createElementNS(l.SVG_NS,"rect");n.setAttributeNS(null,"fill","#ffa31a"),n.setAttributeNS(null,"width",this.width),n.setAttributeNS(null,"height",this.height),n.setAttributeNS(null,"x",this.x),n.setAttributeNS(null,"y",this.y),t.appendChild(n),this.pausePaddle=e,e||(this.keyState.a&&"player1"===this.player&&this.up(),this.keyState.z&&"player1"===this.player&&this.down(),this.keyState.ArrowUp&&"player2"===this.player&&this.up(),this.keyState.ArrowDown&&"player2"===this.player&&this.down())}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){i(this,t),this.x=e,this.y=n,this.size=r}return r(t,[{key:"render",value:function(t,e,n){var i=document.createElementNS(l.SVG_NS,"rect");i.setAttributeNS(null,"fill","#353535"),i.setAttributeNS(null,"opacity",".5"),i.setAttributeNS(null,"width",e),i.setAttributeNS(null,"height",n);var r=document.createElementNS(l.SVG_NS,"text");r.setAttributeNS(null,"x",e/2-125),r.setAttributeNS(null,"y",n/2-70),r.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),r.setAttributeNS(null,"font-size",70),r.setAttributeNS(null,"fill","#ff1a1a"),r.textContent="Pause";var s=document.createElementNS(l.SVG_NS,"text");s.setAttributeNS(null,"x",165),s.setAttributeNS(null,"y",n/2),s.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),s.setAttributeNS(null,"font-size",20),s.setAttributeNS(null,"fill","#ffffff"),s.textContent="To continue the game, please press";var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",e/2-85),u.setAttributeNS(null,"y",n/2+40),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",30),u.setAttributeNS(null,"fill","#ffa31a"),u.textContent="spacebar",t.appendChild(i),t.appendChild(r),t.appendChild(s),t.appendChild(u)}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){i(this,t),this.x=e,this.y=n,this.size=r}return r(t,[{key:"render",value:function(t,e){var n=document.createElementNS(l.SVG_NS,"text");n.setAttributeNS(null,"x",this.x),n.setAttributeNS(null,"y",this.y),n.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),n.setAttributeNS(null,"font-size",this.size),n.setAttributeNS(null,"fill","#ffffff"),n.textContent=e,t.appendChild(n)}}]),t}();e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),s=function(){function t(e,n,r){var l=this;i(this,t),this.x=e,this.y=n,this.size=r,this.enabled=!1,this.wasShown=!1,document.addEventListener("keydown",function(t){t.shiftKey&&(l.enabled=!1)}),this.keyState={},document.addEventListener("keydown",function(t){l.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){l.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"render",value:function(t,e,n,i,r){if(!1===this.enabled)return!1;var s=document.createElementNS(l.SVG_NS,"rect");s.setAttributeNS(null,"fill","#353535"),s.setAttributeNS(null,"width",e),s.setAttributeNS(null,"height",n);var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",80),u.setAttributeNS(null,"y",n/2-70),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",70),u.setAttributeNS(null,"fill","#ffffff"),u.textContent="Level "+i+" winner";var o=document.createElementNS(l.SVG_NS,"text");o.setAttributeNS(null,"x",e/2-100),o.setAttributeNS(null,"y",n/2),o.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),o.setAttributeNS(null,"font-size",40),o.setAttributeNS(null,"fill","#ff1a1a"),o.textContent=r;var a=document.createElementNS(l.SVG_NS,"text");a.setAttributeNS(null,"x",160),a.setAttributeNS(null,"y",n/2+50),a.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),a.setAttributeNS(null,"font-size",20),a.setAttributeNS(null,"fill","#ffffff"),a.textContent="To start the next level, please press";var f=document.createElementNS(l.SVG_NS,"text");return f.setAttributeNS(null,"x",e/2-50),f.setAttributeNS(null,"y",n/2+90),f.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),f.setAttributeNS(null,"font-size",30),f.setAttributeNS(null,"fill","#ffa31a"),f.textContent="Shift",t.appendChild(s),t.appendChild(u),t.appendChild(o),t.appendChild(a),t.appendChild(f),!0}}]),t}();e.default=s},function(t,e,n){e=t.exports=n(16)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+n(1)+");src:url("+n(1)+'?#iefix) format("embedded-opentype"),url('+n(19)+') format("woff"),url('+n(18)+') format("truetype"),url('+n(17)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(i[l]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.svg"},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=c[i.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](i.parts[l]);for(;l<i.parts.length;l++)r.parts.push(o(i.parts[l],e))}else{for(var s=[],l=0;l<i.parts.length;l++)s.push(o(i.parts[l],e));c[i.id]={id:i.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],l=r[0],s=r[1],u=r[2],o=r[3],a={css:s,media:u,sourceMap:o};n[l]?n[l].parts.push(a):e.push(n[l]={id:l,parts:[a]})}return e}function r(t,e){var n=b(),i=m[m.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function l(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function o(t,e){var n,i,r;if(e.singleton){var o=y++;n=S||(S=s(e)),i=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=h.bind(null,n),r=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=f.bind(null,n),r=function(){l(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var l=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(l,s[e]):t.appendChild(l)}}function f(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(r),l&&URL.revokeObjectURL(l)}var c={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=d(function(){return document.head||document.getElementsByTagName("head")[0]}),S=null,y=0,m=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var l=[],s=0;s<r.length;s++){var u=r[s],o=c[u.id];o.refs--,l.push(o)}if(t){n(i(t),e)}for(var s=0;s<l.length;s++){var o=l[s];if(0===o.refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete c[o.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}]);