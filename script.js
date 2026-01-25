document.addEventListener("DOMContentLoaded", function () {

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

  // ✅ EmailJS init
  emailjs.init("jSpxwNOoQ6iYxSJXu");

  // ✅ Form submit
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_wms9xev",
      "template_pu3ruql",
      form
    ).then(
      function () {
        alert("Message sent successfully 🌸");
        form.reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message 😢");
      }
    );
  });

});
