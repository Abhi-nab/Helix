// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("Header_And_Footer/header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Header load error:", err));
  
    // Load footer
    fetch("Header_And_Footer/footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Footer load error:", err));
  });