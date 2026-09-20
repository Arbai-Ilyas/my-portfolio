<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Motion } from "motion-v";

import img1 from "../assets/my-image1.jpeg";
import img2 from "../assets/my-image2.jpeg";
import img3 from "../assets/my-image3.jpeg";
import img4 from "../assets/my-image4.jpeg";
import img5 from "../assets/my-image5.jpeg";
import img6 from "../assets/my-image6.jpeg";
import img7 from "../assets/my-image7.jpeg";
import img8 from "../assets/my-image8.jpeg";
import img9 from "../assets/my-image9.jpeg";
import img10 from "../assets/my-image10.jpeg";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const AUTO_PLAY_INTERVAL = 3000;

const step = ref(0);
const isPaused = ref(false);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024,
);

let interval = null;
let touchStartX = 0;
let touchEndX = 0;

const currentIndex = computed(
  () => ((step.value % IMAGES.length) + IMAGES.length) % IMAGES.length,
);

const nextStep = () => step.value++;
const previousStep = () => step.value--;

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  interval = setInterval(() => {
    if (!isPaused.value) {
      nextStep();
    }
  }, AUTO_PLAY_INTERVAL);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (interval) clearInterval(interval);
});

// Touch handlers for mobile & tablet swipe support
const handleTouchStart = (e) => {
  isPaused.value = true;
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 40) nextStep();
  if (touchEndX - touchStartX > 40) previousStep();
  isPaused.value = false;
};

const getCardStatus = (index) => {
  const len = IMAGES.length;
  let diff = index - currentIndex.value;

  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;

  if (diff === 0) return "active";
  if (diff === -1) return "prev";
  if (diff === 1) return "next";

  return "hidden";
};

const cardAnimation = (index) => {
  const status = getCardStatus(index);
  const isMobile = windowWidth.value < 640;
  const isTablet = windowWidth.value >= 640 && windowWidth.value < 1024;

  let offset = "0%";
  if (status === "prev") {
    offset = isMobile ? "-60%" : isTablet ? "-45%" : "-60%";
  } else if (status === "next") {
    offset = isMobile ? "60%" : isTablet ? "45%" : "60%";
  }

  return {
    x: offset,
    scale: status === "active" ? 1 : status === "hidden" ? 0.6 : 0.85,
    opacity: status === "active" ? 1 : status === "hidden" ? 0 : 0.5,
    rotate: status === "prev" ? -3 : status === "next" ? 3 : 0,
    zIndex: status === "active" ? 20 : status === "hidden" ? 0 : 10,
  };
};
</script>

<template>
  <div
    class="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Fluid container sizing that adapts directly to the parent dimensions -->
    <div class="relative flex aspect-4/5 w-[60%] items-center justify-center">
      <Motion
        v-for="(image, index) in IMAGES"
        :key="image"
        :initial="false"
        :animate="cardAnimation(index)"
        :transition="{
          type: 'spring',
          stiffness: 260,
          damping: 25,
          mass: 0.8,
        }"
        class="absolute inset-0 origin-center overflow-hidden rounded-4xl border-4 border-white bg-white md:rounded-[2.8rem] md:border-8 dark:border-neutral-950 dark:bg-neutral-950"
      >
        <img
          :src="image"
          alt=""
          class="h-full w-full object-cover transition-all duration-700"
          :class="
            getCardStatus(index) === 'active'
              ? 'grayscale-0 blur-0'
              : 'grayscale blur-[2px] brightness-75'
          "
        />
      </Motion>
    </div>
  </div>
</template>
