<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import {
  siVuedotjs,
  siReact,
  siNodedotjs,
  siExpress,
  siLaravel,
  siPhp,
  siPrisma,
  siDocker,
  siGit,
  siGithub,
  siOpenjdk,
  siTailwindcss,
  siSocketdotio,
} from 'simple-icons';

const stack = [
  { name: 'Vue.js', icon: siVuedotjs },
  { name: 'React.js', icon: siReact },
  { name: 'React Native', icon: siReact },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express.js', icon: siExpress },
  { name: 'PHP', icon: siPhp },
  { name: 'Laravel', icon: siLaravel },
  { name: 'Java', icon: siOpenjdk, color: '#ED8B00' },
  { name: 'Prisma', icon: siPrisma },
  { name: 'Docker', icon: siDocker },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Tailwindscss', icon: siTailwindcss },
  { name: 'Socket.io', icon: siSocketdotio },
];

const brandColor = (hex) => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.3 ? '#e5e5e5' : `#${hex}`;
};

const items = stack.map((t) => ({
  name: t.name,
  path: t.icon.path,
  color: brandColor(t.icon.hex),
}));

const COPIES = 4;

const marquee = ref(null);
const track = ref(null);

let mm;

onMounted(() => {
  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const loop = gsap.to(track.value, {
      xPercent: -100 / COPIES,
      duration: 35,
      ease: 'none',
      repeat: -1,
    });

    const slow = () =>
      gsap.to(loop, {
        timeScale: 0,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: true,
      });
    const resume = () =>
      gsap.to(loop, {
        timeScale: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        overwrite: true,
      });

    const el = marquee.value;
    el.addEventListener('mouseenter', slow);
    el.addEventListener('mouseleave', resume);

    // gsap.matchMedia calls this when the query stops matching or on unmount.
    return () => {
      el.removeEventListener('mouseenter', slow);
      el.removeEventListener('mouseleave', resume);
    };
  });
});

onBeforeUnmount(() => mm?.revert());
</script>

<template>
  <!-- Technologies -->
  <section
    class="w-full border-y border-neutral-800/60 bg-neutral-950 flex flex-col justify-center max-[375px]:py-3 max-[375px]:h-full h-[15vh]"
    aria-labelledby="tech-heading"
  >
    <h2
      id="tech-heading"
      class="mb-8 text-center text-sm font-medium tracking-wide text-neutral-500"
    >
      Technologies I work with
    </h2>

    <div ref="marquee" class="relative overflow-hidden">
      <!-- Edge fades -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 from-neutral-950 to-transparent sm:w-40"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 from-neutral-950 to-transparent sm:w-40"
        aria-hidden="true"
      ></div>

      <!-- Track: with reduced motion, it becomes a static, wrapped list -->
      <div
        ref="track"
        class="flex w-max will-change-transform motion-reduce:w-full motion-reduce:justify-center"
      >
        <ul
          v-for="copy in COPIES"
          :key="copy"
          class="flex shrink-0 items-center gap-14 pr-14 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-6 motion-reduce:pr-0"
          :class="{ 'motion-reduce:hidden': copy > 1 }"
          :role="copy === 1 ? 'list' : 'presentation'"
          :aria-hidden="copy > 1 ? 'true' : undefined"
        >
          <li
            v-for="tech in items"
            :key="tech.name"
            class="tech group flex items-center gap-3 text-neutral-500 transition-colors duration-300 hover:text-neutral-100"
            :style="{ '--brand': tech.color }"
          >
            <svg
              class="max-[375px]:h-5 max-[375px]:w-5 h-8 w-8 shrink-0 fill-current transition-colors duration-300 group-hover:text-(--brand)"
              viewBox="0 0 24 24"
              role="img"
              :aria-label="tech.name"
            >
              <path :d="tech.path" />
            </svg>
            <span class="whitespace-nowrap text-base font-medium">
              {{ tech.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
