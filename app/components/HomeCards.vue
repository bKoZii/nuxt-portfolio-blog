<template>
  <div class="gap-4 grid sm:grid-cols-2 h-full">
    <UCard class="h-full">
      <template #header>
        <h1 class="font-bold">
          Tech Stacks
        </h1>
        <span class="text-sm">{{ $t('home.techStacks.subtitle') }}</span>
      </template>
      <Technology />
    </UCard>

    <UCard class="h-full">
      <template #header>
        <h1 class="font-bold">
          Social Links
        </h1>
        <span class="text-sm">{{ $t('home.socialLinks.subtitle') }}</span>
      </template>
      <SocialLinks />
    </UCard>

    <UCard class="sm:col-span-2 h-full">
      <template #header>
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold">
              Featured Work
            </h1>
            <span class="text-sm">{{ $t('home.featuredWork.subtitle') }}</span>
          </div>
          <UButton
            to="/Projects"
            label="All Projects"
            variant="ghost"
            icon="ph:arrow-right-light"
            trailing
            disabled
          />
        </div>
      </template>
      <FeaturedWork />
    </UCard>
  </div>
</template>
