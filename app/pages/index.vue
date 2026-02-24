<template>
  <NuxtLayout name="default">
    <div class="h-dvh flex items-center justify-center px-4 md:px-0">
      <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/2 xl:w-1/3">
        <div class="size-12">
          <AppLogo />
        </div>
        <h1 class="font-extrabold text-5xl text-dark-950 font-family-instrument italic dark:text-dark-50">
          {{ $t('home.title') }}
        </h1>
        <p class="font-normal text-base font-family-inter tracking-tighter text-center text-dark-950/60 dark:text-dark-50/60">
          {{ $t('home.subtitle') }}
          <br>
          {{ $t('home.tagline') }}
        </p>
        <div class="w-auto flex items-center justify-center gap-2 h-10">
          <UColorModeButton color="primary" variant="link" size="lg" class="cursor-pointer" />
          <LazyAppSwitchPrimaryColor />
        </div>
        <div class="flex flex-col items-center gap-y-4 mx-auto w-full sm:w-1/2 xl:w-1/3">
          <UInput
            v-model="name"
            :label="$t('home.name')"
            :placeholder="$t('home.namePlaceholder')"
            class="w-full"
            size="lg"
            variant="outline"
            @keyup.enter="handleGoToAbout"
          />
          <UButton block @click="handleGoToAbout" variant="solid" color="primary" size="lg" class="cursor-pointer">
            {{ $t('home.enter') }}
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
const toast = useToast()

function handleGoToAbout() {
  if (name.value) {
    toast.add({
      id: 'success-toast',
      title: t('home.toastHey'),
      description: t('home.toastClicked'),
      color: 'success',
      duration: 0
    })
    navigateTo(localePath('/about'))
  } else {
    toast.add({
      id: 'warning-name-required',
      title: t('home.toastOops'),
      description: t('home.toastPleaseName'),
      color: 'warning',
      duration: 0
    })
  }
}

useSeoMeta({
  title: () => t('seo.homeTitle'),
  ogTitle: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogDescription: () => t('seo.homeDescription'),
  ogImage: 'https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420i-og-image.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://v420i.ecostudios.dev/',
  twitterImage: 'https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420i-og-image.webp',
  twitterTitle: () => t('seo.homeTitle'),
  twitterDescription: () => t('seo.homeDescription'),
  ogImageWidth: 1200,
  ogImageHeight: 630
})
</script>