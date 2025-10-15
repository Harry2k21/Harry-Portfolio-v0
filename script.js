function toggleMenu(){
  const links=document.querySelector('.nav-links');
  if(getComputedStyle(links).display==='none'){
    links.style.display='flex';
    links.style.position='absolute';
    links.style.right='20px';
    links.style.top='76px';
    links.style.flexDirection='column';
    links.style.background='linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
    links.style.padding='12px';
    links.style.borderRadius='12px';
    links.style.boxShadow='0 8px 40px rgba(2,6,23,0.6)';
  } else {
    links.style.display='';
  }
}

function scrollToSection(id){
  const el=document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.feature').forEach((el,i)=>{
    el.style.opacity=0;
    el.style.transform='translateY(18px)';
    setTimeout(()=>{
      el.style.transition='all .6s cubic-bezier(.2,.9,.2,1)';
      el.style.opacity=1;
      el.style.transform='translateY(0)';
    },150*i);
  });
});