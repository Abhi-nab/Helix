// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("./header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Header load error:", err));
  
    // Load footer
    fetch("./footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Footer load error:", err));
  });