<!-- FILE: script.js -->
// Minimal JS to enhance 3D interaction and small UI behavior
(function(){
  // parallax pointer effect on hero image
  const hero = document.querySelector('.feature-card');
  if(hero){
    hero.addEventListener('mousemove', (e)=>{
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${ -y*6 }deg)`;
    });
    hero.addEventListener('mouseleave', ()=>{hero.style.transform='none'});
  }

  // simple progressive image loading (demo)
  document.querySelectorAll('.card-thumb, .image-layer, .article-image').forEach(el=>{
    const url = el.style.backgroundImage;
    // placeholder behavior already via CSS; could lazyload real images here.
  });
})();

// فعلا فقط برای اسلایدر یا کارهای پویا
console.log("Home.js Loaded ✅");
function updateDateTime() {
  const now = new Date();
  document.getElementById("current-date").textContent = now.toLocaleDateString("fa-IR");
  document.getElementById("current-time").textContent = now.toLocaleTimeString("fa-IR");
}
setInterval(updateDateTime, 1000);
updateDateTime();
