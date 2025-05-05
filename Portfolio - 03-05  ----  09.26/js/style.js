const toggleBtn = document.getElementsByClassName('toggle-icon')[0];
const closeBtn = document.getElementsByClassName('close-icon')[0];
const menu = document.getElementsByClassName('header-mobile-menu')[0];

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

if (closeBtn && menu) {
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}



// to Load Header Footer

    // Load template from index.html
    fetch('index.html')
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const header = doc.querySelector('#main-header');
        const footer = doc.querySelector('#main-footer');

        document.getElementById('header').innerHTML = header.innerHTML;
        document.getElementById('footer').innerHTML = footer.innerHTML;
      });



var swiper = new Swiper(".testimonialSlider", {
          spaceBetween: 30,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
          autoplay: "true",
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 25,
            },
            1199: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
        },
        });


        // FAQ section
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
          item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
          });
        });