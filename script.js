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
  const serviceID = "service_goxdids";
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

function sendBookingEmail() {
  var name = document.getElementById('name').value;
  var contactNumber = document.getElementById('contactNumber').value;
  var email = document.getElementById('email').value;
  var branch = document.getElementById('branch').value;
  var dateTime = document.getElementById('datePicker').value;
  var services = Array.from(cartItems.childNodes)
    .map(node => node.textContent.replace('X', ''))
    .filter(text => text.trim() !== '')
    .join('\n');
  var params = {
    name: name,
    contactNumber: contactNumber,
    email: email,
    branch: branch,
    dateTime: dateTime,
    services: services
  }
  const serviceID = "service_ofgus2j";
  const templateID = "template_fuwug4j";

  emailjs.send(serviceID, templateID, params)
    .then(function (response) {
      alert("Booking Sent, Just wait for an reply to confirm your Booking");
      console.log("Email sent successfully", response);
      clearForm();
    })
    .catch(function (error) {
      console.error("Email sending failed", error);
    });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('contactNumber').value = '';
  document.getElementById('email').value = '';
  document.getElementById('branch').value = '';
  document.getElementById('datePicker').value = '';
  document.getElementById('cartItems').innerHTML = '';
}

