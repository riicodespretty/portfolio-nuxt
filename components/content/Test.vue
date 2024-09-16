<script setup lang="ts">
interface TestProps {
  id?: string
  icon: string
}

withDefaults(defineProps<TestProps>(), {
  id: 'Test ID',
})
</script>

<template>
  <div class="border rounded bg-white p-2 dark:border-gray-700 dark:bg-black">
    <ContentSlot />
  </div>
  <h1>
    {{ id }}
  </h1>
</template>
