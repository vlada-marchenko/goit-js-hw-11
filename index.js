import{a as p,S as d,i as f}from"./assets/vendor-DtOuICiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".gallery");function m(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:u})=>`
    <li class="pic">
      <a href="${o}" target="_blank">
        <div class="pic-card">
          <img src="${r}" alt="${i}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${e}</p>
            <p class="info-item"><b> <span>Views</span></b> ${t}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${s}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${u}</p>
          </div>
        </div>
      </a>
    </li>
    `).join("")}const y=document.querySelector(".input");function h(n){return n?p.get("https://pixabay.com/api/",{params:{key:"48786073-6183322621e5d0cfd6fc221bb",q:n.toLowerCase(),image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits).catch(r=>[]):Promise.resolve([])}document.querySelector(".button");const l=document.querySelector(".form"),c=document.querySelector(".loader");let g=new d(".pics a");l.addEventListener("submit",b);function b(n){n.preventDefault(),c.style.display="block";const r=y.value.trim();h(r).then(o=>{if(a.innerHTML="",o.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}a.insertAdjacentHTML("beforeend",m(o)),g.refresh()}).catch(o=>console.error(o)).finally(()=>{c.style.display="none"}),l.reset()}
//# sourceMappingURL=index.js.map
