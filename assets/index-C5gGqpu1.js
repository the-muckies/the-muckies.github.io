(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let i=document.querySelector("#days"),u=document.querySelector("#hours"),a=document.querySelector("#min"),f=document.querySelector("#sec"),c=()=>{let r=new Date("2024-06-08T09:00:00")-new Date;console.log(r);let l=Math.floor(r/1e3/60/60/24),e=Math.floor(r/1e3/60/60)%24,t=Math.floor(r/1e3/60)%60,o=Math.floor(r/1e3)%60;i.innerHTML=l,u.innerHTML=e,a.innerHTML=t,f.innerHTML=o};c();setInterval(c,1e3);