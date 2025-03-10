import{S as w,N as h,K as g,a as q,i as C,b as P}from"./assets/vendor-znorpUcV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-toggle"),s=document.querySelector(".menu-mobile .menu-close"),t=document.querySelector(".menu-mobile"),r=document.querySelector(".menu-desktop"),o=document.querySelector(".menu-overlay"),n=document.querySelectorAll(".navigation-link"),u=document.querySelectorAll(".order-button"),v=document.body;let c=!1;function k(){c?(window.innerWidth<768?(t.classList.remove("active"),o.classList.remove("active"),setTimeout(()=>{o.style.display="none"},300),v.style.overflow=""):r.classList.remove("active"),c=!1):(window.innerWidth<768?(t.classList.add("active"),o.style.display="block",o.classList.add("active"),v.style.overflow="hidden"):r.classList.add("active"),c=!0)}function f(){c&&(t.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),setTimeout(()=>{o.style.display="none"},300),v.style.overflow="",c=!1)}function L(m){const l=document.querySelector(m);l&&(f(),setTimeout(()=>{window.scrollTo({top:l.offsetTop,behavior:"smooth"})},300))}e.addEventListener("click",k),s.addEventListener("click",f),o.addEventListener("click",f),n.forEach(m=>{m.addEventListener("click",function(l){l.preventDefault();const y=this.getAttribute("href");L(y)})}),u.forEach(m=>{m.addEventListener("click",function(l){l.preventDefault();const y=this.getAttribute("href");L(y)})}),window.addEventListener("resize",function(){c&&f()})});const M=new w(".swiper-about",{modules:[h,g],spaceBetween:0,loop:!0,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next-about"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:E,slideChangeTransitionEnd:E}});function E(){document.querySelectorAll(".swiper-slide-about").forEach(s=>{s.style.backgroundColor=""});const e=document.querySelector(".swiper-slide-active");e&&(e.style.backgroundColor="#c6e327")}M.init();document.querySelectorAll(".accordion-item-about").forEach((e,s)=>{const t=e.querySelector(".accordion-header-about"),r=e.querySelector(".accordion-content-about"),o=t.querySelector(".about-icon-accordion");s===0?(e.classList.add("active"),r.style.maxHeight=r.scrollHeight+"px",o.style.transform="rotate(180deg)"):r.style.maxHeight="0",t.addEventListener("click",()=>{const n=e.classList.toggle("active");r.style.maxHeight=n?r.scrollHeight+"px":"0",o.style.transform=n?"rotate(180deg)":"rotate(0deg)"})});new w(".projects-swiper",{modules:[h,g],loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});function A(e){for(let s=e.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[e[s],e[t]]=[e[t],e[s]]}return e}const T=document.querySelectorAll(".marquee__inner");T.forEach(e=>{const s=Array.from(e.children),t=A(s);e.innerHTML="",t.forEach(r=>{e.appendChild(r)})});const a={sliderContainer:document.querySelector(".swiper-wrapper-reviews"),slider:document.querySelector(".swiper-reviews"),reviewsSection:document.querySelector("#reviews"),btnBlock:document.querySelector(".btn-wrapper-reviews")},B="https://portfolio-js.b.goit.study/api",V="/reviews",I=async()=>{try{return(await q.get(B+V)).data}catch{return O(),null}},H=()=>{a.sliderContainer.innerHTML='<li class="swiper-placeholder">Not found</li>',a.slider.classList.remove("swiper-reviews"),a.btnBlock.classList.add("hidden-btn"),a.reviewsSection.style.paddingBottom="64px"},N=()=>{C.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"bottomRight",timeout:3e3})},O=()=>{const e=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&(N(),e.disconnect())})},{threshold:.5});e.observe(a.reviewsSection)},j=e=>e.map(({author:s,avatar_url:t,review:r})=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${t}" alt="${s}" />
        <h3 class="reviews-title">${s}</h3>
        <p class="reviews-text">${r}</p>
      </li>
  `).join(""),S=()=>{const e=document.querySelectorAll(".reviews-card");e.forEach(t=>t.style.height="auto");const s=Math.max(...Array.from(e,t=>t.offsetHeight));e.forEach(t=>t.style.height=`${s}px`)},D=async()=>{const e=await I();if(!e||e.length===0){H();return}a.sliderContainer.innerHTML=j(e),new w(".swiper-reviews",{modules:[h,g],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,navigation:{nextEl:".swiper-button-reviews-next",prevEl:".swiper-button-reviews-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:S,slideChange:S}})};D();const R={form:document.querySelector(".contact-form"),email:document.querySelector(".email"),message:document.querySelector(".message")},{form:p,email:i,message:d}=R,$=q.create({baseURL:"https://portfolio-js.b.goit.study/api"});p.addEventListener("submit",async e=>{e.preventDefault();const s=p.elements.email.value.trim(),t=p.elements.comments.value.trim();(await K(s,t)).status===201?(p.reset(),x()):P.fire({title:"Sorry, an error occurred",text:"Please, correct the data and try again!",color:"#fafafa",background:"#c6e327",width:"300px",timer:4e3,timerProgressBar:!0,customClass:{confirmButton:"custom-ok-button"}})});async function K(e,s){let t;try{t=await $.post("/requests",{email:e,comment:s})}catch(r){console.log(r),t=r}return t}i.addEventListener("input",function(){i.value.length>0?i.validity.valid?(i.classList.remove("error"),i.classList.add("success"),d.textContent="Success!",d.className="message success-text"):(i.classList.remove("success"),i.classList.add("error"),d.textContent="Invalid email, try again",d.className="message error-text"):x()});function x(){i.value="",i.classList.remove("success","error"),d.textContent="",d.className="message"}document.querySelector(".title-modal");document.querySelector(".text-modal");function b(){const e=document.getElementById("footer-modal");e&&(e.style.display="none",document.body.style.overflow="",document.removeEventListener("keydown",_),document.removeEventListener("click",F))}function _(e){e.key==="Escape"&&b()}function F(e){e.target.id==="footer-modal"&&b()}document.getElementById("close-btn").addEventListener("click",b);
//# sourceMappingURL=index.js.map
