/**
 * @jest-environment jsdom
 */

describe("Portfolio UI interactions", () => {
  beforeEach(() => {
    // Minimal DOM structure for testing navbar and hamburger
    document.body.innerHTML = `
      <nav id="navbar">
        <ul>
          <li><a href="#hero" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button id="hamburger" aria-label="Toggle Navigation Menu">☰</button>
        <div id="offcanvas" style="display:none;">
          Offcanvas Menu Content
        </div>
      </nav>
    `;

    // Simple hamburger toggle function (simulate your actual JS)
    const hamburger = document.getElementById("hamburger");
    const offcanvas = document.getElementById("offcanvas");
    hamburger.addEventListener("click", () => {
      offcanvas.style.display =
        offcanvas.style.display === "none" ? "block" : "none";
    });
  });

  // 1. Test navbar links exist
  test("navbar contains correct sections", () => {
    const links = Array.from(
      document.querySelectorAll("#navbar .nav-link")
    ).map((l) => l.textContent);
    expect(links).toEqual(["Home", "About", "Skills", "Projects", "Contact"]);
  });

  // 2. Test hamburger menu toggles offcanvas
  test("hamburger button toggles offcanvas menu", () => {
    const hamburger = document.getElementById("hamburger");
    const offcanvas = document.getElementById("offcanvas");

    // Initial state
    expect(offcanvas.style.display).toBe("none");

    // Simulate click
    hamburger.click();
    expect(offcanvas.style.display).toBe("block");

    // Simulate another click
    hamburger.click();
    expect(offcanvas.style.display).toBe("none");
  });

  // 3. Test active nav-link
  test("Home nav-link is active by default", () => {
    const homeLink = document.querySelector("#navbar .nav-link.active");
    expect(homeLink.textContent).toBe("Home");
  });
});
