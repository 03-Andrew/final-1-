window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 50; // Adjust the scroll position as needed
  header.classList.toggle('scrolled', scrolled);
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

/* Accordion */
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Check if the clicked item is already active
      const isActive = this.classList.contains("active");

      // Remove "active" class from all accordion items
      accordionItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Toggle "active" class on the clicked accordion item only if it's not already active
      if (!isActive) {
        this.classList.toggle("active");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var parallaxSections = document.querySelectorAll('.parallax');

  function updateParallax() {
    parallaxSections.forEach(function (section) {
      var scrolled = window.scrollY;
      var speed = section.dataset.speed;

      section.style.backgroundPositionY = -(scrolled * speed) + 'px';
    });
  }

  window.addEventListener('scroll', updateParallax);
  window.addEventListener('resize', updateParallax);

  // Initial call to set initial background positions
  updateParallax();
});

// $(function () {
//   var Accordion = function (el, multiple) {
//     this.el = el || {};
//     this.multiple = multiple || false;

//     // Variables privadas
//     var links = this.el.find('.link');
//     // Evento
//     links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
//   }

//   Accordion.prototype.dropdown = function (e) {
//     var $el = e.data.el;
//     $this = $(this),
//       $next = $this.next();

//     $next.slideToggle();
//     $this.parent().toggleClass('open');

//     if (!e.data.multiple) {
//       $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//     };
//   }

//   var accordion = new Accordion($('#accordion'), false);
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  spaceBetween: 15,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    message: document.getElementById("message").value
  }
  const serviceID = "service_ofgus2j";
  const templateID = "template_iea0qli";

  emailjs.send(serviceID, templateID, params)
    .then(alert("Email Sent!!"))
}


function addToCart() {
  var service = document.getElementById("services").value;
  var cartItems = document.getElementById("cartItems");

  var item = document.createElement("div");
  item.className = "cart-item";
  item.textContent = service;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "add_to_cart_btn";
  deleteButton.onclick = function () {
    cartItems.removeChild(item);
      };

  item.appendChild(deleteButton);
  cartItems.appendChild(item);
}

function clearCart() {
  var cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
}


