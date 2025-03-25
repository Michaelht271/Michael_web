document.addEventListener("DOMContentLoaded", function () {
  // Fetch HEADER
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      highlightActiveLink(); // Gọi hàm đánh dấu menu sau khi header đã gắn vào DOM
    });

  // Fetch FOOTER
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#8B7355",
        secondary: "#A69782",
        accent: "#D2B28C",
        dark: "#4A3C2A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
};

function highlightActiveLink() {
  const currentURL = new URL(window.location.href);
  const navLinks = document.querySelectorAll(".nav-link");
  console.log("currentURL.pathname =", currentURL.pathname);

  navLinks.forEach((link) => {
    const linkURL = new URL(link.getAttribute("href"), currentURL);
    console.log(
      "Link =",
      link.getAttribute("href"),
      "| linkURL.pathname =",
      linkURL.pathname
    );

    if (
      currentURL.pathname === linkURL.pathname &&
      linkURL.hash === "" && // CHỈ match khi KHÔNG có hash
      (currentURL.pathname !== "/" || linkURL.pathname.endsWith("index.html"))
    ) {
      link.classList.remove("underline", "text-accent");
      link.classList.add("font-extrabold", "text-white");
    }
  });
}
