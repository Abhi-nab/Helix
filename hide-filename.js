// hide-filename.js
(function() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('AboutUs.html') || path.endsWith('services.html')) {
      // Replace the file name with a clean URL.
      const newPath = path.replace(/(index\.html|AboutUs\.html|services\.html)$/, '');
      window.history.replaceState(null, '', newPath);
    }
  })();