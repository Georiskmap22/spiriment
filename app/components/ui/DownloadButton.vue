<template>
  <div>
    <!-- Trigger Button -->
    <div
      class="basic-flex px-6 py-4 rounded-[6.25rem] gap-4 w-fit hoverEffect transitionEffect"
      :class="isDark ? 'bg-primaryTheme' : 'bg-secondaryTheme'"
      :style="{ backgroundColor: textTheme }"
      @click="openModal"
    >
      <h3 class="text-[1rem] leading-[160%]" :style="{ color: iconTheme }">
        Download the App
      </h3>
      <div class="basic-flex gap-3">
        <IconsAppleIcon :color="iconTheme" />
        <IconsPlayStoreIcon :color="iconTheme" />
      </div>
    </div>

    <!-- Modal Overlay -->
    <Transition name="overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
        style="background-color: rgba(22, 36, 25, 0.55); backdrop-filter: blur(4px);"
        @click.self="closeModal"
      >
        <!-- Modal Card -->
        <Transition name="modal">
          <div
            v-if="isOpen"
            class="bg-secondaryTheme rounded-[1.75rem] w-full max-w-[440px] overflow-hidden shadow-2xl"
          >
            <!-- Modal Header -->
            <div class="bg-primaryTheme px-7 pt-7 pb-6">
              <div class="basic-flex justify-between mb-1">
                <h2 class="text-[1.25rem] font-bold leading-[120%] text-primaryWhite">
                  Download the App
                </h2>
                <button
                  class="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transitionEffect"
                  style="background-color: rgba(235, 238, 236, 0.12);"
                  @click="closeModal"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1" x2="13" y2="13" stroke="#EBEEEC" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="13" y1="1" x2="1" y2="13" stroke="#EBEEEC" stroke-width="1.8" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <p class="text-[0.88rem] leading-[160%] text-secondaryTextTheme">
                Choose your platform to get started.
              </p>
            </div>

            <!-- Store Options -->
            <div class="px-7 py-6 flex flex-col gap-3">

              <!-- iOS -->
              <UiAppStoreButton
                :href="iosLink"
                label="App Store"
                sublabel="Download on the"
                :is-selected="selected === 'ios'"
                :disabled="iosDisabled"
                @select="selected = 'ios'"
              >
                <template #icon="{ isSelected }">
                  <IconsAppleIcon :color="isSelected ? '#FFFAEC' : '#1D2F21'" />
                </template>
              </UiAppStoreButton>

              <!-- Android -->
              <UiAppStoreButton
                :href="androidLink"
                label="Google Play"
                sublabel="Get it on"
                :is-selected="selected === 'android'"
                :disabled="androidDisabled"
                @select="selected = 'android'"
              >
                <template #icon="{ isSelected }">
                  <IconsPlayStoreIcon :color="isSelected ? '#FFFAEC' : '#1D2F21'" />
                </template>
              </UiAppStoreButton>

            </div>

            <!-- Footer -->
            <p class="text-center text-[0.78rem] text-secondaryTextTheme pb-6 px-7 leading-[160%]">
              Tap a platform above to be redirected to the store.
            </p>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    default: true
  },
  iconTheme: {
    type: String,
    default: '#1D2F21'
  },
  textTheme: {
    type: String,
    required: false
  },
  iosLink: {
    type: String,
    default: 'https://apps.apple.com'
  },
  androidLink: {
    type: String,
    default: 'https://play.google.com/store/apps/details?id=com.spiriment.mentor'
  },
  /** Set to true to disable the iOS button and show "Coming Soon" */
  iosDisabled: {
    type: Boolean,
    default: true
  },
  /** Set to true to disable the Android button and show "Coming Soon" */
  androidDisabled: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
const selected = ref(null)

const openModal = () => {
  selected.value = null
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s linear;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s linear, transform 0.3s linear;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
