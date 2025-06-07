<template>
  <div class="relative">
    <!-- Dead simple Top-Page Alert - will be removed in a few commits -->
    <UAlert
      description="You are visiting my new portfolio design! This is a work in progress and most of the content is not yet available."
      class="py-1 rounded-none text-center"
      color="primary"
      :ui="{ root: 'z-20' }"
    />
    <MainNavbar />
    <UContainer class="space-y-8 border-default md:border-x">
      <main class="pb-12 min-h-dvh">
        <slot />
      </main>
    </UContainer>
    <MainFooter />
  </div>
</template>
