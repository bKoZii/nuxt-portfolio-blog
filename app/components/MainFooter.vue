<template>
  <footer
    class="bg-default drop-shadow-md dark:drop-shadow-none md:border border-default border-t sm:rounded rounded-none text-toned"
  >
    <UContainer class="flex sm:flex-row flex-col flex-nowrap justify-between items-center gap-5 px-6 py-3 border-default border-x">
      <div class="flex flex-col items-center sm:items-start text-xs">
        <span>© <NuxtTime
          :datetime="Date.now()"
          year="numeric"
        /> {{ $t('home.hero.myName') }}</span>
        <span>{{ $t('home.footer.copyrightText') }}</span>
      </div>
      <div class="flex flex-row gap-5">
        <UTooltip
          text="Source Code"
          :content="{ side: 'top' }"
        >
          <NuxtLink
            to="https://github.com/bKoZii/nuxt-portfolio-blog"
            target="_blank"
            aria-label="Go to GitHub Repo Page"
          >
            <div class="hover:text-black dark:hover:text-white active:scale-95">
              <Icon
                name="simple-icons:github"
                size="20px"
                mode="svg"
              />
            </div>
          </NuxtLink>
        </UTooltip>
      </div>
    </UContainer>
  </footer>
</template>
