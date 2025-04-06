import{S as f,a as p,i as a}from"./assets/vendor-CHuH-_A6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),m=new f(".gallery a"),l=document.querySelector(".loader");function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:d})=>`
    <li class="pic">
      <a href="${n}" target="_blank">
        <div class="pic-card">
          <img src="${t}" alt="${s}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${e}</p>
            <p class="info-item"><b> <span>Views</span></b> ${r}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${i}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${d}</p>
          </div>
        </div>
      </a>
    </li>
    `).join("")}function h(){c.innerHTML=""}function g(o){c.insertAdjacentHTML("beforeend",y(o)),m.refresh()}function b(){l.style.display="block"}function L(){l.style.display="none"}function S(o){return o?p.get("https://pixabay.com/api/",{params:{key:"48786073-6183322621e5d0cfd6fc221bb",q:o.toLowerCase(),image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits).catch(t=>[]):Promise.resolve([])}document.querySelector(".button");const v=document.querySelector(".input"),u=document.querySelector(".form");u.addEventListener("submit",q);function q(o){o.preventDefault();const t=v.value.trim();t!==""&&(b(),S(t).then(n=>{if(h(),n.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(n)}).catch(n=>{console.error(n),a.error({message:"Something went wrong. Please check your connection and try again."})}).finally(()=>{L()}),u.reset())}
//# sourceMappingURL=index.js.map
