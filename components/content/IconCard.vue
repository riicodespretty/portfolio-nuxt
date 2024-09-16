<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title',
  },
  description: {
    type: String,
    default: 'Default description',
  },
  icon: {
    type: String,
    default: 'IconMarkdown',
  },
})
</script>

<template>
  <div class="border rounded bg-white p-6 dark:border-gray-700 dark:bg-black">
    <component :is="icon" class="h-20 w-20" />
    <h2 class="mb-2 text-3xl font-semibold">
      {{ title }}
    </h2>
    <p>{{ description }}</p>
  </div>
</template>
