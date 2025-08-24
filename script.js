// Smooth scroll for in-page links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id && id.startsWith('#') && id.length>1){
      const el=document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  })
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
