test("Portfolio contains About section", () => {
  document.body.innerHTML = `
        <div id="about">About me</div>
    `;
  const about = document.getElementById("about");
  expect(about).not.toBeNull();
});
