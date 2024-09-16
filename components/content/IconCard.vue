<script setup lang="ts">
interface IconCardProps {
  title: string
  description: string
  icon: string
}

withDefaults(defineProps<IconCardProps>(), {
  title: 'Default title',
  description: 'Default description',
  icon: 'IconMarkdown',
})
</script>

<template>
  <div class="border rounded bg-white p-6 dark:border-gray-700 dark:bg-black">
    <component :is="icon" class="h-20 w-20" />
    <h2 class="mb-2 text-3xl font-semibold">
      {{ title }}
    </h2>
    <p>{{ description }}</p>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
