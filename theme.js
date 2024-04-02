const toggleThemeBtn = document.getElementById("toggleTheme");
const darkThemeIcon = document.getElementById("darkIcon");
const lightThemeIcon = document.getElementById("lightIcon");
const userPreferenceKey = "preference";
const menuBtn = document.getElementById("toggleMenu");
const menu = document.getElementById("mobileMenu");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

const setTheme = (theme) => {
  localStorage.setItem(userPreferenceKey, theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    lightThemeIcon.style.display = "block";
    darkThemeIcon.style.display = "none";
  } else {
    document.documentElement.classList.remove("dark");
    lightThemeIcon.style.display = "none";
    darkThemeIcon.style.display = "block";
  }
};

const toggleTheme = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const newTheme = isDarkMode ? "light" : "dark";
  setTheme(newTheme);
};

const initializeTheme = () => {
  const storedUserPreference = localStorage.getItem(userPreferenceKey);
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initialTheme = storedUserPreference || systemPreference;

  setTheme(initialTheme);
};
const mobileMenuHandler = () => {
  menu.classList.toggle("hidden");
};
const handleScroll = () => {
  if (window.scrollY >= 500) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

initializeTheme();
menuBtn.addEventListener("click", mobileMenuHandler);
toggleThemeBtn.addEventListener("click", toggleTheme);
window.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);
