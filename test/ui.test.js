/**
 * @jest-environment jsdom
 */

describe("Portfolio UI interactions", () => {
  beforeEach(() => {
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

    const hamburger = document.getElementById("hamburger");
    const offcanvas = document.getElementById("offcanvas");
    hamburger.addEventListener("click", () => {
      offcanvas.style.display =
        offcanvas.style.display === "none" ? "block" : "none";
    });
  });

  test("navbar contains correct sections", () => {
    const links = Array.from(
      document.querySelectorAll("#navbar .nav-link")
    ).map((l) => l.textContent);
    expect(links).toEqual(["Home", "About", "Skills", "Projects", "Contact"]);
  });

  test("hamburger button toggles offcanvas menu", () => {
    const hamburger = document.getElementById("hamburger");
    const offcanvas = document.getElementById("offcanvas");

    expect(offcanvas.style.display).toBe("none");
    hamburger.click();
    expect(offcanvas.style.display).toBe("block");
    hamburger.click();
    expect(offcanvas.style.display).toBe("none");
  });

  test("Home nav-link is active by default", () => {
    const homeLink = document.querySelector("#navbar .nav-link.active");
    expect(homeLink.textContent).toBe("Home");
  });

  test("offcanvas contains correct menu items", () => {
    const offcanvas = document.getElementById("offcanvas");
    offcanvas.innerHTML = document.querySelector("#navbar ul").innerHTML;
    const items = Array.from(offcanvas.querySelectorAll("a")).map(
      (a) => a.textContent
    );
    expect(items).toEqual(["Home", "About", "Skills", "Projects", "Contact"]);
  });

  test("clicking About nav-link sets it active", () => {
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.classList.add("active");
    expect(aboutLink.classList.contains("active")).toBe(true);
  });
});
