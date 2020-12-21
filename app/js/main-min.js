"use strict";window.addEventListener("DOMContentLoaded",function(){var e,t,o,c,a,i,r,u;function s(e){function t(e){return Math.floor(e.getBoundingClientRect().top)}var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;e.preventDefault();var o,c=(n||this).getAttribute("href"),a=document.querySelector(c);a&&(n=t(a),window.scrollBy({top:n,left:0,behavior:"smooth"}),o=setInterval(function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;0!==t(a)&&!e||(a.tabIndex="-1",a.focus(),window.history.pushState("","",c),clearInterval(o))},100))}e=document.getElementById("inputDays"),t=document.getElementById("inputHumans"),o=document.getElementById("inputHours"),c=document.getElementById("outputDays"),a=document.getElementById("outputHumans"),i=document.getElementById("outputHours"),e.oninput=function(){c.textContent=this.value},t.oninput=function(){a.textContent=this.value},o.oninput=function(){i.textContent=this.value},r=document.querySelector(".header-top__wrap"),u=document.querySelector(".header-hero__tabs").offsetTop,window.addEventListener("scroll",function(){var e=window.pageYOffset;u<e?r.classList.add("header-top__wrap--fixed"):r.classList.remove("header-top__wrap--fixed")}),document.querySelectorAll(".menu__link").forEach(function(e){return e.onclick=s});function d(e,t,o){var c=document.querySelector("#"+o);n=0;var o=Math.round(2e3/(e/t)),a=setInterval(function(){n+=t,n>=e&&(clearInterval(a),n=e),c.innerHTML=n},o)}var l=document.querySelector(".tabs").offsetTop-50;function m(n,e){n.style.opacity=0,n.style.display=e||"block",function e(){var t=parseFloat(n.style.opacity);1<(t+=.1)||(n.style.opacity=t,requestAnimationFrame(e))}()}function f(t){t.style.opacity=1,function e(){(t.style.opacity-=.1)<0?t.style.display="none":requestAnimationFrame(e)}()}window.addEventListener("scroll",function e(){window.pageYOffset>l&&(d(12,1,"about__year"),d(34,1,"about__sity"),d(1011,10,"about__event"),d(543,10,"about__people"),this.removeEventListener("scroll",e))});var v,y,_,p,h=document.querySelector(".modal"),w=document.querySelectorAll(".modal-open"),g=document.querySelector(".modal__close"),E=document.querySelector(".modal__overlay");function L(e){var t=document.querySelector(e);document.querySelector(".form__select").addEventListener("change",function(e){switch(e.target.value){case"1":case"2":case"3":case"4":case"5":p=+e.target.value}}),t.addEventListener("input",function(){switch(t.getAttribute("id")){case"inputDays":v=+t.value;break;case"inputHumans":y=+t.value;break;case"inputHours":_=+t.value}!function e(t,n,o,c){var a=document.querySelector(".form__precoast-big");1===c?(a.textContent=Math.round(t*n*(1e3*o)),e()):2==c?(a.textContent=Math.round(t*n*(1100*o)),e()):3==c?(a.textContent=Math.round(t*n*(1200*o)),e()):4==c?a.textContent=Math.round(t*n*(1300*o)):5==c&&(a.textContent=Math.round(t*n*(1400*o)))}(v,y,_,p)})}w.forEach(function(e){e.addEventListener("click",function(){m(h,"block"),document.body.style.overflow="hidden"})}),g.addEventListener("click",function(e){e.preventDefault(),f(h),document.body.style.overflow=""}),document.addEventListener("keydown",function(e){"Escape"===e.code&&(e.preventDefault(),f(h),document.body.style.overflow="")},!1),E.addEventListener("click",function(e){e.target==E&&(e.preventDefault(),f(h),document.body.style.overflow="")}),window.addEventListener("scroll",function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(m(h,"block"),document.body.style.overflow="hidden",window.removeEventListener("scroll",e))}),v=3,y=2,_=4,p=1,L("#inputDays"),L("#inputHumans"),L("#inputHours");var b=document.querySelector(".header-top__nav-btn"),q=document.querySelector(".menu"),S=document.querySelectorAll(".menu__item");function I(e,t,n){var o=2<arguments.length&&void 0!==n?n:"animate__",c=document.querySelector(e);c.classList.add("".concat(o,"animated"),t),c.addEventListener("animationend",function(){c.classList.remove("".concat(o,"animated"),t)},{once:!0})}b.addEventListener("click",function(){q.classList.toggle("active"),b.classList.toggle("active"),S.forEach(function(e){e.addEventListener("click",function(){b.classList.remove("active"),q.classList.remove("active")})})}),I(".header-hero__text","animate__fadeInLeft"),I(".header-hero__slider","animate__fadeInRight");var k,x,H,C,A=document.querySelector(".about").offsetTop+350,w=document.querySelector(".calc").offsetTop-200,g=document.querySelector(".jobs").offsetTop-300;function D(t,n,o){window.addEventListener("scroll",function e(){window.pageYOffset>t&&(I(n,o),this.removeEventListener("scroll",e))})}function M(){H.forEach(function(e){e.style.display="none"}),x.forEach(function(e){e.classList.remove("services__tabs-item--active")})}function B(e){e=0<arguments.length&&void 0!==e?e:0;H[e].style.display="block",x[e].classList.add("services__tabs-item--active")}D(A,".description__img","animate__fadeInLeft"),D(A,".description__text","animate__fadeInRight"),D(w,".jobs__wrap","animate__fadeInUp"),D(g,".models__wrap","animate__zoomIn"),k=".services__tabs-item",x=document.querySelectorAll(k),H=document.querySelectorAll(".description__item"),C=document.querySelector("#services__tabs"),M(),B(),C.addEventListener("click",function(e){var n=e.target;n&&n.classList.contains(k.slice(1))&&x.forEach(function(e,t){n==e&&(M(),B(t))})})});