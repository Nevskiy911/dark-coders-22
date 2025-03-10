import{S as u,N as m,K as f,a as w,i as E,b as L}from"./assets/vendor-Cx-PsrYF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();new u(".swiper-about",{modules:[m,f],spaceBetween:0,loop:!0,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next-about"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:v}});function v(){requestAnimationFrame(()=>{document.querySelectorAll(".swiper-slide-about").forEach(t=>{t.style.backgroundColor=""});const e=document.querySelector(".swiper-slide-active");e&&(e.style.backgroundColor="#c6e327")})}v();const S=document.querySelectorAll(".accordion-item");S.forEach((e,t)=>{const r=e.querySelector(".accordion-header"),s=e.querySelector(".accordion-content"),o=r.querySelector(".arrow");s.style.overflow="hidden",s.style.transition="max-height 0.3s ease-in-out",t===0?(e.classList.add("active"),s.style.maxHeight=s.scrollHeight+"px",o.style.transform="rotate(180deg)"):(s.style.maxHeight="0",o.style.transform="rotate(0deg)"),r.addEventListener("click",()=>{e.classList.contains("active")?(e.classList.remove("active"),s.style.maxHeight="0",o.style.transform="rotate(0deg)"):(e.classList.add("active"),s.style.maxHeight=s.scrollHeight+"px",o.style.transform="rotate(180deg)")})});new u(".projects-swiper",{modules:[m,f],loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});function x(e){for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}const q=document.querySelectorAll(".marquee__inner");q.forEach(e=>{const t=Array.from(e.children),r=x(t);e.innerHTML="",r.forEach(s=>{e.appendChild(s)})});const a={sliderContainer:document.querySelector(".swiper-wrapper-reviews"),slider:document.querySelector(".swiper-reviews"),reviewsSection:document.querySelector("#reviews"),btnBlock:document.querySelector(".btn-wrapper-reviews")},C="https://portfolio-js.b.goit.study/api",P="/reviews",k=async()=>{try{return(await w.get(C+P)).data}catch{return V(),null}},B=()=>{a.sliderContainer.innerHTML='<li class="swiper-placeholder">Not found</li>',a.slider.classList.remove("swiper-reviews"),a.btnBlock.classList.add("hidden-btn"),a.reviewsSection.style.paddingBottom="64px"},I=()=>{E.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"bottomRight",timeout:3e3})},V=()=>{const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(I(),e.disconnect())})},{threshold:.5});e.observe(a.reviewsSection)},A=e=>e.map(({author:t,avatar_url:r,review:s})=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${r}" alt="${t}" />
        <h3 class="reviews-title">${t}</h3>
        <p class="reviews-text">${s}</p>
      </li>
  `).join(""),y=()=>{const e=document.querySelectorAll(".reviews-card");e.forEach(r=>r.style.height="auto");const t=Math.max(...Array.from(e,r=>r.offsetHeight));e.forEach(r=>r.style.height=`${t}px`)},H=async()=>{const e=await k();if(!e||e.length===0){B();return}a.sliderContainer.innerHTML=A(e),new u(".swiper-reviews",{modules:[m,f],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,navigation:{nextEl:".swiper-button-reviews-next",prevEl:".swiper-button-reviews-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:y,slideChange:y}})};H();document.querySelector(".title-modal");document.querySelector(".text-modal");function M(e){const t=document.getElementById(e);if(!t){iziToast.error({title:"Modal not found:",message:e,position:"center",timeout:1e4});return}t.style.display="flex",document.body.style.overflow="hidden",document.addEventListener("keydown",g),document.addEventListener("click",h)}function p(){const e=document.getElementById("footer-modal");e&&(e.style.display="none",document.body.style.overflow="",document.removeEventListener("keydown",g),document.removeEventListener("click",h))}function g(e){e.key==="Escape"&&p()}function h(e){e.target.id==="footer-modal"&&p()}document.getElementById("close-btn").addEventListener("click",p);const N={form:document.querySelector(".contact-form"),email:document.querySelector(".email"),message:document.querySelector(".message")},{form:l,email:i,message:c}=N,T=w.create({baseURL:"https://portfolio-js.b.goit.study/api"});l.addEventListener("submit",async e=>{e.preventDefault();const t=l.elements.email.value.trim(),r=l.elements.comments.value.trim(),s=await O(t,r);s.status===201?(M(s.data),l.reset(),b()):L.fire({title:"Sorry, an error occurred",text:"Please, correct the data and try again!",color:"#fafafa",background:"#c6e327",width:"300px",timer:4e3,timerProgressBar:!0,customClass:{confirmButton:"custom-ok-button"}})});async function O(e,t){let r;try{r=await T.post("/requests",{email:e,comment:t})}catch(s){console.log(s),r=s}return r}i.addEventListener("input",function(){i.value.length>0?i.validity.valid?(i.classList.remove("error"),i.classList.add("success"),c.textContent="Success!",c.className="message success-text"):(i.classList.remove("success"),i.classList.add("error"),c.textContent="Invalid email, try again",c.className="message error-text"):b()});function b(){i.value="",i.classList.remove("success","error"),c.textContent="",c.className="message"}
//# sourceMappingURL=index.js.map
