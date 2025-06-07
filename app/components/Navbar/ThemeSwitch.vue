<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip
        text="Switch Color Mode"
        disable-closing-trigger
      >
        <UButton
          color="neutral"
          variant="ghost"
          size="sm"
          :icon="iconName"
          @click="startViewTransition"
        />
      </UTooltip>

      <template #fallback>
        <USkeleton
          class="size-6"
          :ui="{ rounded: 'rounded-full' }"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system'] as const
type ColorMode = (typeof ColorModeList)[number]

const getNextColorMode = (currentMode: ColorMode): ColorMode => {
  const currentIndex = ColorModeList.indexOf(currentMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  return ColorModeList[nextIndex] as ColorMode
}

const switchColorMode = () => {
  colorMode.preference = getNextColorMode(colorMode.preference as ColorMode)
}

const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, string> = {
    system: 'monitor-linear',
    light: 'sun-linear',
    dark: 'moon-linear',
  }
  const iconName = colorMode.preference as ColorMode
  return `solar:${iconNameMap[iconName]}`
})

const startViewTransition = (event: MouseEvent) => {
  const nextMode = getNextColorMode(colorMode.preference as ColorMode)

  if (nextMode === 'system' || !document.startViewTransition) {
    switchColorMode()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const transition = document.startViewTransition(() => {
    switchColorMode()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 99;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
