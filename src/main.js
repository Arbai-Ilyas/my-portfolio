import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

document.addEventListener("contextmenu", (e) => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
  }
});
let longPressTimer;
document.addEventListener(
  "touchstart",
  (e) => {
    if (e.target instanceof HTMLImageElement) {
      longPressTimer = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }
  },
  { passive: false },
);
document.addEventListener("touchend", () => {
  clearTimeout(longPressTimer);
});
document.addEventListener("touchmove", () => {
  clearTimeout(longPressTimer);
});
document.addEventListener("touchcancel", () => {
  clearTimeout(longPressTimer);
});

createApp(App).mount("#app");
