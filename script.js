document.addEventListener('DOMContentLoaded', () => {
    const sections = {
      home: document.querySelector("#home"),
      login: document.querySelector("#login"),
      about: document.querySelector("#about"),
      store: document.querySelector("#store"),
      courses: document.querySelector("#courses"),
      account: document.querySelector("#account"),
    };
  
    const showSection = (section) => {
      for (const key in sections) {
        sections[key].style.display = key === section ? "block" : "none";
      }
    };
  
    document.getElementById("logoLink").addEventListener("click", () => showSection("home"));
    document.getElementById("homeLink").addEventListener("click", () => showSection("home"));
    document.getElementById("aboutLink").addEventListener("click", () => showSection("about"));
    document.getElementById("storeLink").addEventListener("click", () => showSection("store"));
    document.getElementById("coursesLink").addEventListener("click", () => showSection("courses"));
    document.getElementById("loginBtn").addEventListener("click", () => showSection("login"));
  });
  