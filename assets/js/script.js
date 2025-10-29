// Function to set the theme and update UI
// function setTheme(theme) {
//   document.body.setAttribute("data-bs-theme", theme);
//   localStorage.setItem("theme", theme);
//   var switchThemeBtn = document.getElementById("switchTheme");
//   if (switchThemeBtn) {
//     var iconEl = switchThemeBtn.querySelector("i");
//     if (!iconEl) {
//       iconEl = document.createElement("i");
//       switchThemeBtn.appendChild(iconEl);
//     }
//     iconEl.className =
//       theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
//     switchThemeBtn.setAttribute(
//       "aria-label",
//       theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
//     );
//   }
//   //console.log(`Switched to ${theme} theme`);
// }

function setTheme(theme) {
  document.body.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  var switchThemeBtn = document.getElementById("switchTheme");
  if (switchThemeBtn) {
    switchThemeBtn.innerHTML =
      theme === "dark"
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-stars-fill"></i>';
  }
  //console.log(`Switched to ${theme} theme`);
}

var currentTheme = localStorage.getItem("theme") || "dark";
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById("switchTheme");
if (switchThemeBtn) {
  switchThemeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  });
}

//AOS Initiliaze
AOS.init();

// Fixed Header & back to top button on Scroll
window.addEventListener("scroll", () => {
  // fixed header
  const header = document.getElementById("header");
  if (window.scrollY > 30 && !header.classList.contains("fixed-top")) {
    header.classList.add("fixed-top");
    document
      .getElementById("offcanvasNavbar")
      .classList.add("fixedHeaderNavbar");
  } else if (window.scrollY <= 30 && header.classList.contains("fixed-top")) {
    header.classList.remove("fixed-top");
    document
      .getElementById("offcanvasNavbar")
      .classList.remove("fixedHeaderNavbar");
  }

  //backtotop
  const backToTopButton = document.getElementById("backToTopButton");
  if (window.scrollY > 400 && backToTopButton.style.display === "none") {
    backToTopButton.style.display = "block";
  } else if (
    window.scrollY <= 400 &&
    backToTopButton.style.display === "block"
  ) {
    backToTopButton.style.display = "none";
  }
});

//jumping to top function
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Disable submit button and show loading state
      submitBtn.disabled = true;
      btnText.textContent = "Sending...";
      submitBtn.querySelector("i").className = "bi bi-arrow-repeat spin";

      // Hide previous messages
      formMessage.style.display = "none";
      formMessage.className = "form-message";

      // Get form data
      const formData = new FormData(contactForm);

      try {
        const response = await fetch("https://formspree.io/f/xldjelqg", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Success
          formMessage.className = "form-message form-message-success";
          formMessage.innerHTML =
            '<i class="bi bi-check-circle-fill"></i> Message sent successfully! I\'ll get back to you soon.';
          formMessage.style.display = "block";

          // Reset form
          contactForm.reset();

          // Scroll to message
          formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          // Error from Formspree
          if (data.errors) {
            formMessage.className = "form-message form-message-error";
            formMessage.innerHTML =
              '<i class="bi bi-exclamation-circle-fill"></i> ' +
              data.errors.map((error) => error.message).join(", ");
          } else {
            formMessage.className = "form-message form-message-error";
            formMessage.innerHTML =
              '<i class="bi bi-exclamation-circle-fill"></i> Something went wrong. Please try again.';
          }
          formMessage.style.display = "block";
          formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      } catch (error) {
        // Network error
        formMessage.className = "form-message form-message-error";
        formMessage.innerHTML =
          '<i class="bi bi-exclamation-circle-fill"></i> Network error. Please check your connection and try again.';
        formMessage.style.display = "block";
        formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        btnText.textContent = "Send Message";
        submitBtn.querySelector("i").className = "bi bi-arrow-up-right";
      }
    });
  }
});
