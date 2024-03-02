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

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
