const toggleBtn = document.getElementById("toggleTheme");
const darkIconContainer = document.getElementById("darkIcon");
const lightIconContainer = document.getElementById("lightIcon");
const userPreference = "preference";
const menuBtn = document.getElementById("toggleMenu");
const menu = document.getElementById("mobileMenu");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
const setTheme = (option) => {
  localStorage.setItem(userPreference, option);
};
const themeHandler = () => {
  document.documentElement.classList.toggle("dark");
  const element = document.documentElement.classList.contains("dark");
  if (element) {
    setTheme("dark");
    changeThemeIcon("dark");
  } else {
    setTheme("light");
    changeThemeIcon("light");
  }
};

const mobileMenuHandler = () => {
  menu.classList.toggle("hidden");
};

const userColorScheme = () => {
  const userTheme = localStorage.getItem(userPreference);
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    changeThemeIcon("dark");
  } else {
    document.documentElement.classList.remove("dark");
    changeThemeIcon("light");
  }
};
const changeThemeIcon = (option) => {
  if (option === "dark") {
    lightIconContainer.style.display = "block";
    darkIconContainer.style.display = "none";
  } else {
    lightIconContainer.style.display = "none";
    darkIconContainer.style.display = "block";
  }
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

userColorScheme();
toggleBtn.addEventListener("click", themeHandler);
menuBtn.addEventListener("click", mobileMenuHandler);
window.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);
