import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

document.addEventListener("contextmenu", (e) => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
  }
});

createApp(App).mount("#app");
