<template>
  <span
    class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transitionEffect"
    :class="open
      ? 'bg-primaryTheme border-primaryTheme rotate-45'
      : 'bg-secondaryTheme border-primaryTheme/15'"
  >
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <line
        x1="7" y1="1" x2="7" y2="13"
        :stroke="open ? '#FFFAEC' : '#1D2F21'"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <line
        x1="1" y1="7" x2="13" y2="7"
        :stroke="open ? '#FFFAEC' : '#1D2F21'"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
  </span>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
</script>