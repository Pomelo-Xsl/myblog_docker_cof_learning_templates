import"./hoisted.RNp93jFh.js";function u(){document.querySelectorAll(".envelope-back").forEach((e=>{const t=e.querySelector(".envelope-title");if(t){const o=t.getAttribute("href");if(o){const{owner:t,repo:n}=function(e){const t=e.split("/");return{owner:t[t.length-2],repo:t[t.length-1]}}(o);fetch(`https://api.github.com/repos/${t}/${n}`).then((e=>e.json())).then((t=>{const o=e.querySelector(".repo-user span"),n=e.querySelector(".repo-fork span"),r=e.querySelector(".repo-star span"),c=e.querySelector(".repo-watch span");o&&(o.textContent=t.owner.login),n&&(n.textContent=t.forks_count),r&&(r.textContent=t.stargazers_count),c&&(c.textContent=t.subscribers_count)})).catch((e=>{console.error("Error fetching repository data:",e)}))}}}))}document.addEventListener("DOMContentLoaded",u),document.addEventListener("swup:page:view",u);