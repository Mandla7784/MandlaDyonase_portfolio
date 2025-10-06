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
