document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("infinite-slider");
  const slides = Array.from(slider.children);
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");

  // عرض یک اسلاید
  const slideWidth = slides[0].offsetWidth + 15;

  // کلون برای حلقه
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  let offset = 0;

  function moveNext() {
    offset += slideWidth;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${offset}px)`;

    // وقتی رسید به نصف دوم (کلون‌ها)، برگرد به اول
    if (offset >= slideWidth * slides.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        offset = 0;
        slider.style.transform = `translateX(0)`;
      }, 500);
    }
  }

  function movePrev() {
    if (offset === 0) {
      slider.style.transition = "none";
      offset = slideWidth * slides.length;
      slider.style.transform = `translateX(-${offset}px)`;
    }

    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease";
      offset -= slideWidth;
      slider.style.transform = `translateX(-${offset}px)`;
    }, 20);
  }

  next.addEventListener("click", moveNext);
  prev.addEventListener("click", movePrev);

  // حرکت خودکار
  let autoSlide = setInterval(moveNext, 3000);

  slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.addEventListener("mouseleave", () => autoSlide = setInterval(moveNext, 3000));
});