import{S as v,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L=new v("#gallery a",{captionDelay:250});function $(o,s,i="No tags",a="0",e="0",t="0",r="0"){const l=document.querySelector("#gallery");l.childElementCount>19&&(l.innerHTML="");const n=S({url:o,previewURL:s,tag:i,likes:a,views:e,comments:t,downloads:r});l.insertAdjacentHTML("beforeend",n),L.refresh()}function S({url:o,previewURL:s,tag:i,likes:a,views:e,comments:t,downloads:r}){const n=[{label:"Likes",value:a},{label:"Views",value:e},{label:"Comments",value:t},{label:"Downloads",value:r}].map(u=>`
      <div>
        <h3>${u.label}</h3>
        <p>${u.value}</p>
      </div>
    `).join("");return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img 
          class="gallery-image" 
          src="${s}" 
          title="${i}" 
          alt="${i}"
        >
      </a>
      <div class="info">
        ${n}
      </div>
    </li>
  `}const E="48209016-7672759296474ae520e3053db",w="https://pixabay.com/api/",f=document.querySelector("button"),m=document.querySelector("span");async function P(o,s="photo",i="horizontal",a=!0){try{m.style.display="inline-block",f.disabled=!0;const e=new URLSearchParams({key:E,q:o,image_type:s,orientation:i,safesearch:a}),t=await fetch(`${w}?${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const r=await t.json();r.totalHits>0?r.hits.forEach(({largeImageURL:l,previewURL:n,tags:u,likes:h,views:y,comments:g,downloads:b})=>{$(l,n,u,h,y,g,b)}):c.error({title:"Error",message:"No results for this search",position:"topRight"})}catch(e){c.error({title:"Error",message:`Failed to fetch images: ${e.message}`,position:"topRight"})}finally{f.disabled=!1,m.style.display="none"}}const d=document.querySelector("button"),p=document.querySelector("input");d.addEventListener("click",()=>{d.disabled=!0,p.value.trim()?P(p.value.trim()).then(()=>{c.success({title:"Success",message:"Search completed successfully.",position:"topRight"})}).catch(o=>{c.error({title:"Error",message:`An error occurred: ${o.message}`,position:"topRight"})}).finally(()=>{d.disabled=!1}):(c.error({title:"Error",message:"Please enter a search value.",position:"topRight"}),d.disabled=!1)});
//# sourceMappingURL=index.js.map
