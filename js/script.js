const projects = [
  {title:"Logistics Automation Hub",status:"V1.1 Stable",description:"Plataforma local para gestão, automação e rastreabilidade de operações logísticas, com workflow operacional, cadastros, alertas e relatórios.",category:"software",tech:["Python","Flask","SQLite","Pandas","JavaScript"],accent:"LAH",action:"Conhecer projeto",url:"projects/logistics-automation-hub.html"},
  {title:"Data Validation Hub",status:"V2.0.0",description:"Motor de validação e tratamento de dados com revisão humana, rastreabilidade e processamento estruturado de planilhas.",category:"software",tech:["Python","Pandas","OpenPyXL","SQLite"],accent:"DVH",action:"Conhecer projeto",url:"projects/data-validation-hub.html"},
  {title:"Coffee IT Support",status:"Projeto Web",description:"Site institucional para serviços de suporte e consultoria em tecnologia, com interface responsiva, integração com WhatsApp e Instagram via função serverless.",category:"web",tech:["HTML","CSS","JavaScript","Vercel"],accent:"CIT",action:"Conhecer projeto",url:"projects/coffee-it-support.html"},
  {title:"Smart Home Automation API",status:"Em desenvolvimento",description:"Arquitetura para integrar regras próprias de automação residencial com dispositivos inteligentes e assistentes.",category:"api",tech:["Python","API","Tuya","IoT"],accent:"API",action:"Em desenvolvimento"},
  {title:"Planner Automation",status:"Case publicado",description:"Automação de tarefas recorrentes no Microsoft Planner com lógica de escala 12x36, criação programada, atribuição e checklist.",category:"automation",tech:["Power Automate","Planner","12x36"],accent:"PA",action:"Conhecer projeto",url:"projects/planner-automation.html"},
  {title:"Próximos experimentos",status:"Dev Lab",description:"Espaço reservado para novas aplicações, integrações e experimentos que farão parte da evolução do laboratório.",category:"automation",tech:["Labs","R&D"],accent:"+",action:"Em breve"}
];
const grid=document.querySelector("#projectGrid"),filters=document.querySelectorAll(".filter");
function renderProjects(filter="all"){
 const visible=filter==="all"?projects:projects.filter(p=>p.category===filter);
 grid.innerHTML=visible.map((p,i)=>`<article class="project-card">
   <div class="project-cover"><div class="project-code">${p.accent}</div><span class="project-number">0${i+1}</span><div class="project-shine"></div></div>
   <div class="project-body"><div class="project-meta"><span>${p.status}</span><span>${p.category}</span></div><h3>${p.title}</h3><p>${p.description}</p>
   <div class="tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join("")}</div>${p.url?`<a class="project-action project-link" href="${p.url}" ${p.url.startsWith("http")?'target="_blank" rel="noopener noreferrer"':''}><span>${p.action}</span><span>↗</span></a>`:`<div class="project-action"><span>${p.action}</span><span>↗</span></div>`}</div>
 </article>`).join("");
}
filters.forEach(b=>b.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProjects(b.dataset.filter)}));
const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
renderProjects();
