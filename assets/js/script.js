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

// AI Chatbot Functionality
document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotMinimize = document.getElementById("chatbot-minimize");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotTyping = document.getElementById("chatbot-typing");

  let isOpen = false;
  let chatHistory = [];

  // Portfolio information for context-aware responses
  const portfolioInfo = {
    name: "Mandla Dyonase",
    skills: [
      "JavaScript (80%)",
      "Python (80%)",
      "Java (68%)",
      "Docker (100%)",
      "Linux (80%)",
      "Netlify (80%)",
      "CSS (80%)",
      "HTML (100%)",
      "Bootstrap (80%)",
      "TailwindCSS (80%)",
      "Firebase (70%)",
    ],
    projects: [
      {
        name: "Cash On Delivery",
        description:
          "An e-commerce platform with cash on delivery functionality",
        tech: "Java, JavaScript, Maven, HTML, CSS",
        type: "E-commerce",
      },
      {
        name: "Let's Shop",
        description: "Online store platform with hot deals and newsletter",
        tech: "HTML, CSS, JavaScript, Bootstrap",
        type: "E-commerce",
      },
      {
        name: "SA-deliver",
        description: "E-commerce platform built with Java",
        tech: "Java, JavaScript, Maven, CI/CD",
        type: "E-commerce",
      },
    ],
    education: [
      {
        institution: "Codespace Academy",
        duration: "2024 (6 months)",
        type: "Education",
      },
      {
        institution: "WeThinkCode",
        duration: "September 2024",
        type: "Education",
      },
      {
        institution: "COSAT High School",
        duration: "2018 - 2022",
        type: "Education",
      },
    ],
    interests: [
      "Data Analysis",
      "DevOps",
      "Backend Development",
      "Problem Solving",
    ],
  };

  // Toggle chatbot window
  chatbotToggle.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      chatbotContainer.classList.add("active");
      chatbotToggle.classList.add("active");
      chatbotInput.focus();
    } else {
      chatbotContainer.classList.remove("active");
      chatbotToggle.classList.remove("active");
    }
  });

  // Minimize chatbot
  chatbotMinimize.addEventListener("click", function () {
    isOpen = false;
    chatbotContainer.classList.remove("active");
    chatbotToggle.classList.remove("active");
  });

  // Send message function
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage(message, "user");
    chatbotInput.value = "";

    // Show typing indicator
    showTypingIndicator();

    // Process message (with delay for realistic feel)
    setTimeout(() => {
      hideTypingIndicator();
      processMessage(message);
    }, 1000);
  }

  // Send button click
  chatbotSend.addEventListener("click", sendMessage);

  // Enter key press
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Add message to chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chatbot-message chatbot-message-${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "chatbot-avatar-small";
    avatar.innerHTML =
      sender === "user"
        ? '<i class="bi bi-person-fill"></i>'
        : '<i class="bi bi-robot"></i>';

    const content = document.createElement("div");
    content.className = "chatbot-message-content";
    const p = document.createElement("p");
    p.textContent = text;
    content.appendChild(p);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Add to history
    chatHistory.push({ role: sender, content: text });
  }

  // Show typing indicator
  function showTypingIndicator() {
    chatbotTyping.style.display = "block";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Hide typing indicator
  function hideTypingIndicator() {
    chatbotTyping.style.display = "none";
  }

  // Process message and generate response
  async function processMessage(message) {
    const lowerMessage = message.toLowerCase();

    // Try to get AI response first
    try {
      const aiResponse = await getAIResponse(message);
      if (aiResponse && aiResponse.length > 10) {
        addMessage(aiResponse, "bot");
        return;
      }
    } catch (error) {
      console.log("AI API not available, using intelligent fallback");
    }

    // Fallback to intelligent pattern matching (enhanced)
    const response = generateResponse(lowerMessage);
    addMessage(response, "bot");
  }

  // Get AI response using a free AI API service
  async function getAIResponse(message) {
    try {
      // Build comprehensive context
      const context = `You are Mandla Dyonase's AI assistant. Help visitors learn about his portfolio.

About Mandla:
- Skills: ${portfolioInfo.skills.join(", ")}
- Projects: ${portfolioInfo.projects.map((p) => p.name).join(", ")}
- Education: ${portfolioInfo.education.map((e) => e.institution).join(", ")}
- Interests: ${portfolioInfo.interests.join(", ")}

Be friendly, concise (2-3 sentences), and helpful. Answer questions about projects, skills, or experience.`;

      // Use a free AI API (Tavily or similar can work, but for now use enhanced fallback)
      // The fallback system is actually quite intelligent, so we'll enhance it instead
      return null; // Will use enhanced fallback
    } catch (error) {
      console.log("AI API error, using enhanced fallback:", error);
      return null;
    }
  }

  // Generate intelligent, context-aware response based on keywords and patterns
  function generateResponse(message) {
    // Greetings with variations
    if (
      message.match(
        /^(hi|hello|hey|greetings|good morning|good afternoon|good evening|sup|what's up|howdy)/i
      )
    ) {
      const greetings = [
        "Hello! I'm Mandla's AI assistant. I can help you learn about his projects, skills, education, and experience. What would you like to know?",
        "Hey there! I'm here to answer questions about Mandla's portfolio, projects, and skills. How can I help you today?",
        "Hi! Welcome! I can tell you about Mandla's work, technical skills, education, and projects. What interests you?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Projects - detailed responses
    if (
      message.match(
        /project|portfolio|work|build|application|app|website|ecommerce|e-commerce/
      )
    ) {
      const specificProject = message.match(
        /(cash|delivery|shop|sa-deliver|sa deliver)/i
      );
      if (specificProject) {
        const projectName = specificProject[0].toLowerCase();
        if (projectName.includes("cash") || projectName.includes("delivery")) {
          return `Cash On Delivery is an e-commerce platform Mandla built with cash on delivery functionality. It features a product catalog, shopping cart, user authentication, and responsive design. Built with Java, JavaScript, Maven, HTML, and CSS. Would you like to know about the other projects?`;
        } else if (projectName.includes("shop")) {
          return `Let's Shop is an online store platform featuring hot deals, product catalog, shopping cart, and newsletter subscription. It's built with HTML, CSS, JavaScript, and Bootstrap for a seamless shopping experience. Want to know more?`;
        } else if (projectName.includes("sa")) {
          return `SA-deliver is an e-commerce platform built with Java. It uses technologies like Java, JavaScript, Maven, and CI/CD for automated deployment. It's one of Mandla's recent projects showcasing his backend development skills. Interested in learning more?`;
        }
      }

      let response = "Mandla has worked on several exciting projects:\n\n";
      portfolioInfo.projects.forEach((project, index) => {
        response += `${index + 1}. **${project.name}** - ${
          project.description
        }\n`;
        response += `   Tech Stack: ${project.tech}\n\n`;
      });
      response += "Would you like more details about any specific project?";
      return response;
    }

    // Skills - detailed
    if (
      message.match(
        /skill|technology|tech|programming|language|framework|tool|proficient|expertise/
      )
    ) {
      if (message.match(/javascript|js/)) {
        return `Mandla is proficient in JavaScript (80%). He uses it for frontend development, building interactive web applications, and creating dynamic user interfaces. JavaScript is one of his core skills alongside HTML and CSS.`;
      }
      if (message.match(/java/)) {
        return `Mandla has strong Java skills (68%). He uses Java for backend development, building e-commerce platforms, and creating robust server-side applications. Java is essential for many of his projects.`;
      }
      if (message.match(/python/)) {
        return `Mandla is skilled in Python (80%). Python is great for data analysis, automation, and backend development. It's one of his preferred languages for various projects.`;
      }
      if (message.match(/docker/)) {
        return `Mandla has excellent Docker skills (100%)! Docker is crucial for containerization and DevOps. He uses it to package applications, manage dependencies, and deploy consistently across environments.`;
      }

      let response = "Mandla's technical skills include:\n\n";
      portfolioInfo.skills.forEach((skill) => {
        response += `• ${skill}\n`;
      });
      response +=
        "\nHe's particularly strong in web development (HTML, CSS, JavaScript), backend development (Java, Python), and DevOps (Docker, Linux). Want to know more about any specific technology?";
      return response;
    }

    // Education - detailed
    if (
      message.match(
        /education|school|academy|learn|study|degree|qualification|cosat|codespace|wethinkcode/
      )
    ) {
      if (message.match(/cosat/)) {
        return `COSAT High School is where Mandla completed his high school education from 2018 to 2022. It's the foundation of his academic journey before pursuing coding and development.`;
      }
      if (message.match(/codespace/)) {
        return `Codespace Academy is where Mandla learned coding and development in 2024. He completed a 6-month program there, gaining hands-on experience in software development.`;
      }
      if (message.match(/wethinkcode/)) {
        return `WeThinkCode is where Mandla continued his coding education in September 2024. It's a program focused on developing practical coding skills and preparing students for tech careers.`;
      }

      let response = "Mandla's educational background:\n\n";
      portfolioInfo.education.forEach((edu) => {
        response += `• **${edu.institution}** - ${edu.duration}\n`;
      });
      response +=
        "\nHe's continuously learning and growing his skills through various educational programs and projects.";
      return response;
    }

    // About - comprehensive
    if (
      message.match(
        /about|who|tell me|information|background|experience|introduce/
      )
    ) {
      return `Mandla Dyonase is a passionate developer with expertise in full-stack development, DevOps, and data analysis. He has experience building e-commerce platforms, working with various technologies like Java, JavaScript, Python, Docker, and modern web frameworks. 

He's currently learning and growing through projects and educational programs including Codespace Academy and WeThinkCode. Mandla enjoys solving complex problems and building practical applications.

Would you like to know more about his specific projects, skills, or experience?`;
    }

    // Interests
    if (message.match(/interest|hobby|passion|like|enjoy|love|what.*do/)) {
      return `Mandla's main interests include:

• **Data Analysis** - Working with data to extract meaningful insights and turning raw data into actionable intelligence

• **DevOps** - Configuring systems, debugging, and optimizing workflows to ensure smooth operations

• **Backend Development** - Building robust server-side applications and APIs

• **Problem Solving** - Tackling complex challenges and finding innovative solutions

Is there anything specific you'd like to know more about?`;
    }

    // Contact
    if (
      message.match(
        /contact|email|reach|get in touch|message|hire|available|work with/
      )
    ) {
      return `You can reach out to Mandla through the contact form on this portfolio! Just scroll down to the "Get In Touch" section and fill out the form with your name, email, subject, and message. He'll get back to you soon.

You can also check out his GitHub and LinkedIn profiles linked in the navigation menu. Is there anything else I can help you with?`;
    }

    // GitHub/LinkedIn
    if (message.match(/github|git|repository|repo|code/)) {
      return `Mandla's projects are available on GitHub. You can find links to his repositories in the Projects section of this portfolio. Each project card has a GitHub link where you can explore the code, see the technologies used, and check out the implementation details. Want to know about any specific project?`;
    }

    if (message.match(/linkedin|linked in|professional|network/)) {
      return `Mandla has a LinkedIn profile where you can connect with him professionally. You can find the link in the navigation menu or footer of this portfolio. Feel free to reach out for professional networking or collaboration opportunities!`;
    }

    // Thank you/bye
    if (message.match(/thank|thanks|bye|goodbye|see you|appreciate/)) {
      return `You're welcome! Feel free to come back if you have any more questions about Mandla's work, skills, or projects. Have a great day!`;
    }

    // Help
    if (message.match(/help|what.*can|what.*do|how.*help/)) {
      return `I can help you learn about:

• Mandla's **projects** - e-commerce platforms and applications he's built
• **Skills & Technologies** - programming languages, frameworks, and tools he uses
• **Education** - his learning journey and educational background
• **Experience** - his professional background and interests
• **Contact** - how to reach out to him

Just ask me anything! For example: "Tell me about his projects" or "What skills does he have?"`;
    }

    // Default responses - more conversational
    const defaultResponses = [
      "That's interesting! I can help you learn more about Mandla's projects, skills, education, or experience. What would you like to know?",
      "I'm here to help! You can ask me about Mandla's work, technical skills, education background, or projects. What interests you?",
      "Feel free to ask me about Mandla's portfolio, projects, skills, or anything else about his professional background!",
      "I'd be happy to help! Try asking about projects, skills, education, or experience. What would you like to know?",
      "Sure! I can tell you about Mandla's projects, technical skills, education, or his experience. What would you like to learn about?",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
});
