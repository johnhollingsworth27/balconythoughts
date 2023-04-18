const cssFiles = [
    "styles/mobirise2.css",
    "styles/bootstrap.min.css",
    "styles/bootstrap-grid.min.css",
    "styles/bootstrap-reboot.min.css",
    "styles/gdpr-styles.css",
    "styles/style.css",
    "styles/styles.css",
    "styles/style.css",
    "styles/mbr-additional.css",
  ];
  
  cssFiles.forEach((file) => {
    const link = document.createElement("link");
    link.href = file;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
  });
  