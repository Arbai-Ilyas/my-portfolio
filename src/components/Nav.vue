<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-xl flex items-center justify-between px-10 md:px-20 xl:px-30 h-[10vh]"
  >
    <a
      href="#"
      class="font-mono text-sm xl:text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
    >
      <span class="text-emerald-400">&lt;</span>
      AlgorithmeGenius
      <span class="text-emerald-400">/&gt;</span>
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a
        href="#about"
        class="group relative py-1 text-neutral-300 transition-colors hover:text-white"
      >
        About Me
        <span
          class="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-x-100"
        ></span>
      </a>

      <a
        href="#projects"
        class="group relative py-1 text-neutral-300 transition-colors hover:text-white"
      >
        Projects
        <span
          class="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-x-100"
        ></span>
      </a>

      <a
        href="#contact"
        class="rounded-full bg-emerald-500 px-5 py-2.5 font-semibold shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-500/30 active:scale-95 text-white"
      >
        Contact
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button
      type="button"
      aria-label="Toggle navigation menu"
      :aria-expanded="isMenuOpen"
      class="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 text-white transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-800 active:scale-90 md:hidden"
      @click="toggleMenu"
    >
      <span
        class="absolute h-px w-5 rounded-full bg-white transition-all duration-300"
        :class="isMenuOpen ? 'rotate-45' : '-translate-y-1.5'"
      ></span>

      <span
        class="absolute h-px w-5 rounded-full bg-white transition-all duration-200"
        :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
      ></span>

      <span
        class="absolute h-px w-5 rounded-full bg-white transition-all duration-300"
        :class="isMenuOpen ? '-rotate-45' : 'translate-y-1.5'"
      ></span>
    </button>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="isMenuOpen"
        class="absolute left-0 top-full w-full border-b border-neutral-800/70 bg-neutral-950/95 px-5 pb-5 pt-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden"
      >
        <div
          class="flex flex-col gap-1 rounded-2xl border border-neutral-800/70 bg-neutral-900/60 p-2"
        >
          <a
            href="#about"
            class="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-300 transition-all duration-200 hover:bg-neutral-800 hover:text-white"
            @click="closeMenu"
          >
            <span>About Me</span>
            <span
              class="text-neutral-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-400"
            >
              →
            </span>
          </a>

          <a
            href="#projects"
            class="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-300 transition-all duration-200 hover:bg-neutral-800 hover:text-white"
            @click="closeMenu"
          >
            <span>Projects</span>
            <span
              class="text-neutral-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-400"
            >
              →
            </span>
          </a>

          <a
            href="#contact"
            class="mt-1 flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]"
            @click="closeMenu"
          >
            Contact
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
