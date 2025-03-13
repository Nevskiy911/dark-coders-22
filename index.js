import{S as g,N as b,K as L,A,a as P,i as B,b as I}from"./assets/vendor-BeCdHPGG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-toggle"),t=document.querySelector(".menu-mobile .menu-close"),s=document.querySelector(".menu-mobile"),r=document.querySelector(".menu-desktop"),o=document.querySelector(".menu-overlay"),n=document.querySelectorAll(".navigation-link"),f=document.querySelectorAll(".order-button"),y=document.body;let l=!1;function O(){l?(window.innerWidth<768?(s.classList.remove("active"),o.classList.remove("active"),setTimeout(()=>{o.style.display="none"},300),y.style.overflow=""):r.classList.remove("active"),l=!1):(window.innerWidth<768?(s.classList.add("active"),o.style.display="block",o.classList.add("active"),y.style.overflow="hidden"):r.classList.add("active"),l=!0)}function v(){l&&(s.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),setTimeout(()=>{o.style.display="none"},300),y.style.overflow="",l=!1)}function x(p){const a=document.querySelector(p);a&&(v(),setTimeout(()=>{window.scrollTo({top:a.offsetTop,behavior:"smooth"})},300))}e.addEventListener("click",O),t.addEventListener("click",v),o.addEventListener("click",v),n.forEach(p=>{p.addEventListener("click",function(a){a.preventDefault();const h=this.getAttribute("href");x(h)})}),f.forEach(p=>{p.addEventListener("click",function(a){a.preventDefault();const h=this.getAttribute("href");x(h)})}),window.addEventListener("resize",function(){l&&v()})});const N=new g(".swiper-about",{modules:[b,L],spaceBetween:0,loop:!0,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next-about"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:C,slideChangeTransitionEnd:C}});function C(){document.querySelectorAll(".swiper-slide-about").forEach(t=>{t.style.backgroundColor=""});const e=document.querySelector(".swiper-slide-active");e&&(e.style.backgroundColor="#c6e327")}N.init();const $=new A(".accordion-about",{firstOpen:!0,duration:500,showMultiple:!1,collapse:!0});$.open(0);new g(".projects-swiper",{modules:[b,L],loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});new A(".accordion-faqs",{firstOpen:!0,duration:500,showMultiple:!0,collapse:!0});function j(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}const R=document.querySelectorAll(".marquee__inner");R.forEach(e=>{const t=Array.from(e.children),s=j(t);e.innerHTML="",s.forEach(r=>{e.appendChild(r)})});const u={sliderContainer:document.querySelector(".swiper-wrapper-reviews"),slider:document.querySelector(".swiper-reviews"),reviewsSection:document.querySelector("#reviews"),btnBlock:document.querySelector(".btn-wrapper-reviews")},D="https://portfolio-js.b.goit.study/api",H="/reviews",_=async()=>{try{return(await P.get(D+H)).data}catch{return K(),null}},z=()=>{u.sliderContainer.innerHTML='<li class="swiper-placeholder">Not found</li>',u.slider.classList.remove("swiper-reviews"),u.btnBlock.classList.add("hidden-btn"),u.reviewsSection.style.paddingBottom="64px"},F=()=>{B.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"bottomRight",timeout:4e3})},K=()=>{const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(F(),e.disconnect())})},{threshold:.5});e.observe(u.reviewsSection)},U=e=>e.map(({author:t,avatar_url:s,review:r})=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${s}" alt="${t}" />
        <h3 class="reviews-title">${t}</h3>
        <p class="reviews-text">${r}</p>
      </li>
  `).join(""),k=()=>{const e=document.querySelectorAll(".reviews-card");e.forEach(s=>s.style.height="auto");const t=Math.max(...Array.from(e,s=>s.offsetHeight));e.forEach(s=>s.style.height=`${t}px`)},W=async()=>{const e=await _();if(!e||e.length===0){z();return}u.sliderContainer.innerHTML=U(e),new g(".swiper-reviews",{modules:[b,L],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:k,slideChange:k}})};W();const Z={overlay:document.querySelector(".modal-overlay"),modal:document.querySelector(".modal"),title:document.querySelector(".title-modal"),text:document.querySelector(".text-modal"),closeBtn:document.querySelector(".close-btn")},{overlay:S,modal:G,title:J,text:Q,closeBtn:X}=Z;function Y(e){S.style.display="flex",J.textContent=e.title,Q.textContent=e.message,document.body.classList.add("no-scroll")}function E(){S.style.display="none",document.body.classList.remove("no-scroll")}X.addEventListener("click",E);document.addEventListener("click",e=>{e.target===S&&!G.contains(e.target)&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});const ee={form:document.querySelector(".contact-form"),email:document.querySelector(".email"),message:document.querySelector(".message"),commentInput:document.querySelector(".form-comment"),commentText:document.querySelector(".comment")},{form:w,email:i,message:d,commentInput:c,commentText:m}=ee,te=P.create({baseURL:"https://portfolio-js.b.goit.study/api"});w.addEventListener("submit",async e=>{e.preventDefault();const t=w.elements.email.value.trim(),s=w.elements.comments.value.trim();let r;T()&&V()?(r=await se(t,s),r.status===201?(Y(r.data),w.reset(),q()):M()):M()});async function se(e,t){let s;try{s=await te.post("/requests",{email:e,comment:t})}catch(r){console.log(r),s=r}return s}const oe=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;i.addEventListener("input",function(){i.value?T()?(i.classList.remove("error"),i.classList.add("success"),d.textContent="Success!",d.className="message success-text"):(i.classList.remove("success"),i.classList.add("error"),d.textContent="Invalid email, try again",d.className="message error-text"):q("email")});c.addEventListener("input",function(){c.value?V()?(c.classList.remove("error"),c.classList.add("success"),m.textContent="Success!",m.className="message success-text"):(c.classList.remove("success"),c.classList.add("error"),m.textContent="Enter correct data",m.className="message error-text"):q("comment")});function q(e=null){(!e||e==="email")&&(i.classList.remove("success","error"),d.textContent="",d.className="message"),(!e||e==="comment")&&(c.classList.remove("success","error"),m.textContent="",m.className="message")}const T=()=>oe.test(i.value),V=()=>c.value.trim().length>0,M=()=>{I.fire({title:"Sorry, an error occurred",text:"Please, correct the data and try again!",color:"#fafafa",background:"#1c1d20",width:"300px",timer:4e3,timerProgressBar:!0,customClass:{confirmButton:"custom-ok-button",popup:"custom-swal"}})};
//# sourceMappingURL=index.js.map
