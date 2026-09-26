<script setup>
import Nav from './components/Nav.vue';
import Technologies from './components/Technologies.vue';
import Carousel from './components/Carousel.vue';
import { siInstagram, siMinutemailer } from 'simple-icons';
</script>

<template>
  <Nav />

  <!-- About -->
  <section
    id="about"
    class="max-[375px]:h-full max-[375px]:scroll-mt-20 h-[75svh] flex flex-col md:flex-row w-full items-center max-[375px]:py-5 py-10 px-10 md:px-20 xl:px-30 max-[375px]:gap-5 gap-10"
  >
    <!-- Hero Content -->
    <div class="w-full md:w-1/2">
      <div class="flex justify-between items-center w-full mb-5">
        <p
          class="max-[375px]:text-[7px] text-[10px] md:text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500"
        >
          Ilyas Arbai
        </p>

        <div
          class="flex items-center gap-3 font-mono max-[375px]:text-[7px] text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] text-emerald-400"
        >
          <span class="h-px w-8 bg-emerald-400"></span>
          Full-Stack Developer
        </div>
      </div>

      <!-- Main Heading -->
      <h1
        class="max-w-3xl font-bold leading-none tracking-[-0.04em] text-white max-[375px]:text-[20px] text-[30px] sm:text-5xl xl:text-6xl"
      >
        I build with code.
        <br />
        <span class="text-neutral-500">I grow beyond it.</span>
      </h1>

      <!-- Description -->
      <p
        class="max-[375px]:mt-3 mt-6 max-w-xl max-[375px]:text-[8px] text-[12px] sm:text-base max-[375px]:leading-2.5 leading-5 text-neutral-400 sm:leading-6"
      >
        I’m a full-stack developer who enjoys turning ideas into useful digital experiences. But
        software is only one part of who I am. Exploring, learning, meeting people, and taking on
        new challenges shape the way I think, create, and solve problems.
      </p>

      <!-- Small statement -->
      <p
        class="max-[375px]:mt-3 mt-5 max-[375px]:text-[8px] text-[10px] font-medium text-neutral-300"
      >
        <span class="text-emerald-400">Code</span> is what I build with.
        <span class="text-neutral-500">Curiosity</span> is what drives me.
      </p>
    </div>

    <!-- Personal Carousel -->
    <div class="flex w-full justify-center md:w-1/2 md:justify-end">
      <Carousel />
    </div>
  </section>

  <!-- Technologies -->
  <section class="border-t border-neutral-900">
    <Technologies />
  </section>

  <!-- Projects -->
  <section
    id="projects"
    class="border-t border-neutral-900 px-10 md:px-20 xl:px-30 py-15 max-[375px]:h-full h-[90vh]"
  >
    <!-- Section Header -->
    <div class="w-full">
      <p
        class="max-[375px]:text-[10px] font-mono text-sm font-medium uppercase tracking-[0.2em] text-emerald-400"
      >
        Selected Work
      </p>

      <div class="flex justify-between w-full">
        <h2
          class="my-3 text-3xl font-bold tracking-tight text-white max-[375px]:text-[20px] sm:text-4xl"
        >
          Projects
        </h2>

        <a
          href="https://github.com/Ilyas-Arbai1"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-emerald-500 max-[375px]:px-3 px-5 max-[375px]:h-7 h-10 font-semibold shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-500/30 active:scale-95 text-white max-[375px]:text-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="max-[375px]:h-4 max-[375px]:w-4 h-5 w-5"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>

          GitHub
        </a>
      </div>

      <p
        class="max-[375px]:text-[8px] text-base leading-7 text-neutral-400 max-w-2xl max-[375px]:leading-2.5"
      >
        A selection of applications and systems I've built while developing my full-stack
        experience.
      </p>
    </div>

    <!-- Projects will go here -->
    <div
      class="my-10 rounded-2xl border border-dashed border-neutral-800 p-10 text-center h-[50vh]"
    >
      <p class="text-sm text-neutral-500">Projects coming soon.</p>
    </div>
  </section>

  <!-- Contact -->
  <section
    id="contact"
    class="relative w-full overflow-hidden border-t border-neutral-900 px-10 md:px-20 xl:px-30 py-5 md:py-15 h-[75vh]"
  >
    <!-- Top label -->
    <div class="max-[375px]:mb-4 mb-8 flex items-center gap-3">
      <span class="h-px w-10 bg-emerald-400"></span>

      <p
        class="font-mono max-[375px]:text-[10px] text-xs font-medium uppercase tracking-[0.25em] text-emerald-400"
      >
        Get in touch
      </p>
    </div>

    <!-- Main content -->
    <div class="flex flex-col max-[375px]:gap-5 gap-12 md:flex-row md:items-end md:justify-between">
      <div class="max-w-3xl">
        <h2
          class="max-[375px]:text-[20px] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl"
        >
          Have an idea?
          <br />
          <span class="text-neutral-500">Let's build it.</span>
        </h2>

        <p
          class="max-[375px]:mt-3 mt-5 text-[15px] leading-5 md:leading-7 text-neutral-400 md:text-lg max-w-xl max-[375px]:leading-2.5 max-[375px]:text-[8px]"
        >
          I'm open to new opportunities, freelance projects, collaborations, and interesting ideas.
          If you think we could build something useful together, I'd be happy to hear from you.
        </p>
      </div>

      <!-- Contact actions -->
      <div class="flex flex-col gap-4">
        <!-- Email -->
        <a
          href="mailto:arbai.ilyas.dev@gmail.com"
          class="group inline-flex h-[58px] w-full items-center justify-between gap-8 rounded-2xl max-[375px]:h-[42px] max-[375px]:text-[10px] bg-emerald-500 px-6 py-4 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-emerald-500/20 whitespace-nowrap"
        >
          <span class="flex items-center gap-3">
            <svg
              :viewBox="siMinutemailer.svg.viewBox"
              class="h-6 w-6 shrink-0 text-black transition-colors"
              fill="currentColor"
              aria-hidden="true"
            >
              <path :d="siMinutemailer.path" />
            </svg>

            <span>Send me an email</span>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3.5 10a.75.75 0 0 1 .75-.75h9.69L10.22 5.53a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H4.25A.75.75 0 0 1 3.5 10Z"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/ilyas_arbai1"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex h-[58px] w-full items-center justify-between gap-8 rounded-2xl border border-neutral-800 bg-neutral-950/50 px-6 py-4 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/5 hover:text-white max-[375px]:h-[42px] max-[375px]:text-[10px]"
        >
          <span class="flex items-center gap-3">
            <svg
              :viewBox="siInstagram.svg.viewBox"
              class="h-6 w-6 shrink-0 text-neutral-400 transition-colors group-hover:text-pink-500"
              fill="currentColor"
              aria-hidden="true"
            >
              <path :d="siInstagram.path" />
            </svg>

            <span>Instagram</span>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 shrink-0 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-300"
          >
            <path
              d="M5.22 14.78a.75.75 0 0 0 1.06 0L14 7.06v5.69a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h5.69l-6.72 6.72a.75.75 0 0 0 0 1.06Z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Bottom information -->
    <div
      class="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-neutral-900 pt-6"
    >
      <div class="flex items-center gap-3">
        <span
          class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"
        ></span>

        <p class="text-sm text-neutral-400">Available for new opportunities</p>
      </div>

      <p class="font-mono text-xs text-neutral-600">Let's make something meaningful.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer
    class="w-full border-t border-neutral-900 px-10 md:px-20 xl:px-30 h-[15vh] flex flex-row justify-between items-center text-sm text-neutral-600 text-center"
  >
    <p>
      © {{ new Date().getFullYear() }}
      <span class="text-neutral-400">Ilyas Arbai</span>
    </p>

    <p class="font-mono text-xs">
      Built with
      <span class="text-emerald-400">Vue.js</span>
    </p>
  </footer>
</template>
