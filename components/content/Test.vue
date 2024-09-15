<script setup lang="ts">
interface TestProps {
  id: string
}

withDefaults(defineProps<TestProps>(), {
  id: 'Test ID',
})
</script>

<template>
  <div class="border rounded bg-white p-2 dark:border-gray-700 dark:bg-black">
    <slot />
  </div>
</template>
