<template>
  <section
    class="flex lg:flex-row flex-col-reverse justify-between items-center gap-8 lg:gap-0 py-12"
  >
    <div
      class="flex flex-col justify-center items-center lg:items-start"
    >
      <MotionSlideBlur
        direction="left"
        :delay="0.8"
      >
        <UChip
          size="lg"
          class="relative"
          color="secondary"
        >
          <UChip
            size="lg"
            color="secondary"
            class="top-0 right-0 absolute animate-ping"
          />
          <UBadge
            :label="$t('home.hero.badgeContent')"
            icon="ph:suitcase-duotone"
            variant="subtle"
            class="mb-1 md:mb-3 font-bold"
            color="secondary"
            size="lg"
          />
        </UChip>
      </MotionSlideBlur>
      <MotionSlideBlur
        direction="left"
      >
        <h1 class="font-black text-primary text-4xl lg:text-5xl tracking-tight">
          {{ $t('home.hero.myName') }}
        </h1>
      </MotionSlideBlur>
      <MotionSlideBlur
        :delay="0.2"
        direction="left"
      >
        <p class="my-2 md:my-4 text-muted lg:text-left text-center text-balance">
          {{ $t('home.hero.intro') }}
        </p>
      </MotionSlideBlur>
      <MotionSlideBlur
        direction="up"
        :delay="0.5"
      >
        <div class="flex flex-row justify-center lg:justify-start items-center gap-2 w-full">
          <UTooltip text="Undergoing...">
            <UButton
              icon="lucide:external-link"
              color="primary"
              size="lg"
              disabled
            >
              Open CV - Thai
            </UButton>
          </UTooltip>
          <UButtonGroup size="lg">
            <UTooltip text="Copy my email">
              <UButton
                icon="lucide:mail"
                variant="subtle"
                class="cursor-pointer"
                @click="copyEmail"
              />
            </UTooltip>
            <UButton
              icon="lucide:instagram"
              variant="subtle"
              to="https://www.instagram.com/bkoziii/"
              target="_blank"
            />
            <UButton
              icon="lucide:github"
              variant="subtle"
              to="https://github.com/bkozii"
              target="_blank"
            />
          </UButtonGroup>
        </div>
      </MotionSlideBlur>
    </div>
    <div>
      <MotionSlideBlur direction="right">
        <NuxtImg
          src="me-rmutsv-square_hhiarv"
          provider="cloudinary"
          class="shadow-md dark:shadow-none rounded-lg size-52 md:size-40 lg:size-64 object-cover aspect-square"
          width="256"
          height="256"
          alt="Picture of Me, Konkamon Sion"
          aria-label="Picture of Me, Konkamon Sion"
        />
      </MotionSlideBlur>
    </div>
  </section>
</template>

<script setup lang="ts">
const toast = useToast()
const copyEmail = () => {
  const email = 'konkamon.work@gmail.com'
  try {
    navigator.clipboard.writeText(email)
  } finally {
    toast.add({
      title: 'Copied Email',
      description: `Email "${email}" has been copied to clipboard.`,
      color: 'success',
      icon: 'solar:check-circle-linear',
    })
  }
}
</script>
