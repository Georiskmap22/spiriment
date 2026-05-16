<template>
    <nav class="custom-width py-4 md:py-[1.1rem] basic-flex justify-between relative z-99999999999">
        <!-- Logo -->
        <div class="logo">
            <nuxt-link to="/">
                <NuxtImg src="/icons/logoDark.svg" class="w-20"/>
            </nuxt-link>
        </div>

        <!-- Desktop Navigation (hidden on mobile) -->
        <ul class="max-tabLarge:hidden basic-flex gap-6 relative">
            <li class="nav-link cursor-pointer flex items-center gap-2 transitionEffect"
              @click="showDropdown = !showDropdown"
            >
               <span>mentorship</span>
                <svg
                    class="w-4 h-4 transition-transform duration-300"
                    :class="showDropdown ? 'rotate-180' : 'rotate-0'"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </li>
            <div 
                class="mentorship-dropdown absolute top-8 left-0 flex flex-col bg-primaryTheme text-secondaryTheme shadow-[0px_1px_2px_#FFFAEC] overflow-hidden transition-all duration-300 z-50"
                :class="showDropdown ? 'h-auto max-h-[500px] mt-2' : 'h-0 max-h-0'"
            >
                <nuxt-link to="/mentor" 
                @click="closeDropdown"
                class="hover:bg-secondaryTheme hover:text-primaryTheme transitionEffect w-full h-full px-12 py-4 border border-primaryTheme">
                    For Mentors
                </nuxt-link>
                <nuxt-link to="/mentee"
                @click="closeDropdown" 
                class="hover:bg-secondaryTheme hover:text-primaryTheme transitionEffect px-12 py-4 border border-primaryTheme">
                    For Mentees
                </nuxt-link>
            </div>
             <li class="nav-link transitionEffect"
            @click="closeDropdown">
                 <nuxt-link to="/volunteer">
                    volunteer
                </nuxt-link>
            </li>
            <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/partnerships">
                    partnership
                </nuxt-link>
            </li>
             <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/about">
                    about
                </nuxt-link>
            </li>
            <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/donate">
                    donate
                </nuxt-link>
            </li>
            <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/resources">
                    resources
                </nuxt-link>
            </li>           
            <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/shop">
                    shop
                </nuxt-link>
            </li>
            <li class="nav-link transitionEffect"
            @click="closeDropdown">
                <nuxt-link to="/contact">
                    contact
                </nuxt-link>
            </li>
        </ul>

        <!-- Desktop Download Button (hidden on mobile) -->
        <div class="hidden lg:block">
            <UiDownloadButton :isDark="true" iconTheme="#FFFAEC"/>
        </div>

        <!-- Mobile Hamburger Menu (visible only on mobile/tablet) -->
        <button 
            class="lg:hidden basic-flex flex-col gap-1.5 p-2 cursor-pointer hover:scale-110 transitionEffect"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
        >
            <span 
                class="w-6 h-0.5 bg-primaryTheme transition-all duration-300"
                :class="showMobileMenu ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span 
                class="w-6 h-0.5 bg-primaryTheme transition-all duration-300"
                :class="showMobileMenu ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span 
                class="w-6 h-0.5 bg-primaryTheme transition-all duration-300"
                :class="showMobileMenu ? '-rotate-45 -translate-y-2' : ''"
            ></span>
        </button>

        <!-- Mobile Side Navigation Menu -->
        <div 
            class="fixed inset-0 z-40 lg:hidden transition-all duration-300"
            :class="showMobileMenu ? 'visible' : 'invisible'"
            @click="closeMobileMenu"
        >
            <!-- Backdrop -->
            <div 
                class="absolute inset-0 bg-black transition-opacity duration-300"
                :class="showMobileMenu ? 'opacity-50' : 'opacity-0'"
            ></div>
            
            <!-- Side Menu -->
            <div 
                class="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-primaryTheme shadow-lg transform transition-transform duration-300 overflow-y-auto"
                :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
                @click.stop
            >
                <!-- Mobile Menu Header -->
                <div class="p-6 border-b border-secondaryTheme/20">
                    <div class="flex justify-between items-center mb-6">
                        <nuxt-link to="/" @click="closeMobileMenu">
                            <NuxtImg src="/icons/logoLight.svg" class="w-40"/>
                        </nuxt-link>
                        <button 
                            @click="closeMobileMenu"
                            class="text-secondaryTheme p-2"
                            aria-label="Close menu"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Mobile Download Button -->
                    <div class="mb-6">
                        <UiDownloadButton :isDark="false" iconTheme="#1D2F21" @click="closeMobileMenu"/>
                    </div>
                </div>

                <!-- Mobile Navigation Links -->
                <div class="p-6">
                    <ul class="space-y-1">
                        <!-- Mentorship Dropdown for Mobile -->
                        <li class="mb-2">
                            <button 
                                class="w-full flex items-center justify-between py-3 px-4 text-secondaryTheme text-left text-lg font-medium hover:bg-[#2F4E37] rounded-lg transition-colors"
                                @click="toggleMobileMentorship"
                            >
                                <span>Mentorship</span>
                                <svg 
                                    class="w-5 h-5 transition-transform duration-300"
                                    :class="showMobileMentorship ? 'rotate-180' : ''"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <!-- Mentorship Submenu -->
                            <div 
                                class="overflow-hidden transition-all duration-300"
                                :class="showMobileMentorship ? 'max-h-40 mt-2' : 'max-h-0'"
                            >
                                <div class="ml-4 space-y-1 border-l border-secondaryTheme/20 pl-4">
                                    <nuxt-link 
                                        to="/mentor" 
                                        @click="closeMobileMenu"
                                        class="block py-2 px-4 text-secondaryTextTheme hover:text-secondaryTheme hover:bg-[#2F4E37] rounded-lg transition-colors"
                                    >
                                        For Mentors
                                    </nuxt-link>
                                    <nuxt-link 
                                        to="/mentee" 
                                        @click="closeMobileMenu"
                                        class="block py-2 px-4 text-secondaryTextTheme hover:text-secondaryTheme hover:bg-[#2F4E37] rounded-lg transition-colors"
                                    >
                                        For Mentees
                                    </nuxt-link>
                                </div>
                            </div>
                        </li>

                        <!-- Other Navigation Links -->
                        <li v-for="link in mobileLinks" :key="link.to">
                            <nuxt-link 
                                :to="link.to" 
                                @click="closeMobileMenu"
                                class="block py-3 px-4 text-secondaryTheme text-lg font-medium hover:bg-[#2F4E37] rounded-lg transition-colors"
                            >
                                {{ link.label }}
                            </nuxt-link>
                        </li>
                    </ul>

                    <!-- Contact/Support Section -->
                    <div class="mt-8 pt-6 border-t border-secondaryTheme/20">
                        <div class="space-y-4">
                            <a href="mailto:hello@spiriment.org" class="block text-secondaryTextTheme hover:text-secondaryTheme transition-colors">
                                hello@spiriment.org
                            </a>
                            <div class="flex space-x-4">
                                <a href="/privacy" class="text-secondaryTextTheme hover:text-secondaryTheme transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/terms" class="text-secondaryTextTheme hover:text-secondaryTheme transition-colors">
                                    Terms
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const showDropdown = ref(false)
const showMobileMenu = ref(false)
const showMobileMentorship = ref(false)

const closeDropdown = () => {
  showDropdown.value = false;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  if (showMobileMenu.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  showMobileMenu.value = false;
  showMobileMentorship.value = false;
  document.body.style.overflow = '';
};

const toggleMobileMentorship = () => {
  showMobileMentorship.value = !showMobileMentorship.value;
};

// Define mobile navigation links
const mobileLinks = [
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/partnerships', label: 'Partnership' },
  { to: '/about', label: 'About' },
  { to: '/donate', label: 'Donate' },
  { to: '/resources', label: 'Resources' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' }
]

// Close mobile menu on route change
onMounted(() => {
  const router = useRouter();
  router.afterEach(() => {
    closeMobileMenu();
  });
});

// Close menu on ESC key press
onMounted(() => {
  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  };
  window.addEventListener('keydown', handleEsc);
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEsc);
  });
});
</script>

<style scoped>
/* Additional styles for mobile menu scroll */
.fixed .absolute::-webkit-scrollbar {
  width: 4px;
}

.fixed .absolute::-webkit-scrollbar-track {
  background: rgba(255, 250, 236, 0.1);
}

.fixed .absolute::-webkit-scrollbar-thumb {
  background: rgba(255, 250, 236, 0.3);
  border-radius: 2px;
}

/* Prevent body scroll when mobile menu is open */
body:has(.fixed .visible) {
  overflow: hidden;
}
</style>