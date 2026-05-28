const d = new Date();

document.getElementById("footer").textContent =
  `© ${d.getFullYear()} | Antonio J. Saucedo | Idaho`;

const images = document.querySelectorAll("img[data-src]");

const loadImage = (image) => {
  image.src = image.dataset.src;
  image.onload = () => image.removeAttribute("data-src");
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadImage(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 1, rootMargin: "0px 0px 50px 0px" },
  );

  images.forEach((img) => observer.observe(img));
} else {
  images.forEach(loadImage);
}
