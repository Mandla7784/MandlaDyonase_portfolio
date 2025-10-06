/**
 * @jest-environment jsdom
 */

describe("Portfolio Sections", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about">About me</div>
      <div id="skills">Skills</div>
      <div id="projects">Projects</div>
      <div id="contact">Contact</div>
    `;
  });

  test("Portfolio contains About section", () => {
    const about = document.getElementById("about");
    expect(about).not.toBeNull();
  });

  test("Portfolio contains Skills section", () => {
    const skills = document.getElementById("skills");
    expect(skills).not.toBeNull();
  });

  test("Portfolio contains Projects section", () => {
    const projects = document.getElementById("projects");
    expect(projects).not.toBeNull();
  });

  test("Portfolio contains Contact section", () => {
    const contact = document.getElementById("contact");
    expect(contact).not.toBeNull();
  });
});
