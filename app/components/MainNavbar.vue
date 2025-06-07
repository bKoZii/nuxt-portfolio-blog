<template>
  <div
    class="top-0 z-10 sticky bg-default/80 drop-shadow-sm backdrop-blur-xl border border-default border-t-0"
  >
    <UContainer class="py-1 border-default border-x">
      <header class="flex items-center">
        <div class="flex-1 font-mono tracking-tighter">
          <ULink
            id="myName"
            to="/"
            class="flex items-center text-highlighted"
            aria-label="logo"
          >
            <h1 class="font-bold text-lg">bkozii<span class="font-normal text-sm">.com</span></h1>
          </ULink>
        </div>
        <div class="flex flex-1 justify-center">
          <nav class="flex space-x-2">
            <ul
              v-for="item in navItems"
              :key="item.to"
              class="list-none"
            >
              <li>
                <UTooltip
                  :text="item.label"
                  :content="{ sideOffset: 10 }"
                >
                  <UButton
                    :icon="item.icon"
                    :to="item.to"
                    active-color="primary"
                    active-variant="link"
                    variant="link"
                    color="neutral"
                    :disabled="item.to !== '/'"
                  />
                </UTooltip>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex flex-row flex-1 justify-end shrink-0">
          <LazyNavbarLangSwitch />
          <LazyNavbarThemeSwitch />
        </div>
      </header>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const navItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'solar:home-2-linear',
  },
  {
    label: 'Projects',
    to: '/Projects',
    icon: 'ph:folder-open-duotone',
  },
  {
    label: 'What\'s In My Bag?',
    to: '/WhatIsInMyBag',
    icon: 'solar:backpack-linear',
  },
  /* {
    label: 'Bookmarks',
    to: '/Bookmarks',
    icon: 'ph:bookmark-duotone',
  }, */
  {
    label: 'Blog',
    to: '/blog',
    icon: 'solar:book-2-linear',
  },
]
</script>
