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