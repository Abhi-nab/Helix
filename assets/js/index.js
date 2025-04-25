
    document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("assets/html/header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Header load error:", err));
  
    // Load footer
    fetch("assets/html/footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Footer load error:", err));
  });
  
    // Preloader
  
    window.addEventListener('load', () => {
      const pre = document.getElementById('preloader');
      pre.classList.add('fade-out');
      pre.addEventListener('transitionend', () => pre.remove());
    });
 
 