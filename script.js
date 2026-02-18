// Toggle rules
document.querySelectorAll('.rules-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    const expanded = btn.getAttribute('aria-expanded')==='true';
    target.hidden = expanded;
    btn.setAttribute('aria-expanded', !expanded);
  });
});

// Scroll fade-in
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.style.opacity='1';
    e.target.style.transform='translateY(0)';
    obs.unobserve(e.target);
  });
},{threshold:0.1, rootMargin:'0px 0px -50px 0px'});
faders.forEach(f=>observer.observe(f));
