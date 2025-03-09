import{S as u,N as p,K as v,a as y,i as b,b as E}from"./assets/vendor-CQGYg9lt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new u(".swiper-about",{modules:[p,v],spaceBetween:0,loop:!0,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next-about"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:e}});function e(){requestAnimationFrame(()=>{document.querySelectorAll(".swiper-slide-about").forEach(n=>{n.style.backgroundColor="",n.style.color="white"});const r=document.querySelector(".swiper-slide-active");r&&(r.style.backgroundColor="#c6e327",r.style.color="black")})}e(),document.querySelectorAll(".accordion-item").forEach((r,n)=>{const o=r.querySelector(".accordion-header"),t=r.querySelector(".accordion-content"),a=o.querySelector(".arrow");t.style.overflow="hidden",t.style.transition="max-height 0.3s ease-in-out",n===0?(r.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",a.style.transform="rotate(180deg)"):(t.style.maxHeight="0",a.style.transform="rotate(0deg)"),o.addEventListener("click",()=>{r.classList.contains("active")?(r.classList.remove("active"),t.style.maxHeight="0",a.style.transform="rotate(0deg)"):(r.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",a.style.transform="rotate(180deg)")})})});document.addEventListener("DOMContentLoaded",function(){new u(".swiper",{loop:!0,spaceBetween:20,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});function L(e){for(let s=e.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[e[s],e[r]]=[e[r],e[s]]}return e}const S=document.querySelectorAll(".marquee__inner");S.forEach(e=>{const s=Array.from(e.children),r=L(s);e.innerHTML="",r.forEach(n=>{e.appendChild(n)})});const d={sliderContainer:document.querySelector(".swiper-wrapper-reviews"),slider:document.querySelector(".swiper-reviews"),reviewsSection:document.querySelector("#reviews")},x="https://portfolio-js.b.goit.study/api",q="/reviews",C=async()=>{try{return(await y.get(x+q)).data}catch{return I(),null}},P=()=>{d.sliderContainer.innerHTML='<li class="swiper-placeholder">Not found</li>',d.slider.classList.remove("swiper-reviews")},k=()=>{b.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"bottomRight",timeout:3e3})},I=()=>{const e=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(k(),e.disconnect())})},{threshold:.5});e.observe(d.reviewsSection)},H=e=>e.map(({author:s,avatar_url:r,review:n})=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${r}" alt="${s}" />
        <h3 class="reviews-title">${s}</h3>
        <p class="reviews-text">${n}</p>
      </li>
  `).join(""),f=()=>{const e=document.querySelectorAll(".reviews-card");let s=0;const r=new IntersectionObserver(n=>{const o=n.filter(t=>t.isIntersecting);o.length>1?(e.forEach(t=>t.style.height="auto"),s=Math.max(...o.map(t=>t.target.offsetHeight)),o.forEach(t=>{t.target.style.height=`${s}px`})):e.forEach(t=>t.style.height="auto")},{threshold:.5});e.forEach(n=>r.observe(n))},M=async()=>{const e=await C();if(!e||e.length===0){P();return}d.sliderContainer.innerHTML=H(e),new u(".swiper-reviews",{modules:[p,v],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,navigation:{nextEl:".swiper-button-reviews-next",prevEl:".swiper-button-reviews-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1,autoHeight:!0},768:{slidesPerView:2,autoHeight:!1},1440:{slidesPerView:4}},on:{init:f,slideChange:f}})};M();document.querySelector(".title-modal");document.querySelector(".text-modal");function V(e){const s=document.getElementById(e);if(!s){iziToast.error({title:"Modal not found:",message:e,position:"center",timeout:1e4});return}s.style.display="flex",document.body.style.overflow="hidden",document.addEventListener("keydown",w),document.addEventListener("click",g)}function m(){const e=document.getElementById("footer-modal");e&&(e.style.display="none",document.body.style.overflow="",document.removeEventListener("keydown",w),document.removeEventListener("click",g))}function w(e){e.key==="Escape"&&m()}function g(e){e.target.id==="footer-modal"&&m()}document.getElementById("close-btn").addEventListener("click",m);const A={form:document.querySelector(".contact-form"),email:document.querySelector(".email"),message:document.querySelector(".message")},{form:l,email:i,message:c}=A,N=y.create({baseURL:"https://portfolio-js.b.goit.study/api"});l.addEventListener("submit",async e=>{e.preventDefault();const s=l.elements.email.value.trim(),r=l.elements.comments.value.trim(),n=await O(s,r);n.status===201?(V(n.data),l.reset(),h()):E.fire({title:"Sorry, an error occurred",text:"Please, correct the data and try again!",color:"#fafafa",background:"#c6e327",width:"300px",timer:4e3,timerProgressBar:!0,customClass:{confirmButton:"custom-ok-button"}})});async function O(e,s){let r;try{r=await N.post("/requests",{email:e,comment:s})}catch(n){console.log(n),r=n}return r}i.addEventListener("input",function(){i.value.length>0?i.validity.valid?(i.classList.remove("error"),i.classList.add("success"),c.textContent="Success!",c.className="message success-text"):(i.classList.remove("success"),i.classList.add("error"),c.textContent="Invalid email, try again",c.className="message error-text"):h()});function h(){i.value="",i.classList.remove("success","error"),c.textContent="",c.className="message"}
//# sourceMappingURL=index.js.map
