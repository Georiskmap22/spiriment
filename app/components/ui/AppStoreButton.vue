<template>
  <component
    :is="disabled ? 'div' : 'a'"
    v-bind="!disabled ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}"
    class="relative basic-flex justify-between px-5 py-4 rounded-2xl border transitionEffect no-underline overflow-hidden"
    :class="[
      disabled
        ? 'cursor-not-allowed opacity-60 bg-white border-primaryTheme/10 select-none'
        : isSelected
          ? 'bg-primaryTheme border-primaryTheme cursor-pointer'
          : 'bg-white border-primaryTheme/10 hover:border-primaryTheme/30 cursor-pointer'
    ]"
    @click="!disabled && $emit('select')"
  >
    <!-- Coming Soon Badge (disabled state) -->
    <span
      v-if="disabled"
      class="absolute top-2.5 right-3 text-[0.65rem] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-primaryTheme/10 text-primaryTheme/60"
    >
      Coming Soon
    </span>

    <!-- Left: Icon + Label -->
    <div class="basic-flex gap-4">
      <div
        class="w-11 h-11 rounded-xl flex items-center justify-center transitionEffect"
        :class="isSelected && !disabled ? 'bg-secondaryTheme/15' : 'bg-primaryTheme/6'"
      >
        <slot name="icon" :is-selected="isSelected && !disabled" />
      </div>

      <div>
        <p
          class="text-[0.78rem] leading-[140%] mb-0.5 transitionEffect text-secondaryTextTheme"
        >
          {{ sublabel }}
        </p>
        <p
          class="text-[1rem] font-semibold leading-[130%] transitionEffect"
          :class="isSelected && !disabled ? 'text-primaryWhite' : 'text-primaryTheme'"
        >
          {{ label }}
        </p>
      </div>
    </div>

    <!-- Right: Checkmark circle -->
    <div
      v-if="!disabled"
      class="w-5 h-5 rounded-full flex items-center justify-center transitionEffect flex-shrink-0"
      :class="isSelected ? 'bg-secondaryTheme' : 'border border-primaryTheme/20'"
    >
      <svg v-if="isSelected" width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#1D2F21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </component>
</template>

<script setup>
defineProps({
  /** The href to navigate to when clicked (ignored when disabled) */
  href: {
    type: String,
    default: '#'
  },
  /** Large label e.g. "App Store" */
  label: {
    type: String,
    required: true
  },
  /** Small label above e.g. "Download on the" */
  sublabel: {
    type: String,
    required: true
  },
  /** Whether this option is currently selected */
  isSelected: {
    type: Boolean,
    default: false
  },
  /**
   * Disables the button entirely:
   * - Not clickable
   * - Shows a "Coming Soon" badge
   * - Visually dimmed
   */
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select'])
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
