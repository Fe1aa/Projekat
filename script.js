const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const endValue = parseFloat(target.textContent);
      const isDecimal = target.textContent.includes(".");
      const isPercent = target.textContent.includes("%");
      const duration = 1500;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += endValue / steps;
        if (current >= endValue) {
          current = endValue;
          clearInterval(timer);
        }
        target.textContent =
          (isDecimal ? current.toFixed(2) : Math.floor(current)) +
          (isPercent ? "%" : "");
      }, stepTime);

      observer.unobserve(target); // only animate once
    }
  });
});

counters.forEach((counter) => observer.observe(counter));
