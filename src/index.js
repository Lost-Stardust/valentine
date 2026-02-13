import "./styles.css";

NodeList.prototype.animate = function (keyframes, options) {
  this.forEach((el, i) => {
    let delay = options.delay;
    if (options.stagger) delay = options.delay + options.stagger * i;
    el.animate(keyframes, {
      ...options,
      delay,
    });
  });
};

const colors = [
  "#ffffff",
  "#ffd5f2",
  "#ffb3e6",
  "#ff92d9",
  "#ff70cc",
  "#ff4dbf",
  "#ff33b3",
  "#e61999",
  "#cc0080",
  "#b80066",
];
let rainbowEnd = "";
let rainbowEnd2 = "";
colors.reverse().forEach((c, i) => {
  rainbowEnd += `,0 ${(i - 5) * 5}vh ${i * 2}px ${c}`;
});
colors.forEach((c, i) => {
  rainbowEnd2 += `,0 ${(i - 5) * -5}vh ${i * 2}px ${c}`;
});

rainbowEnd = rainbowEnd.substring(1);
rainbowEnd2 = rainbowEnd2.substring(1);

document.querySelectorAll("h1 span").animate(
  {
    textShadow: [rainbowEnd, rainbowEnd2],
  },
  {
    duration: 3000,
    stagger: 300,
    delay: -1000,
    iterations: Infinity,
    easing: "cubic-bezier(0.3, 0, 0.7, 1)",
    direction: "alternate",
    fill: "both",
  },
);

console.log("im working");
