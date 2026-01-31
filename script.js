document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("show");
  });
});


  // Navbar active link
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
// EmailJS init
(function () {
  emailjs.init("jSpxwNOoQ6iYxSJXu");
})();

const form = document.getElementById("contact-form");
const button = document.getElementById("send-btn");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.disabled = true;
  button.innerText = "Sending...";
  statusText.innerText = "";

  emailjs.sendForm(
    "service_wms9xev",
    "template_pu3ruql",
    this
  ).then(
    () => {
      statusText.style.color = "lightgreen";
      statusText.innerText = "✅ Message sent successfully! I will reply soon.";
      button.innerText = "Send Some Sunshine";
      button.disabled = false;
      form.reset();
    },
    () => {
      statusText.style.color = "red";
      statusText.innerText = "❌ Failed to send. Please try again later.";
      button.innerText = "Send Some Sunshine";
      button.disabled = false;
    }
  );
});
});


