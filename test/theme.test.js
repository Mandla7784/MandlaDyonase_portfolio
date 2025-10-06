/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = `
    <button id="switchTheme"></button>
  `;
  localStorage.clear();
});

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
}

test("sets body data-bs-theme attribute", () => {
  setTheme("dark");
  expect(document.body.getAttribute("data-bs-theme")).toBe("dark");

  setTheme("light");
  expect(document.body.getAttribute("data-bs-theme")).toBe("light");
});

test("saves theme to localStorage", () => {
  setTheme("dark");
  expect(localStorage.getItem("theme")).toBe("dark");

  setTheme("light");
  expect(localStorage.getItem("theme")).toBe("light");
});

test("updates switchTheme button icon", () => {
  const btn = document.getElementById("switchTheme");

  setTheme("dark");
  expect(btn.innerHTML).toBe('<i class="bi bi-sun-fill"></i>');

  setTheme("light");
  expect(btn.innerHTML).toBe('<i class="bi bi-moon-stars-fill"></i>');
});
