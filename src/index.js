import "./styles.css";
import letter1 from "./imgs/valentine letter.png";
import letter2 from "./imgs/valentine letter2.png";
import music from "./imgs/someonetospendtimewithinstrumental.mp3";

const valentineMusic = new Audio(music);

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

const colors2 = [
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
const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINK = "http://www.w3.org/1999/xlink";

let heartsRy = [];

function useTheHeart(n) {
  let use = document.createElementNS(SVG_NS, "use");
  use.n = n;
  use.setAttributeNS(SVG_XLINK, "xlink:href", "#heart");
  use.setAttributeNS(null, "transform", `scale(${use.n})`);
  use.setAttributeNS(null, "fill", colors2[n % colors2.length]);
  use.setAttributeNS(null, "x", -69);
  use.setAttributeNS(null, "y", -69);
  use.setAttributeNS(null, "width", 138);
  use.setAttributeNS(null, "height", 138);

  heartsRy.push(use);
  //   hearts.appendChild(use);
}

for (let n = 18; n >= 0; n--) {
  useTheHeart(n);
}

function Frame() {
  window.requestAnimationFrame(Frame);
  for (let i = 0; i < heartsRy.length; i++) {
    if (heartsRy[i].n < 18) {
      heartsRy[i].n += 0.01;
    } else {
      heartsRy[i].n = 0;
      hearts.appendChild(heartsRy[i]);
    }
    heartsRy[i].setAttributeNS(null, "transform", `scale(${heartsRy[i].n})`);
  }
}

// Start the heart phase 2 heart pattern
// Frame();

// Assign image to the img element
let img1 = document.querySelector(".letter1");
img1.src = letter1;
// let img2 = document.querySelector(".letter2");
// img2.src = letter2;

// Assign listener to img1 and transition to phase 2
img1.addEventListener("click", () => {
  let phase2 = document.querySelector(".open");
  phase2.style.display = "block";
  Frame();
  setTimeout(() => {
    img1.src = letter2;
    heartsRy = [];
    document.querySelector("h1").style.display = "none";
    phase2.style.zIndex = "-10";
  }, 10000);
});

valentineMusic.volume = 1;
valentineMusic.play();
valentineMusic.loop = true;
