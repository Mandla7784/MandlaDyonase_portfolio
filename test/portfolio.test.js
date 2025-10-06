beforeEach(() => {
  document.body.innerHTML = `
    <div id="about">About me</div>
    <div id="skills">Skills</div>
    <div id="projects">Projects</div>
    <div id="contact">Contact</div>
  `;
});

test("Portfolio contains About section", () => {
  document.body.innerHTML = `
        <div id="about">About me</div>
    `;
  const about = document.getElementById("about");
  expect(about).not.toBeNull();
});

test("Portfolio containes skills section", () => {
  document.body.innerHTML -
    `
       
       <div id="skills">Skills</div>
    
    `;
});
