var gameBundle=function(t){"use strict";let a,o,e,s,l=0,r=!1,i=!1,n=0,c=0;function m(t){let e=h;switch($(".game-box").toggleClass("active"),$(".start").toggleClass("active"),t){case 1:u(5,e);break;case 2:u(8,e);break;case 3:u(10,e)}o||(o=setInterval(function(){a||(a=Date.now()),l+=Date.now()-a,a=Date.now(),d()},500))}function d(){let t=l,a=(t=Math.floor(t/1e3))%60,o=(t=Math.floor(t/60))%60;t=Math.floor(t/60);let e=(o?o>9?o:"0"+o:"00")+":"+(a>9?a:"0"+a)+" ";$(".game-info__timer__number").text(e)}function p(){o&&(clearInterval(o),o=null),a=null}function u(t,a){let o=a;(o=function(t){let a,o,e;for(e=t.length-1;e>0;e--)a=Math.floor(Math.random()*(e+1)),o=t[e],t[e]=t[a],t[a]=o;return t}(o=(o=o.slice(0,t)).concat(o))).forEach(g)}function g(t,a,o){$(".game-box__cards").append("<li class='game-box__cards__card' data-framework='"+t.id+"'>                 <div class='game-box__cards__card__front'>                 <img src='https://www.billboard.com/files/media/Taylor-Swift-reputation-ART-2017-billboard-1240.jpg'></div>                 <div class='game-box__cards__card__back'>                 <img src='"+t.bgUrl+"'></div>                 </li>"),++a==o.length&&$(".game-box__cards__card").each((t,a)=>$(a).bind("click",_))}function _(){i||this.classList.contains("flipped")||(this.classList.add("flipped"),r?(s=this,r=!1,n+=1,$(".game-info__moves__number").text(n+" "),e.dataset.framework===s.dataset.framework?function(){new Audio("./assets/audio/right1.mp3").play();let t=c;c+=20;let a=setInterval(function(){t==c&&clearInterval(a),$(".game-info__score__number").html(t+++" ")},50);!function(){let t=0;$(".game-box__cards__card").each((a,o)=>o.classList.contains("flipped")?null:t++),0==t&&function(){let t=Math.round(l/1e3),a=c/5*(c/2*(1/n*100)*(1/t));p(),new Audio(["./assets/audio/victory.mp3","./assets/audio/victory2.mp3"][Math.round(1*Math.random())]).play(),$(".victory-modal").toggleClass("active");let o=setInterval(function(){console.log(a,e),e>a&&clearInterval(o),$(".victory-modal__score").html(e+++" ")},1),e=0;$(".victory-modal__restart").on("click",function(){$(".victory-modal").toggleClass("active"),n=0,$(".game-info__moves__number").text(n+" "),c=0,$(".game-info__score__number").html(c+" "),$(".game-box__cards").html(" "),$(".game-box").toggleClass("active"),$(".start").toggleClass("active"),p(),l=0,d()})}()}()}():(i=!0,new Audio(["./assets/audio/lose1.mp3","./assets/audio/lose2.mp3","./assets/audio/lose3.mp3"][Math.round(3*Math.random())]).play(),setTimeout(()=>{e.classList.remove("flipped"),s.classList.remove("flipped"),i=!1},1e3))):(r=!0,e=this))}let h=[{id:0,bgUrl:"https://taylorpictures.net/albums/albums/reputation/posters/normal_002.jpg"},{id:1,bgUrl:"https://i0.wp.com/portalpopline.com.br/wp-content/uploads/2017/08/12.png?resize=600%2C801"},{id:2,bgUrl:"https://taylorpictures.net/albums/photoshoots/2015/gq/normal_004.jpg"},{id:3,bgUrl:"https://taylorpictures.net/albums/candids/2018/7-20arrivingatherapartment/normal_008.jpg"},{id:4,bgUrl:"https://pbs.twimg.com/media/DOtjS7xXkAADVaD.jpg"},{id:5,bgUrl:"https://abrilcapricho.files.wordpress.com/2017/11/dnsnavewkaeb7rq.jpg"},{id:6,bgUrl:"https://taylorpictures.net/albums/photoshoots/2016/usweekly/normal_004.JPG"},{id:7,bgUrl:"https://taylorpictures.net/albums/photoshoots/2016/att/normal_001.jpg"},{id:8,bgUrl:"https://taylorpictures.net/albums/photoshoots/2015/gq/normal_006.jpg"},{id:9,bgUrl:"https://taylorpictures.net/albums/products/incrediblethings/promoshoot/normal_001.jpg"}];return $(".easy").on("click",function(){m(1)}),$(".medium").on("click",function(){m(2)}),$(".hard").on("click",function(){m(3)}),t.cardList=h,t}({});