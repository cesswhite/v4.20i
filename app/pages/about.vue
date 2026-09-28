<template>
  <NuxtLayout name="default">
    <div class="h-dvh flex items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/2 xl:w-1/3">
        <div class="flex flex-col items-center justify-center gap-y-2">
          <NuxtImg
            src="https://avatars.githubusercontent.com/u/73481529?s=200&v=4"
            alt="Eco Development Studios Profile Picture"
            class="size-16 mx-auto rounded-full"
            width="64"
            height="64"
            :placeholder="[64, 64, 100, 10]"
          />
          <span class="font-bold">{{ $t('about.hello', { name }) }}</span>
          <p class="font-normal text-base text-center text-dark-950/60 dark:text-dark-50/60">
            {{ $t('about.description') }}
          </p>
        </div>
        <div class="flex items-center gap-x-1.5 justify-center text-dark-950 dark:text-dark-50 text-sm">
          <span class="inline-block text-dark-950 dark:text-dark-50 w-auto">{{ $t('about.developedBy') }}</span>
          <UButton to="https://ecostudios.dev/" target="_blank" variant="link" color="primary" class="underline p-0">
            Eco Development Studios
          </UButton>
        </div>
        <div class="flex flex-col items-center gap-y-4 w-full">
          <UButton
            :to="localePath('/')"
            variant="link"
            color="primary"
            icon="i-lucide-arrow-left"
            class="cursor-pointer"
          >
            {{ $t('about.backToHome') }}
          </UButton>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { name } = storeToRefs(useIndexStore())
const { t } = useI18n()
const localePath = useLocalePath()

useSiteSeo('about')
</script>