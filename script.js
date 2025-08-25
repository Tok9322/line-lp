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

// Show success message after Netlify Forms redirect (?success=1)
(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === '1') {
    const box = document.getElementById('form-success');
    if (box) {
      box.hidden = false;
      // Scroll into view for small screens
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
})();
