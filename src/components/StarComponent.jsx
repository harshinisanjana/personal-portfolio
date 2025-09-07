import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect if dark mode is active
    const checkDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDark) return;

    generateStars(300); 

    const interval = setInterval(() => {
      addShootingStar();
    }, 250); // slightly faster shooting stars

    return () => clearInterval(interval);
  }, [isDark]);

  const generateStars = (count) => {
    const newStars = [];
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: `static-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // small twinkling dots
      });
    }
    setStars(newStars);
  };

  const addShootingStar = () => {
    const newStar = {
      id: `shooting-${Math.random().toString(36).substr(2, 9)}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 2 + 2.5,
      height: Math.random() * 60 + 60,
      shooting: true,
    };

    setStars((prev) => [...prev, newStar]);

    setTimeout(() => {
      setStars((prev) => prev.filter((star) => star.id !== newStar.id));
    }, (newStar.duration + 0.5) * 1000);
  };

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) =>
        star.shooting ? (
          <div
            key={star.id}
            className="star shooting"
            style={{
              left: star.x + "%",
              top: star.y + "%",
              animationDuration: `${star.duration}s`,
              height: `${star.height}px`,
            }}
          />
        ) : (
          <div
            key={star.id}
            className="star twinkle"
            style={{
              left: star.x + "%",
              top: star.y + "%",
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        )
      )}
    </div>
  );
};
