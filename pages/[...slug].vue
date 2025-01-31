<script setup lang="ts">
const route = useRoute()

const { data: content } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: content.value?.title,
  description: content.value?.description,
})
</script>

<template>
  <main>
    <ContentRenderer v-if="content" :value="content" />
  </main>
</template>
