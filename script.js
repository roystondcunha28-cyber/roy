// =============================
// EVENT RULES TOGGLE
// =============================
document.querySelectorAll('.rules-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    const expanded = btn.getAttribute('aria-expanded')==='true';
    target.hidden = expanded;
    btn.setAttribute('aria-expanded', !expanded);

    // Reset list animation
    if(!expanded){
      target.querySelectorAll('.animated-list li').forEach(li=>{
        li.style.opacity=0;
        li.style.transform='translateY(20px)';
        setTimeout(()=>{ li.style.opacity=1; li.style.transform='translateY(0)'; }, 100);
      });
    }
  });
});

// =============================
// SCROLL FADE-IN
// =============================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.1, rootMargin:'0px 0px -50px 0px' };
const appearOnScroll = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    obs.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(f=>appearOnScroll.observe(f));
